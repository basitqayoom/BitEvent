import { FETCH_PROGRAMS, FETCH_PROGRAM } from "./type";
import { db, projectStorage, timestamp } from "../../firebase";
import history from "../history";

export const createProgram = (input) => async (dispatch, getState) => {
  const user = getState().auth.user;
  if (user) {
    try {
      const { formValues } = input;
      const { file } = input;

      const { user } = await getState().auth;
      // Add data to PROGRAM collection
      const data = {
        ...formValues,
        registrationCount: 0,
        imageURL: null,
        createdAt: timestamp(),
        host: {
          userId: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        },
        isActive: true,
      };
      const programId = await db.collection("programs").add(data);
      // UPDATE PROGRAM ID IN PROGRAM COLLECTION
      await db.collection("programs").doc(programId.id).update({
        programId: programId.id,
      });

      // Add data to USER collection
      const program = {
        ...formValues,
        registrationCount: 0,
        createdAt: timestamp(),
        programId: programId.id,
        isActive: true,
      };
      await db
        .collection("users")
        .doc(user.uid)
        .collection("programsCreated")
        .doc(programId.id)
        .set(program);

      // ADD PHOTO
      if (file) {
        const storageRef = projectStorage
          .ref()
          .child(user.uid + "/programs/" + file.name);
        await storageRef.put(file).on(
          "state_changed",
          (snap) => {
            console.log((snap.bytesTransferred / snap.totalBytes) * 100);
          },
          (err) => {
            console.log(err.message);
          },
          async () => {
            let imageURL = await storageRef.getDownloadURL();
            console.log(imageURL);
            await db.collection("programs").doc(programId.id).update({
              imageURL: imageURL,
            });
          }
        );
      }

      await history.push("/programs/" + programId.id);
    } catch (error) {
      history.push("/error");
    }
  } else {
    history.push("/verify/email");
  }
};

export const fetchPrograms =
  (byCategory, byProgram, latestDoc = "", persistArray = []) =>
  async (dispatch, getState) => {
    try {
      const pageSize = 15;
      const ref = await db.collection("programs").limit(pageSize);
      const category = byCategory[0].toLowerCase() + byCategory.slice(1);
      let docs = null;
      const itemArray = [];
      const { LayoutIsLast } = getState().isLastDoc;
      if (LayoutIsLast) {
      }
      if (category === "all") {
        if (byProgram === "mostPopular") {
          // ALL AND POPULAR
          docs = await ref
            .orderBy("registrationCount", "desc")
            .startAfter(latestDoc)
            .get();
        } else if (byProgram === "mostRecent") {
          // ALL AND RECENT
          docs = await ref
            .orderBy("createdAt", "desc")
            .startAfter(latestDoc)
            .get();
        }
      } else {
        if (byProgram === "mostPopular") {
          // CATEGORY AND MOST POPULAR
          docs = await ref
            .orderBy("registrationCount", "desc")
            .startAfter(latestDoc)
            .where("category", "==", category)
            .get();
        } else if (byProgram === "mostRecent") {
          docs = await ref
            .orderBy("createdAt", "desc")
            .startAfter(latestDoc)
            .where("category", "==", category)
            .get();
        }
      }

      await docs.forEach((item) => {
        itemArray.push(item.data());
      });
      const data = await docs.docs;
      const result = await [...persistArray, ...itemArray];
      await dispatch({
        type: "LAYOUT_IS_LAST",
        payload: true,
      });

      if (data.length > 0) {
        const lastDoc = await data[data.length - 1];
        await dispatch({
          type: FETCH_PROGRAMS,
          payload: { result, lastDoc, itemArray },
        });

        history.push("/");
      } else {
        if (persistArray.length < 1) {
          await dispatch({
            type: FETCH_PROGRAMS,
            payload: { result, latestDoc, itemArray },
          });
          history.push("/");
        }
      }
    } catch (error) {
      console.log(error.message);
      history.push("/error");
    }
  };

export const fetchProgram = (id) => async (dispatch) => {
  try {
    const docs = await db.collection("programs").doc(id).get();
    if (docs.data().isActive === true) {
      await dispatch({ type: FETCH_PROGRAM, payload: docs.data() });
    } else {
      history.push("/nopagefound");
    }
  } catch (error) {
    history.push("/error");
  }
};

export const sortPrograms =
  (byCategory = "all", byProgram = "mostPopular") =>
  async (dispatch) => {
    try {
      await dispatch({
        type: "SORT_PROGRAMS",
        payload: { byCategory, byProgram },
      });
    } catch (error) {
      history.push("/error");
    }
  };

import { auth, provider, db, timestamp } from "../../firebase";
import { LOGOUT, AUTH_ERROR } from "./type";
import history from "../history";

export const googleLogin = () => async (dispatch) => {
  try {
    const response = await auth.signInWithPopup(provider);
    const doc = await db.collection("users").doc(response.user.uid).get();

    if (doc.exists) {
      await db
        .collection("users")
        .doc(response.user.uid)
        .set(
          {
            accountDetail: {
              emailVerified: response.user.emailVerified,
              photoURL: response.user.photoURL,
            },
          },
          { merge: true }
        );
      await history.push("/");
    } else {
      await db
        .collection("users")
        .doc(response.user.uid)
        .set({
          accountDetail: {
            userId: response.user.uid,
            displayName: response.user.displayName,
            email: response.user.email,
            photoURL: auth.currentUser.photoURL,
            accountCreatedAt: timestamp(),
          },
        });

      await history.push("/");
    }
  } catch (error) {
    await dispatch({ type: AUTH_ERROR, payload: error.message });
  }
};

export const emailSignUp = (newUser) => async (dispatch) => {
  try {
    const response = await auth.createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    );
    await auth.currentUser.sendEmailVerification();

    await db
      .collection("users")
      .doc(response.user.uid)
      .set({
        accountDetail: {
          userId: response.user.uid,
          displayName: newUser.firstName + " " + newUser.lastName,
          email: newUser.email,
          photoURL: null,
          accountCreatedAt: timestamp(),
        },
      });
    await history.push("/");
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: error.message });
  }
};

export const emailLogin = (credentials) => async (dispatch) => {
  try {
    const response = await auth.signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    );
    await db
      .collection("users")
      .doc(response.user.uid)
      .set(
        {
          accountDetail: {
            emailVerified: response.user.emailVerified,
            photoURL: response.user.photoURL,
          },
        },
        { merge: true }
      );
    await history.push("/");
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: error.message });
  }
};

export const logout = () => async (dispatch) => {
  await auth.signOut();
  await dispatch({ type: LOGOUT });
  await history.push("/login/email");
};
export const updateAuth = (user, bool) => async (dispatch) => {
  dispatch({ type: "UPDATE_AUTH", payload: user });
};

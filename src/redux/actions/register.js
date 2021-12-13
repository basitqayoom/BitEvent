import { db, timestamp } from "../../firebase";
import firebase from "firebase";
import history from "../history";

export const register = (programId, user, host, program) => async (
  dispatch,
  getState
) => {
  try {
    const { user } = getState().auth;
    if (!user) {
      history.push("/login/email");
    } else {
      await db
        .collection("programs")
        .doc(programId)
        .collection("registeredUsers")
        .doc(user.uid)
        .set({
          displayName: user.displayName,
          email: user.email,
          userId: user.uid,
          joinedAt: timestamp(),
        });

      await db
        .collection("users")
        .doc(host.userId)
        .collection("programsCreated")
        .doc(programId)
        .collection("registeredUsers")
        .doc(user.uid)
        .set({
          displayName: user.displayName,
          email: user.email,
          userId: user.uid,
          joinedAt: timestamp(),
        });

      await db
        .collection("users")
        .doc(user.uid)
        .collection("joinedPrograms")
        .doc(programId)
        .set({ ...program, joinedAt: timestamp() });

      // UPDATE REGISTRATION COUNT
      // in users collection

      await db
        .collection("users")
        .doc(host.userId)
        .collection("programsCreated")
        .doc(programId)
        .update({
          registrationCount: firebase.firestore.FieldValue.increment(1),
        });

      // in programs collection
      await db
        .collection("programs")
        .doc(programId)
        .update({
          registrationCount: firebase.firestore.FieldValue.increment(1),
        });
    }
  } catch (error) {
    history.push("/error");
    console.log(error.message);
  }
};

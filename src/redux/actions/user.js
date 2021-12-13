import { FETCH_MYPROGRAMS } from "./type";
import { db } from "../../firebase";
import history from "../history";

export const getMyPrograms = (userId) => async (dispatch) => {
  try {
    const response = [];

    const data = await db
      .collection("users")
      .doc(userId)
      .collection("programsCreated")
      .get();

    data.forEach((doc) => {
      response.push(doc.data());
    });
    await dispatch({ type: FETCH_MYPROGRAMS, payload: response });
  } catch (error) {
    history.push("/error");
  }
};

export const updateActive =
  (isActive, userId, programId) => async (dispatch) => {
    try {
      await db
        .collection("users")
        .doc(userId)
        .collection("programsCreated")
        .doc(programId)
        .update({
          isActive: !isActive,
        });
      await db.collection("programs").doc(programId).update({
        isActive: !isActive,
      });
    } catch (error) {
      history.push("/error");
    }
  };

export const getRegisteredUsers = (userId, programId) => async (dispatch) => {
  try {
    const response = [];

    const docs = await db
      .collection("users")
      .doc(userId)
      .collection("programsCreated")
      .doc(programId)
      .collection("registeredUsers")
      .get();

    await docs.forEach((item) => {
      response.push(item.data());
    });

    dispatch({ type: "GET_REGISTERED_USERS", payload: response });
  } catch (error) {
    history.push("/error");
  }
};

export const getJoinedPrograms = (userId) => async (dispatch) => {
  try {
    const response = [];
    const docs = await db
      .collection("users")
      .doc(userId)
      .collection("joinedPrograms")
      .get();

    (await docs).forEach((doc) => response.push(doc.data()));

    await dispatch({ type: "FETCH_JOINED_PROGRAMS", payload: response });
  } catch (error) {
    history.push("/error");
  }
};

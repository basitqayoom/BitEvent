import { db } from "../../firebase";

export const fetchTrendingList = () => async (dispatch) => {
  const listSize = 3;

  const docs = await db
    .collection("programs")
    .limit(listSize)
    .orderBy("registrationCount", "desc")
    .get();
  const query = [];
  await docs.forEach((item) => {
    query.push(item.data().category);
  });

  const uniqueList = await query.reduce((unique, item) => {
    return unique.includes(item) ? unique : [...unique, item];
  }, []);

  await dispatch({ type: "FETCH_TRENDING", payload: uniqueList });
};

export const fetchExploreList = (user) => async (dispatch) => {
  if (user) {
    const listSize = 3;
    const userId = user.uid;
    const docs = await db
      .collection("users")
      .doc(userId)
      .collection("joinedPrograms")
      .limit(listSize)
      .orderBy("joinedAt", "desc")
      .get();

    const query = [];
    await docs.forEach((item) => {
      query.push(item.data().category);
    });

    const uniqueList = await query.reduce((unique, item) => {
      return unique.includes(item) ? unique : [...unique, item];
    }, []);

    await dispatch({ type: "FETCH_EXPLORE", payload: uniqueList });
  }
};

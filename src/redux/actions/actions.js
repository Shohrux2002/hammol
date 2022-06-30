import getDate from "../API";
export const GET_DATA = "get/data";
export const SELECT = "select";
export const CATEGORY = "category";
export const productAction = () => async (dispatch, getState) => {
  let data;
  if (
    getState().selectReducer.categoryName.search === "" &&
    getState().selectReducer.categoryName.select === "all"
  ) {
    data = await getDate("product?");
  } else if (
    getState().selectReducer.categoryName.search !== "" &&
    getState().selectReducer.categoryName.select === "all"
  ) {
    console.log("aaaaaaaaa");
    data = await getDate(
      `product?name=${getState().selectReducer.categoryName.search}`
    );
  } else if (!getState().selectReducer.categoryName.search) {
    data = await getDate(
      `product?category=${getState().selectReducer.categoryName.select}`
    );
  } else {
    data = await getDate(
      `product?name=${getState().selectReducer.categoryName.search}&category=${
        getState().selectReducer.categoryName.select
      }`
    );
  }
  console.log(getState());

  dispatch({ type: GET_DATA, payload: data });
};
export const selectAction = (value) => {
  return {
    type: SELECT,
    payload: value,
  };
};
export const categoryAction = () => async (dispatch, getState) => {
  const data = await getDate("category");
  console.log(data);
  dispatch({
    type: CATEGORY,
    payload: data,
  });
};

import api from "../api";
const searchUser = (input) => async (dispatch) => {
  try {
    dispatch({ type: "SEARCH_USER_REQUEST_START", payload: null });
    const res = await api.get(`/search/users?q=${encodeURIComponent(input)}`);

    if (res.status === 200) {
      dispatch({
        type: "SEARCH_USER_REQUEST_SUCCESS",
        payload: res.data.items,
      });
    } else {
      throw new Error(res.data.message);
    }
  } catch (err) {
    dispatch({ type: "SEARCH_USER_REQUEST_FAIL", payload: err.message });
  }
};

const clearDisplay = () => (dispatch) => {
  dispatch({ type: "CLEAR_USERS", payload: null });
};

export const searchActions = { searchUser, clearDisplay };

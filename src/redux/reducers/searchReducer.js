const initialState = {
  loading: false,
  users: [],
  error: "",
};

const searchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SEARCH_USER_REQUEST_START":
      return { ...state, loading: true };
    case "SEARCH_USER_REQUEST_SUCCESS":
      return { ...state, users: payload, loading: false };
    case "SEARCH_USER_REQUEST_FAIL":
      return { ...state, loading: false, error: payload };
    case "CLEAR_USERS":
      return { ...state, users: [] };
    default:
      return { ...state };
  }
};

export default searchReducer;

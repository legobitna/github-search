import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import searchReducer from "./reducers/searchReducer";

const store = createStore(searchReducer, applyMiddleware(thunk));

export default store;

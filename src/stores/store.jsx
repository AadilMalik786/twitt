import { createStore } from "redux";
import {persistStore} from "redux-persist";
import rootReducer from "../reducers/rootReducers";
const store =createStore(rootReducer);
const persistor = persistStore(store)
export default store;
export {persistor}
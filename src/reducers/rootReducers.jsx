import { combineReducers } from "redux";
// import crossing from "./reducer";
// import  create  from "./reducer";
// import { signCross } from "./reducer";
import reducerName from "./reducer";
import { reducerPhone, reducerMonth,reducerDay,reducerEmail,reducerYear,ChangeEmail} from "./reducer";

const rootReducer =combineReducers({
 reducerName,
 reducerPhone,
 reducerMonth,
 reducerDay,
 reducerYear,
 ChangeEmail,
 reducerEmail
})
export default rootReducer;
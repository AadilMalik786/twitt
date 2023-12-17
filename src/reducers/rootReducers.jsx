import { combineReducers } from "redux";
// import crossing from "./reducer";
// import  create  from "./reducer";
// import { signCross } from "./reducer";
import reducerName from "./reducer";
import { reducerPhone,reducerSendSigninData, reducerSendEmail,reducerMonth,reducerDay,reducerEmail,reducerYear,ChangeEmail} from "./reducer";

const rootReducer =combineReducers({
 reducerName,
 reducerPhone,
 reducerMonth,
 reducerDay,
 reducerYear,
 ChangeEmail,
 reducerEmail,
 reducerSendEmail,
 reducerSendSigninData,
})
export default rootReducer;
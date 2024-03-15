import { combineReducers } from "redux";
// import crossing from "./reducer";
// import  create  from "./reducer";
// import { signCross } from "./reducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import reducerName from "./reducer";
import { reducerPhone,UserProfile,reducerBoolean,reducerRecieveName,reducerSendSigninData, reducerSendEmail,reducerMonth,reducerDay,reducerEmail,reducerYear,ChangeEmail} from "./reducer";

const userProfilePersistConfig = {
    key: 'root',
    storage,
  }
  
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
 reducerRecieveName,
 reducerBoolean,
 UserProfile: persistReducer(userProfilePersistConfig, UserProfile)
})

export default rootReducer;
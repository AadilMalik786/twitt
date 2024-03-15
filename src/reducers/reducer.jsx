// const initialState={
//     variable:false,
// };
// const initialStateOne={
//     variable:false,
// }

// const create =(state =initialState,action)=>{
//     switch(action.type){
//         case "HANDLECREATE" : return{
//                 variable: !state.variable,
//         }
//         case "CROSS": return{
//             variable:!state.variable
//             }
//             default : return state
//         }
//     }

//     const signCross =(state=initialStateOne,action)=>{
//         switch(action.type){
//             case "SIGNINCROSS":return{
//                 variable:!state.variable
//             }
//             case "HANDLESIGNIN": return {
//                 variable:!state.variable
//             }
//             default : return state;
//         }
//     }


// // export default crossing;
// export default create;
// export {signCross};
const initialState = {
    data: null,
    variable:false
  };

  const reducerName = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_DATA_Name':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };  
  const reducerPhone = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_DATA_Phone':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };  

  const reducerEmail = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_DATA_Email':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };  

  const reducerMonth = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_DATA_Month':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };  

  const reducerDay = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_DATA_Day':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };  
  
  const reducerYear = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_DATA_Year':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };  
  const reducerSendEmail = (state = initialState, action) => {
    switch (action.type) {
      case 'Send_Email':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };  
  const reducerRecieveName = (state = initialState, action) => {
    switch (action.type) {
      case 'send-name':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };  

  const reducerSendSigninData = (state = initialState, action) => {
    switch (action.type) {
      case 'Send_Input_data':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };  
  const UserProfile = (state = initialState, action) => {
    switch (action.type) {
      case 'Send_User_Name':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };  
  const reducerBoolean = (state = initialState, action) => {
    switch (action.type) {
      case 'send-Boolean':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };  

  const ChangeEmail = (state = initialState, action) => {
    switch (action.type) {
      case 'Change_Email_Phone':
        return {
          variable:!state.variable
        };
      default:
        return state;
    }
  };  
  const sendNavigate = (state = initialState, action) => {
    switch (action.type) {
      case 'Change_Email_Phone':
        return {
          variable:!state.variable
        };
      default:
        return state;
    }
  };  

 

  export default reducerName;
  export {reducerPhone}
  export {reducerMonth}
  export {reducerDay}
  export {reducerYear}
  export {ChangeEmail}
  export{reducerEmail}
  export{reducerSendEmail}
  export {reducerSendSigninData}
  export {reducerRecieveName}
  export {UserProfile};
  export {reducerBoolean}
  export {sendNavigate}
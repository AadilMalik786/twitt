// export const cross=()=>{
//     return{
//         type:"CROSS"
//     }
// }
// export const handleCreate=()=>{
//     return{
//         type:"HANDLECREATE"
//     }
// }

// export const signInCross=()=>{
//     return{
//         type:"SIGNINCROSS"
//     }
// }

// export const handleSignIn=()=>{
//     return{
//         type:"HANDLESIGNIN"
//     }
// }
export const updateDataName = (data) => ({
    type: 'UPDATE_DATA_Name',
    payload: data,
  });

export const updateDataPhone = (data) => ({
    type: 'UPDATE_DATA_Phone',
    payload: data,
  });

export const updateDataMonth = (data) => ({
    type: 'UPDATE_DATA_Month',
    payload: data,
  });

export const updateDataDay = (data) => ({
    type: 'UPDATE_DATA_Day',
    payload: data,
  });

export const updateDataYear = (data) => ({
    type: 'UPDATE_DATA_Year',
    payload: data,
  });
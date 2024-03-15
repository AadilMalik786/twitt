
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

export const updateDataEmail = (data) => ({
    type: 'UPDATE_DATA_Email',
    payload: data,
  });

export const ChangeInputField = (data) => ({
    type: 'Change_Email_Phone',
    payload: data,
  });
export const SendData = (data) => ({
    type: 'Send_Email',
    payload: data,
  });
export const SendNameUserName = (data) => ({
    type: 'Send_User_Name',
    payload: data,
  });
export const InputData = (data) => ({
    type: 'Send_Input_data',
    payload: data,
  });

  export const SendName=(data)=>({
    type:"send-name",
    payload:data
  })
  export const sendBoolean=(data)=>({
    type:"send-Boolean",
    payload:data
  })
  // export const SendNavigate=(data)=>({
  //   type:"send-Boolean",
  //   payload:data
  // })
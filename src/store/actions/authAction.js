import axios from "../../services/axios";

export const userLoginHelper = (data) => {
return {
    type: "SET_USER_AUTH",
    payload: data,
  };
};

export const userTokenHelper = (data) => {
  return {
      type: "SET_USER_TOKEN",
      payload: data,
    };
  };

  export const userTokenValidityHelper = (data) => {
    return {
        type: "CHECK_USER_TOKEN",
        payload: data,
      };
    };

export const userLogoutHelper = (data) => {
  return {
    type: "USERS_LOGOUT",
    payload: data,
  };
};

export const userLoginError=(data)=> {
  return {
    type: "SET_LOGIN_ERROR",
    payload: data,
  };
  
}

export const userLogin = (inputValue) => {
 return async (dispatch) => {
    if(inputValue.userName ==''){
      const obj = {
        message: 'Enter User Name'
      };
      dispatch(userLoginError(obj));
    }
    else{
    try {
      const { data } = await axios.post("/getUserAccount", {
        "userName":inputValue.userName
      });
      if (data.response.ErrorCode == 12 ) {
       dispatch(userLoginHelper(data.response));
         }
      if(data.response.ErrorCode == 1){
        dispatch(userLoginHelper(data.response));
      }
     } catch (err) {
     // dispatch(userLoginError(err.response.data));
     }
  }
  };
};

export const userToken = (token,navigate) => {
   return async (dispatch) => {
   try {
     const { data } = await axios.post("/userTokenRequest", {
       "userName":token
     });
     console.log(data);
     dispatch(userTokenHelper(data.response));
     dispatch(userLoginError(''));
     const obj = {
       userData: data.response
     };
     localStorage.setItem("userData", JSON.stringify(data.response));
     navigate('/gamelist');
   } catch (err) {
     console.log("Error", err);
   }
 };
};

export const checkTokenValidity = (token) => {
  return async (dispatch) => {
   try {
     const { data } = await axios.post("/checkTokenValidity", {
       "token":token
     });
     dispatch(userTokenValidityHelper(data));
    
   } catch (err) {
     console.log("Error", err);
   }
 };
};



export const userLogout = (uname,navigate) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/signOut", {
        "userName":uname
      });
      dispatch(userLogoutHelper(data));
      localStorage.removeItem("userData");
      navigate('/');
    } catch (err) {
      console.log("Error", err);
    }
  };
 
};




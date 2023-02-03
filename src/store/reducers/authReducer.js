const initialState = {
    UserLogin: [],
    isAuthenticated: false,
    ErrMessage:[]
  };
  const authReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_USER_AUTH':
            return {...state};
        case 'SET_LOGIN_ERROR':
            return {...state, ErrMessage: action.payload  };
        case 'SET_USER_TOKEN':
            return {...state ,  UserLogin: action.payload, isAuthenticated : true };
        case 'CHECK_USER_TOKEN':
            return {...state ,  UserLogin: action.payload, isAuthenticated : true };
        case 'USERS_LOGOUT':
            return { ...state ,UserLogin: action.payload, isAuthenticated : false };
        default:
            return state;
      }
  };
  
  export default authReducer;
  
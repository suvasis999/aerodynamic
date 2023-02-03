const initialState = {
    gameList: [],
    gameErrMessage:[],
    gameLoading:true
  };
  const gameReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_GAME_LIST':
            return {...state ,  gameList: action.payload,gameLoading:false };
        case 'SET_GAME_ERROR':
            return {...state, gameErrMessage: action.payload,gameLoading:false  };
        default:
            return state;
      }
  };
  
  export default gameReducer;
  
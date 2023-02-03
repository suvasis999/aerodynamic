import axios from "../../services/axios";

export const gameListHelper = (data) => {
return {
    type: "SET_GAME_LIST",
    payload: data,
  };
};

export const gameError=(data)=> {
    return {
      type: "SET_GAME_ERROR",
      payload: data,
    };
    
  }
 

  export const getGameList = (id) => {
    return async (dispatch) => {
       try {
         const { data } = await axios.post("/retrieveGameList", {
           "bonus":id
         });
         //console.log(data);
         dispatch(gameListHelper(data.response));
        } catch (err) {
        dispatch(gameError(err.response.data));
        }
     
     };
   };

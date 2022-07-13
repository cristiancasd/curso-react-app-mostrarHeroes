// Controlador de estados
import { types } from "../types/types"

export const authReducer = (state,action) => {
  switch(action.type){    
    //case '[Auth] Login':
    case types.login:
        return {
            ...state,
            logged:true,
            user:action.payload
        }
    case types.logout:
        return {
            logged:false,
        }
    default:
        return state;
   }    
}

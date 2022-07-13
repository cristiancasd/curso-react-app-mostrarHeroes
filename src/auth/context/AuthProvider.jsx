import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

const initialState={logged:false} //No se usa porque usamos el init

const init=()=>{  //Traemos el nombre del usuario del localstorage
    const user = JSON.parse(localStorage.getItem('user'));
    return{
        logged: !!user,
        user: user,
    }
}

export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer(authReducer, {} , init)
    
    const login=(name='')=>{ 
        const user = { id: 'ABC',name}  //name viene al usar función login en LoginPage

        //const action = {type:'[Auth] Login',payload: user}
        const action = {type:types.login,payload: user}
        localStorage.setItem('user',JSON.stringify(user));
        dispatch(action)
    }

    const logout = () =>{
        localStorage.removeItem('user');
        const action={type:types.logout}
        dispatch(action)
    }


  return ( //Declaro variables y funciones a usar en altonivel
    <AuthContext.Provider value={{
        ...authState,
        login,
        logout
    }} >
        {children}
    </AuthContext.Provider>
  )
}

import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth/context/AuthContext"

//Estoy recibiendo los componentes que están dentro de ese privateROute
export const PublicRoute = ({children}) => {
  
  const {logged}=useContext(AuthContext)
        return (logged)
            ? <Navigate to="/marvel"/>
            : children
        


}

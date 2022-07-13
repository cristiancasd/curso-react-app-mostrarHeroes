import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  
  const navigate=useNavigate();
  const {login} = useContext(AuthContext); //useContext
    
  const onLogin=()=> {  
    
    const lastPath = localStorage.getItem('lastPath') || '/'

    login('Cristian Salazar')     //Función declara nombre del usuario
    navigate(lastPath,{replace:true})  
  }

  return (
    <div className="container mt-5">
      <button className="btn btn-primary"
        onClick={onLogin}>
        Login
      </button>
      <h1>LoginPage</h1>
    </div>
  )
}

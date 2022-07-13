
import { Routes,Route, Navigate } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => { 

  //ruta /login, muestro el componente Login
  //ruta /*, uso el componete HeroesRoutes (defino nuevas rutas)
  //Esto se hace para no mostrar el menú de navegación en el login
  return (
    <>
        <Routes>

            <Route path="/login"  element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
            } />
            
            <Route path="/*" element={
              <PrivateRoute>
                <HeroesRoutes/>
              </PrivateRoute>
            }/>                      
            {/* <Route path="/*"  element={<HeroesRoutes />}/>*/}        
        </Routes>
    </>
  )
}

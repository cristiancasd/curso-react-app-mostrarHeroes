import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {
    
    const {user,logout} = useContext(AuthContext); //variable  y función de alto nivel
    const navigate=useNavigate();

    // Función del onClick del boton logout, uso componente login
    const onLogout = () => {
        logout(); 
        navigate('/login',{
            replace:true //Evita que pueda dar atras, volver ruta anterior
        });
    }
    
    return (

        // Menú de navegación
        //Direcciono componentes con las rutas, se marca en el menú el componente actual
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">            
            
            <Link to="/" className="navbar-brand">
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink to="/marvel"
                        className={({isActive}) => `nav-link ${ isActive ? 'active':''}`}                        
                    > Marvel </NavLink>

                    <NavLink to="/dc"
                        className={({isActive}) => `nav-link ${ isActive ? 'active':''}`}                        
                    >DC </NavLink>

                    <NavLink to="/search"
                        className={({isActive}) => `nav-link ${ isActive ? 'active':''}`}                        
                    >Search </NavLink>

                    <NavLink to="/hero"
                        className={({isActive}) => `nav-link ${ isActive ? 'active':''}`}                        
                    >Hero </NavLink>
               
                </div>
            </div>

            {/*Lado derecho del menú - botón logout*/}
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">
                        {user?.name/*MOstrar el nombre en el navBar*/}
                    </span>
                    <button onClick={onLogout} className='nav-item nav-link btn'>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
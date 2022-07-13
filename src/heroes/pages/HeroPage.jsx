import { useMemo } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById"

export const HeroPage = () => {

  const {id}=useParams()        //Obtengo id del url
  
  const navigate=useNavigate() 
  const onNavigateBack=()=>{navigate(-1)} //Boton regresar

  //const hero=getHeroById(id)    //Función-helper, retorna único héroe
  const hero = useMemo(() => getHeroById(id), [id]); //Se usa en app pesadas



  if(!hero){
    return <Navigate to="/marvel" /> //Si no hay heroe, retorna
  }
  

  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
          <img 
            src= { `/assets/heroes/${id}.jpg` }
            alt={hero.superhero}
            className="img-thumbnail animate__animated animate__bounce animate__fadeInLeft"/>
        </div>
        
        <div className="col-8">
        <h3>{hero.superhero} </h3>
        <ul>
            <li className="list-group-item"><b>Alter ego: </b>{hero.alter_ego}  </li>
            <li className="list-group-item"><b>Publisher: </b>{hero.publisher}  </li>
            <li className="list-group-item"><b>First appearence: </b>{hero.first_appearance}  </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
      <button 
        onClick={onNavigateBack}
        className="btn btn-outline-primary"> Regresar </button>
      </div>
      </div>
    </>
  )
}

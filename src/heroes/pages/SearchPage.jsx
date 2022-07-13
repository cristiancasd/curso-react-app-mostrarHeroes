import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForms"
import { HeroCard } from "../components/HeroCard"
import queryString from 'query-string'
import { getHeroesByName } from "../helpers/getHeroByName"
import { useMemo } from "react"

export const SearchPage = () => {
  
  // Obtengo parametro del url
  const location = useLocation()
  const {q=''}=queryString.parse(location.search)

  // Hook personaliazdo Retorna arreglo de heroes con similitudes de busquedfa
  const heroes = useMemo(() => getHeroesByName(q), [q]); //Se usa en app pesadas
  
  //Inicializo formulario
  const {searchText, onInputChange} = useForm({
    searchText: q
  })

  //Asignar a la URL el parametro buscado, se renderiza el arreglo heroes con busqueda q
  const navigate = useNavigate()
  const onSearchSubmit=(event)=>{
    event.preventDefault();
    navigate(`?q=${searchText.toLowerCase().trim()}`)
  }
  
  return (
    <>
        <h1>Search</h1>
        <hr/>
        <div className="row">
          <div className="col-5">
            <h4>Searching</h4>
            <form onSubmit={onSearchSubmit}>
              <input 
                type="text"
                placeholder="Search a hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}
                />
                <button className="btn btn-outline-primary mt-1">
                  Search
                </button>
            </form>
          </div>

          <div className="col-7">
            <h4>Results</h4>
            <hr/>
            {
              //Aviso de no Hero al momento de no encontrar un heroe
              (q==='')
                ? <div className="alert alert-primary">Search a hero</div>
                : (heroes.length===0) && <div className="alert alert-danger">No hero {q} </div>
              }

            { heroes.map(hero=>(
              <HeroCard key={hero.id} {...hero} />
            ))}           
          </div>
        </div>
    </>
  )
}

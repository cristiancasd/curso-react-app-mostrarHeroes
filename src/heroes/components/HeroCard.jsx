import { Link } from "react-router-dom"

export const HeroCard = (
    {
        id,
        superhero, 
        publisher,
        alter_ego,
        first_appearance,
        characters,
    }
) => {

    const heroImageUrl =`src/heroes/assets/heroes/${id}.jpg`
    console.log('el url es ', heroImageUrl)
    return (
    <div className="col animate__animated animate__bounce animate__fadeIn">
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4 ">
                    <img src={heroImageUrl} className="card-img" alt={superhero} />
                </div> 

                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero} </h5>
                        <p className="card-tex">{alter_ego} </p>
                        {
                            (alter_ego!==characters) && (<p>{characters} </p>)
                        }
                        
                        <p className="card-tex">
                            <small className="text-muted">{first_appearance}</small>
                        </p>

                        <Link to= {'/hero/'+id}> {/*ruta para ver heroe en soliario*/}
                            Más Info ... 
                        </Link>
                    </div>
                </div>
            </div>   
        </div>
    </div>
  )
}

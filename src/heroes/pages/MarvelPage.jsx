import { HeroList } from "../components/HeroList"

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel</h1>
      <hr/>
      {/*Mostrar Heroes deseados - Marvel*/}
      <HeroList publisher={'Marvel Comics'} />
    </>
  )
}

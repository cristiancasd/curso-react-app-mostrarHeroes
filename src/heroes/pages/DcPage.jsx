import { HeroList } from "../components/HeroList"

export const DcPage = () => {
  return (
    <>
      <h1>DC Comics</h1>
      <hr/>
      {/*Mostrar Heroes deseados - DC comics*/}
      <HeroList publisher={'DC Comics'} />
    </>
  )
}

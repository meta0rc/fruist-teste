import { useContext, useMemo } from "react";
import { Header } from "../../components/header/header";
import { Loading } from "../../components/loading/Loading";
import { FruitContext, FruitType } from "../../context/fruitContext";
import "./style.css";

export const FruitPage = () => {
  
  const query = decodeURI(location.pathname.slice(1))
  const context = useContext(FruitContext)

  useMemo(() => {

      context.getFruits();

  }, [])

  const page = context.fruits ? context.fruits.filter((fr:any, i:any) => fr.name === query) : 'Loading'

  return (
    <>
      {page !== 'Loading' ? 
      <>
      <Header />
      <div className="container-fruit-details">
        <h1> {page[0].name} </h1>
        <div className="container-fruit-detais-content">
          <img src={page[0].photo} alt="" width={300} />
          <ul className="contaienr-info-fruit">
            <h2>Informações da Fruta</h2>
            {Object.keys(page[0]).map((keys, index) => {
              if (keys != "photo") {
                return (
                  <li key={'list_' + keys }>
                    <strong>{keys}:</strong> 
                    <span>
                      {page[0] && Object.values(page[0])[index] }
                    </span>
                  </li>
                )
              }
            })}
          </ul>
        </div>
      </div>
      </>
       : <Loading />}
    </>
  )
}
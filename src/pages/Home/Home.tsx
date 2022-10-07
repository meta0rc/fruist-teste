import { useContext, useMemo } from "react";
import { Fruit } from "../../components/fruit/Fruit";
import { Header } from "../../components/header/header";
import { Loading } from "../../components/loading/Loading";
import { FruitContext } from "../../context/fruitContext";
import "./style.css";
export const Home = () => {
  const FruitsContext = useContext(FruitContext);

  useMemo(() => {
    FruitsContext.getFruits();
  }, []);

  return (
    <>
      <Header />

      {FruitsContext.loading ? (
        <Loading />
      ) : (
        <div className="section-fruits-container">
          <h1 className="home-heading">Fruits</h1>
          <ul className="list-fruits">
            {FruitsContext.fruits &&
              FruitsContext.fruits.map((fru: any) => {
                return (
                  <Fruit
                    name={fru.name}
                    blubber={fru.blubber}
                    calories={fru.calories}
                    carbohydrates={fru.carbohydrates}
                    fiber={fru.fiber}
                    photo={fru.photo}
                    portion={fru.portion}
                    protein={fru.protein}
                    key={fru.name}
                  />
                );
              })}
          </ul>
        </div>
      )}
    </>
  )
}

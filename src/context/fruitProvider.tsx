import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../services/api";
import { FruitContext, FruitType } from "./fruitContext";

export const FruitProvider = ({ children }: { children: JSX.Element }) => {
  const api = useApi();

  const [fruit, setFruit] = useState<FruitType | null>(null);
  const [fruits, setFruits] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const persistFruit = () => {
      const localFruit = localStorage.getItem('fruit')
      if(localFruit) {
        setFruit(JSON.parse(localFruit));
      }
    }
    persistFruit()
  }, [useApi])

  const changeFruit = (Fruit: FruitType | null) => {
    if (Fruit != null) {
      setFruit(Fruit);
      localStorage.setItem('fruit', JSON.stringify(Fruit))
      navigate(`/${Fruit.name}`);
    } else {
      localStorage.removeItem('fruit')
      setFruit(Fruit);
      navigate("/");
    }
  }
  const getFruits = async () => {
    const response = await api.getFruits();

    if (response.data) {
      setTimeout(() => {
        setFruits(response.data);
        setLoading(false);
      }, 3000);

      return true;
    }

    return false;
  };

  return (
    <FruitContext.Provider value={{ fruits, loading, fruit, getFruits, changeFruit }}>
      {children}
    </FruitContext.Provider>
  )
}

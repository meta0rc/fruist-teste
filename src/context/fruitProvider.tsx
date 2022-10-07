import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../services/api";
import { FruitContext, FruitType } from "./fruitContext";

export const FruitProvider = ({ children }: { children: JSX.Element }) => {
  const api = useApi();
  const [fruit, setFruit] = useState(false);
  const [fruits, setFruits] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('fruit')) {
      setFruit(true)
    }
  }, [])  

  const changeFruit = (Fruit: FruitType | null) => {

    if (Fruit != null) {
      navigate(`/${Fruit.name}`);
      setFruit(true)
      localStorage.setItem('fruit', Fruit.name)

    } else {
      navigate("/");
      setFruit(false)
      localStorage.removeItem('fruit')
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
    <FruitContext.Provider value={{ fruit, fruits, loading, getFruits, changeFruit }}>
      {children}
    </FruitContext.Provider>
  )
}

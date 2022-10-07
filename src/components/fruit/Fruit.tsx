import { useContext } from "react";
import { FruitContext, FruitType } from "../../context/fruitContext";
import "./Fruit.css";

export const Fruit = (props: FruitType,) => {

  const context = useContext(FruitContext);

  return (
    <li
      className="card-fruit flex"
      key={`chave_${props.name}`}
      onClick={() => context.changeFruit({ ...props})}
    >
      <ul className="content-fruit">
        {Object.keys(props).map((keys, index) => {
          if (keys != "photo") {
            return (
              <li key={'chave' + keys + index}>
                <strong>{keys}:</strong> 
                
                  {Object.values(props)[index]}
                
  
              </li>
            );
          }
        })}
      </ul>
      <div className="fruit-image">
        <img src={props.photo} alt="image-fruit" width={150} />
      </div>
    </li>
  )
}

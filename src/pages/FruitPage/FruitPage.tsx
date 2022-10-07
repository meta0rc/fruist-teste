import { Header } from "../../components/header/header"
import { FruitType } from "../../context/fruitContext"
import "./style.css"

export const FruitPage = (props: FruitType) => {
    return (
        <>
            <Header />
            <div className="container-fruit-details">
                <h1>Detalhes da Fruta { props.name } </h1>
                <div className="container-fruit-detais-content">
                    <img src={props.photo} alt="" width={300}/>
                    <ul className="contaienr-info-fruit">
                        <h2>Informações da Fruta</h2>
                        { Object.keys(props).map((keys, index) => {
                            if(keys != 'photo') {
                                return (
                                    <li>
                                        <strong>{ keys }</strong>: { Object.values(props)[index]}
                                    </li>
                                )
                            } 

                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}
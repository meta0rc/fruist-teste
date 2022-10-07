import { useContext, useMemo } from "react"
import { FruitContext } from "../../context/fruitContext"
import { FruitPage } from "../FruitPage/FruitPage"

export const FruitGet = () => {

    const query = location.pathname.slice(1)
    const context = useContext(FruitContext)

    useMemo(() => {
        context.getFruits();
    }, [])

    const page = context.fruits ? context.fruits.filter((fr:any, i:any) => fr.name === query) : 'Loading'
   
    return (
        <>
            {page !== 'Loading' ? <FruitPage {...page[0]} /> : 'Loading'}
        </>
    )
}
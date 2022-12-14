import { createContext } from "react";

export interface FruitType {
    name: string
    calories: string
    protein: string
    carbohydrates: string
    fiber: string
    blubber: string
    portion: string
    photo: string
}
export type FruitContextType = {
    fruit?: any
    fruits: any
    getFruits: () => Promise<Boolean>
    loading: boolean
    changeFruit: (fruit: FruitType) => void
}
export const FruitContext = createContext<FruitContextType>(null!)

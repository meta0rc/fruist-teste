import { useContext } from "react"
import { Routes, Route } from "react-router-dom"
import { FruitContext } from "./context/fruitContext"
import { FruitPage } from "./pages/FruitPage/FruitPage"
import { Home } from "./pages/Home/Home"
import "./style/global.css"

function App() {
  const context = useContext(FruitContext)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      { context.fruit && <Route path={`/${context.fruit.name}`} element={<FruitPage {...context.fruit}/>} /> }
    </Routes>
  )
}

export default App

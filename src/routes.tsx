//com a funcao createBrowserRouter a gente cria as rotas
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'

//criando as rotas
//a constante rotas recebera o createBrowserRouter que recebera um array
//neste array nos temos os objetos que sao as rotas
//dentro do array coloca o objeto que tem o caminho
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
)

export default Rotas

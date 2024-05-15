//com a funcao createBrowserRouter a gente cria as rotas
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Product from './pages/Product'
import Checkout from './pages/Checkout'

//criando as rotas
//a constante rotas recebera o createBrowserRouter que recebera um array
//neste array nos temos os objetos que sao as rotas
//dentro do array coloca o objeto que tem o caminho

//path="/product/:id" ---> faz com que se criem rotas a partir do id do produto - path parameter
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas

import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import star from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [emBreve, setEmBreve] = useState<Game[]>([])

  //para chamar a requisicao da API. Para isso chamamos a funcao e em seguida colocamos a lista de dependencias
  //como nesse caso nao havera dependencias, sera um array vazio
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes') //pega a api
      .then((res) => res.json()) //transforma a api em um arquivo json
      .then((res) => setPromocoes(res)) //faz o set das promocoes

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve') //pega a api
      .then((res) => res.json()) //transforma a api em um arquivo json
      .then((res) => setEmBreve(res)) //faz o set da secao em breve
  }, [])

  return (
    <>
      <Banner />
      <ProductList games={promocoes} title="Promoções" background="gray" />
      <ProductList games={emBreve} title="Em breve" background="black" />
    </>
  )
}

export default Home

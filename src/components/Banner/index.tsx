import { useEffect, useState } from 'react'
import { Imagem, Titulo, Precos } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../pages/Home'
import { pricesFormat } from '../ProductList'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque') //pega a api
      .then((res) => res.json()) //transforma a api em um arquivo json
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Caregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{pricesFormat(game.prices.old)}</span> <br />
            por apenas {pricesFormat(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner

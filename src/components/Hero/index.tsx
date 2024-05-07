import { useDispatch } from 'react-redux'
import { Game } from '../../pages/Home'
import Button from '../Button'
import { pricesFormat } from '../ProductList'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

import { add, open } from '../../store/reducers/cart'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  //cria a funcao de adicionar ao carrinho. Nesse caso a funcao add pede como argumento um jogo.
  //Utilizamos o jogo que recebemos la em props
  const addToCart = () => {
    dispatch(add(game))
    //apos adicionar o game ao carrinho a aba do carrinho ira abrir
    dispatch(open())
  }
  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {pricesFormat(game.prices.old)} </span>
            )}
            {game.prices.current && (
              <>Por {pricesFormat(game.prices.current)}</>
            )}
          </p>
          {game.prices.current && (
            <Button
              variant="primary"
              type="button"
              title="Clique aqui para adicionar esse jogo ao carrinho"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero

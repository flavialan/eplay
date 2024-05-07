import { Imagem, Titulo, Precos } from './styles'

import Tag from '../Tag'
import Button from '../Button'
import { pricesFormat } from '../ProductList'

import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  //cria uma constante que servira para desestruturar a resposta da requisicao feita por useGetFeaturedGameQuery
  /* o jogo do destaque vem de data, e saberemos se esta carregando pelo isLoading*/
  /*colocamos data: game para nao precisar renomear tudo. Data sera chamado de game*/
  const { data: game, isLoading } = useGetFeaturedGameQuery()

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

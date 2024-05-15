import Product from '../Product'

import { parseToBrl } from '../../utils'

import * as S from './styles'
import Loader from '../Loader'

//Aqui criaremos um tipo que recebera um objeto
//Aqui as props sao exportadas para que possamos usa-las na folha de estilos
export type Props = {
  title: string
  background: 'gray' | 'black'
  games?: Game[]
  id?: string
  isLoading: boolean //propriedade que ira dizer se a pagina esta carregando ou nao
}

const ProductList = ({ background, title, games, id, isLoading }: Props) => {
  //criando uma funcao para avaliar a api e retornar o que se deseja
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }

    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <S.List>
          {games &&
            games.map((game) => (
              <li key={game.id}>
                <Product
                  id={game.id}
                  category={game.details.category}
                  description={game.description}
                  image={game.media.thumbnail}
                  infos={getGameTags(game)}
                  system={game.details.system}
                  title={game.name}
                />
              </li>
            ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductList

import { Game } from '../../pages/Home'
import Product from '../Product'
import { Container, List } from './styles'

//Aqui criaremos um tipo que recebera um objeto
//Aqui as props sao exportadas para que possamos usa-las na folha de estilos
export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
  id?: string
}

//cria uma funcao para formatar os precos
//ficou fora do elemento react para que possa ser usada em outro arquivo
export const pricesFormat = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const ProductList = ({ background, title, games, id }: Props) => {
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
      tags.push(pricesFormat(game.prices.current))
    }

    return tags
  }

  return (
    <Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games.map((game) => (
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
        </List>
      </div>
    </Container>
  )
}

export default ProductList

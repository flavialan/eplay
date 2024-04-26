import Game from '../../models/Games'
import Product from '../Product'
import { Container, List } from './styles'

//Aqui criaremos um tipo que recebera um objeto
//Aqui as props sao exportadas para que possamos usa-las na folha de estilos
export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[] //importa a classe de games criada na pasta models
}

const ProductList = ({ background, title, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            system={game.system}
            title={game.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList

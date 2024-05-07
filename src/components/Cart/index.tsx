import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Button from '../Button'
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  Sidebar
} from './styles'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import Tag from '../Tag'
import { close, remove } from '../../store/reducers/cart'
import { pricesFormat } from '../ProductList'

const Cart = () => {
  /*Aqui desestruturamos o tipo Cart criado no reducer e utilizamos o useSelector para selecionar o estado
  que e do tipo RootReducer onde sera retornado o estado do carrinho. Aqui extraimos do estado a acao de abrir e
  os items para que os mesmos possam ser renderizados*/
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  /*No CartContainer adiciona a condicao de aberto ou nao*/

  //cria-se uma constante dispatch que sera igual ao useDispatch para despachar a acao de abrir e fechar
  const dispatch = useDispatch()

  //agora cria uma funcao que ira fechar o carrinho
  const closeCart = () => {
    dispatch(close())
  }

  //cria a funcao que ira remover o item do carrinho
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  //cria a funcao que ira somar os precos dos jogos no carrinho
  /*Aqui, a funcao de pegar o valor total, recebera um acumulador e o valor atual. Essa funcao ira retornar a soma
  dos valores e como argumento passamos o valor inicial como 0. Colocamos a ! apos o valorAtual para que esse valor
  seja obrigatorio*/
  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{pricesFormat(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogo(s) no carrinho</Quantity>
        <Prices>
          Total de {pricesFormat(getTotalPrice())}{' '}
          <span>Em ate 6x sem juros</span>
        </Prices>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart

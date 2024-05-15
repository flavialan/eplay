import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import Tag from '../Tag'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { getTotalPrice, parseToBrl } from '../../utils'

import * as S from './styles'

const Cart = () => {
  /*Aqui desestruturamos o tipo Cart criado no reducer e utilizamos o useSelector para selecionar o estado
  que e do tipo RootReducer onde sera retornado o estado do carrinho. Aqui extraimos do estado a acao de abrir e
  os items para que os mesmos possam ser renderizados*/
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  /*No CartContainer adiciona a condicao de aberto ou nao*/

  //cria-se uma constante dispatch que sera igual ao useDispatch para despachar a acao de abrir e fechar
  const dispatch = useDispatch()

  //cria a constante navigate para usar o recurso useNavigate do react-router-dom para navegar entre paginas
  const navigate = useNavigate()

  //agora cria uma funcao que ira fechar o carrinho
  const closeCart = () => {
    dispatch(close())
  }

  //cria a funcao que ira remover o item do carrinho
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  /*Cria a funcao que ao clicar no botao de finalizar compra nos leva para a pagina de checkout */
  const goToCheckout = () => {
    /*Navigate e uma funcao onde o primeiro argumento e o to*/
    navigate('/checkout')
    closeCart()
  }

  //Vamos renderizar o botao e o que esta escrito no carrinho apenas quando houver itens no carrinho
  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.media.thumbnail} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{parseToBrl(item.prices.current)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </S.CartItem>
              ))}
            </ul>
            <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
            <S.Prices>
              Total de {parseToBrl(getTotalPrice(items))}{' '}
              <span>Em ate 6x sem juros</span>
            </S.Prices>
            <Button
              title="Clique aqui para continuar com a compra"
              type="button"
              onClick={goToCheckout}
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="empty-test">
            O carrinho está vazio. Adicione pelo menos um produto para continuar
            com a compra.
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart

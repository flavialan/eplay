import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { HeaderBar, CartButton, LinkItem, Links } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
//importando as acoes de abrir e fechar o carrinho criadas no reducer
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  //cria-se uma constante dispatch que sera igual ao useDispatch para despachar a acao de abrir e fechar
  const dispatch = useDispatch()

  //aqui usaremos o useSelctor para selecionar os itens do que estao dentro do estado carrinho
  //Depois usamos o items.length para renderizar a quantidade de items no carrinho
  const { items } = useSelector((state: RootReducer) => state.cart)

  //agora cria uma funcao que ira abrir o carrinho
  const openCart = () => {
    dispatch(open())
  }

  /*O fechamento do carrinho se dara ao clicar no overlay da tela. Para isso, a funcao de fechar sera inserida no
  componente do carrinho onde foi criado o overlay.*/

  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <a href="#">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Promoções</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <CartButton onClick={openCart}>
        {items.length} - produto(s)
        <img src={carrinho} alt="Carrinho" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header

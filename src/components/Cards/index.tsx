import { Container } from './styles'

//Cria a tipagem do Card para tornar possivel que ele receba um elemento jsx e o seu titulo
type Props = {
  children: JSX.Element
  title: string
}

const Card = ({ children, title }: Props) => (
  <Container>
    <h2>{title}</h2>
    {children}
  </Container>
)

export default Card

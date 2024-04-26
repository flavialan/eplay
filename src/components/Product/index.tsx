import Tag from '../Tag'
import { Card, Description, Infos, Title } from './styles'

//Criando a tipagem para as tags presentes nos cards
type Props = {
  title: string //titulo da tag
  category: string //categoria da tag
  system: string //sistema operacional da tag
  description: string
  infos: string[] //aqui recebera os textos das tags
  image: string
}

const Product = ({
  category,
  description,
  image,
  infos,
  system,
  title
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Title>{title}</Title>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <Description>{description}</Description>
  </Card>
)

export default Product

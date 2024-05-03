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
  id: number
}

const Product = ({
  category,
  description,
  image,
  infos,
  system,
  title,
  id
}: Props) => {
  //Funcao para ter apenas tres linhas de descricao
  const getDescription = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }
  return (
    <Card to={`/product/${id}`}>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Title>{title}</Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Description>{getDescription(description)}</Description>
    </Card>
  )
}

export default Product

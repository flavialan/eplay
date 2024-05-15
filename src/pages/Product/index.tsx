import { useParams } from 'react-router-dom' //usar o paramentro id criado no rotas tornando-a dinamica

import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import Loader from '../../components/Loader'

import { useGetGameQuery } from '../../services/api'

//Para tratar a exclamacao no id vamos criar um tipo. Sera string pois todo paramentro para o react-router-dom
//e uma string
type GameParams = {
  id: string
}

const Product = () => {
  const { id } = useParams() as GameParams //desestrutura o id
  const { data: game } = useGetGameQuery(id) //coloca-se a ! para fazer esse valor ser obrigatorio

  if (!game) {
    return <Loader />
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Editora:</b>
          {game.details.publisher}
          <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ')}.
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product

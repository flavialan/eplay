import { useState } from 'react'
import Section from '../Section'
import hogwarts from '../../assets/images/hogwarts_legacy.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import { Action, Item, Items, Modal, ModalContent } from './styles'
import fechar from '../../assets/images/fechar.png'
import { GalleryItem } from '../../pages/Home'

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/1O6Qstncpnc?si=0k9Q-L_fbNkOaP_U'
  }
]

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

//cria uma nova interface que vai receber a heranca de GalleryItem para gerir o estado do modal
interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  //cria o estado a partir da interface criada (ModalState)
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  //vamos criar uma funcao para ser executada dependendo do tipo (imagem ou video) que a galeria recebe
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover //o default cover sera tipado no props
  }

  //cria a funcao para determinar o icone que sera exibido a depender do tipo que a galeria recebe
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  //cria uma funcao para fechar o modal seja clicando no x ou no overlay
  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {items.map((media, index) => (
            <Item
              key={index}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Midia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a midia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} alt="Fechar" onClick={() => closeModal()} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Gallery

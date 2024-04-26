class Game {
  category: string
  description: string
  image: string
  infos: string[]
  system: string
  title: string
  id: number

  constructor(
    category: string,
    description: string,
    image: string,
    infos: string[],
    system: string,
    title: string,
    id: number
  ) {
    this.id = id
    this.title = title
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.system = system
  }
}
// o que vem no this diz respeito a classe e o que esta depois do igual diz respeito ao que esta no construtor

export default Game

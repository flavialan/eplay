import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//E necessario tipar os itens do initialState para isso:
type CartState = {
  items: Game[] //os itens do estado inicial recebera o array contendo os games
  isOpen: boolean //propriedade que dira se o carrinho esta aberto ou fechado. Colocamos ele no initialState
}

//cria um objeto para o estado inicial
const initialState: CartState = {
  items: [],
  isOpen: false //o carrinho inicialmente esta fechado
}

//criando a slice
//createSlice e uma funcao que recebe um objeto
const cartSlice = createSlice({
  name: 'cart', //nome do slice
  //cria o estado inicial que e um objeto
  initialState, //aqui recebe os itens do estado inicial que esta presente no objeto criado acima
  //cria um objeto chamado reducers onde estarao as funcoes que irao alterar o carrinho
  reducers: {
    //cria a funcao de adicionar. A funcao ira receber o estado e a acao(action) que sera do tipo PayloadAction
    //A payloadaction ira receber um tipo que nesse caso sera o Game
    /*Vamos fazer a validacao para verificar se o item ja nao esta presente no carrinho*/
    add: (state, action: PayloadAction<Game>) => {
      //verificacao da existencia do item no carrinho
      const game = state.items.find((item) => item.id === action.payload.id)

      //se o jogo nao existir, faz o push. Caso contrario envia o alert
      if (!game) {
        //pega-se os itens do estado e faz um push no action.payload
        state.items.push(action.payload)
      } else {
        alert('O jogo já está no carrinho')
      }
    },
    //acao para remover o jogo do carrinho. Recebe apenas o id do jogo do tipo number
    remove: (state, action: PayloadAction<number>) => {
      //state. item sera um filtro dele mesmo. Onde ira filtrar por todo jogo cujo id e diferente do id
      //passado por paramentro
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    //aqui criamos uma funcao para abrir o carrinho. Nao tera action. Apenas iremos alterar o estado
    open: (state) => {
      state.isOpen = true
    },
    //cria tambem uma acao para fechar
    close: (state) => {
      state.isOpen = false
    },
    //cria uma action para limpar o carrinho apos a finalizacao da compra
    clear: (state) => {
      state.items = []
    }
  }
})

//exportamos a slice e as acoes presentes dentro dele
export const { add, open, close, remove, clear } = cartSlice.actions
export default cartSlice.reducer

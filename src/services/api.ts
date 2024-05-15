import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//cria o tipo Product
type Product = {
  id: number
  price: number
}

//cria o tipo que servira de base para os dados da api
type PurchasePayload = {
  products: Product[]
  billing: {
    name: string
    email: string
    document: string
  }
  delivery: {
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
        document: string
      }
      name?: string
      number?: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
    installments: number //quando for no boleto sera 1 e no cartao mais vezes
  }
}

type PurchaseResponse = {
  orderId: string
}

//aqui criamos uma api. createApi e uma funcao que recebe objetos
const api = createApi({
  //configuracao de onde pegaremos os dados. Usamos o endereco do servidor
  //fetchBaseQuery e uma funcao que tambem recebe um objeto
  baseQuery: fetchBaseQuery({
    //baseUrl e uma string que recebera o endereco
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  //aqui vamos criar as chamadas. endpoints e uma funcao que recebe um builder que retorna uma funcao que
  //tambem recebe um objeto
  endpoints: (builder) => ({
    //aqui dentro teremos os nossos gets
    //Entre <> passamos o tipo que nesse caso e Game e um argumento que nesse caso sera void
    getFeaturedGame: builder.query<Game, void>({
      /*como estamos pegando primeiro o destaque, dizemos o caminho onde ele se encontra*/
      query: () => 'destaque'
    }),
    //nesse caso game sera um array
    getOnSale: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getActionGames: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    getSportsGames: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    getSimulationGames: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getFightGames: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    getRpgGames: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    //aqui usaremos um argumento do tipo string para identificar o id do jogo e o game deixa de ser array pq e um
    //so jogo
    getGame: builder.query<Game, string>({
      //query agora recebe o argumento do tipo passado acima
      query: (id) => `jogos/${id}`
    }),
    //endpoint para enviar os dados da compra para uma api
    //o primeiro argumento e a resposta da api. Como ainda nao sabemos usareamos any. Depois que fizemos
    //a integracao da api podemos ver no inspetor do navegador que esse tipo e orderId que e uma string
    //o segundo argumento e o que enviaremos para a api. Para isso criamos um tipo que contenha os dados presentes
    //na api. O tipo criado foi o PurchasePayload.
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      //usamos a query. Ela sera uma arrow function que retorna um objeto com algumas opcoes
      query: (body) => ({
        url: 'checkout', //a url da api
        method: 'POST', //vamos postar algo na api
        body //sao as informacoes que virao de PurchasePayload
      })
    })
  })
})

//Exportamos a api e as funcoes que fazem as requisicoes
export const {
  useGetActionGamesQuery,
  useGetFeaturedGameQuery,
  useGetSoonQuery,
  useGetOnSaleQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery,
  useGetGameQuery,
  usePurchaseMutation
} = api
export default api

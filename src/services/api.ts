import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'

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
  useGetGameQuery
} = api
export default api

//cria uma funcao para formatar os precos
//ficou fora do elemento react para que possa ser usada em outro arquivo
export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

//cria a funcao que ira somar os precos dos jogos no carrinho
/*Aqui, a funcao de pegar o valor total, recebera um acumulador e o valor atual. Essa funcao ira retornar a soma
dos valores e como argumento passamos o valor inicial como 0. Colocamos a ! apos o valorAtual para que esse valor
seja obrigatorio*/
export const getTotalPrice = (items: Game[]) => {
  return items.reduce((accumulator, currentItem) => {
    if (currentItem.prices.current) {
      return (accumulator += currentItem.prices.current)
    }
    return 0
  }, 0)
}

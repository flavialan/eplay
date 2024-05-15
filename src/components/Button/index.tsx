import * as S from './styles'

//a props foi exportada para que possa ser usada em outro arquivo como o de estilos
export type Props = {
  type: 'button' | 'link' | 'submit' //essa proprieda sera usada como link ou botao
  title: string //e o nome que aparecera quando passarmos o mouse por cima
  to?: string //e o caminho que levara quando usado como link
  //quando usado como botoa, recebera uma funcao que nao recebe argumentos e nao retornara nada
  onClick?: () => void
  children: string //sera o texto do botao
  variant?: 'primary' | 'secondary' //para receber as cores transparente ou verde
  disabled?: boolean
}

//Extrai as propriedades de Props
const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary',
  disabled
}: Props) => {
  //se o tipo for botao, entao:
  if (type === 'button' || type === 'submit') {
    //retorne a tag ButtonContainer que sera do tipo button, com o titulo igual ao titulo escolhido e onde ao
    //clicar recebera o tipo onClick
    //Dentro da Tag devera estar o texto excolhido para o botao
    return (
      <S.ButtonContainer
        variant={variant}
        type={type}
        title={title}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </S.ButtonContainer>
    )
  } /*Caso seja diferente de button, no caso link, apenas retorne*/
  return (
    /*o componente criado enviando para onde escolhermos (to) e com titulo igual a title*/
    /* foi colocado o as string para o typescript entender que sera uma string e nao undefined*/
    <S.ButtonLink to={to as string} title={title}>
      {children}
    </S.ButtonLink>
  )
}

export default Button

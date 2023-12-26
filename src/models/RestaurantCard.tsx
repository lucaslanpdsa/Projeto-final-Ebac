import restaurant1 from '../assets/restaurant1.png'
import restaurant2 from '../assets/restaurant2.png'

export const cards: Card[] = [
  {
    img: restaurant2,
    Edestaque: true,
    tipoDeComida: "Japonesa",
    title: "Hioki Sushi ",
    nota: 4.8,
    descricao: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
  },
  {
    img: restaurant1,
    Edestaque: false,
    tipoDeComida: "Japonesa",
    title: "La Dolce Vita Trattoria",
    nota: 4.6,
    descricao: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
  },
  {
    img: restaurant1,
    Edestaque: false,
    tipoDeComida: "Mineira",
    title: "Hioki Sushi ",
    nota: 4.9,
    descricao: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
  },
  {
    img: restaurant1,
    Edestaque: false,
    tipoDeComida: "Japonesa",
    title: "Hioki Sushi ",
    nota: 4.9,
    descricao: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
  },
  {
    img: restaurant1,
    Edestaque: false,
    tipoDeComida: "Japonesa",
    title: "Hioki Sushi ",
    nota: 4.9,
    descricao: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
  },
  {
    img: restaurant1,
    Edestaque: false,
    tipoDeComida: "Japonesa",
    title: "Hioki Sushi ",
    nota: 4.9,
    descricao: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
  }
]

class Card {
  img: string
  Edestaque: Boolean
  tipoDeComida: string
  title: string
  nota: number
  descricao: string

  constructor(
    img: string,
    Edestaque: Boolean,
    tipoDeComida: string,
    title: string,
    nota: number,
    descricao: string,
  ) {
    this.img = img
    this.Edestaque = Edestaque
    this.tipoDeComida = tipoDeComida
    this.title = title
    this.nota = nota
    this.descricao = descricao
  }
}

export default Card




import prato1 from '../assets/Prato1.png'

export const PratosCards: PratoCard[] = [
  {
    img: prato1,
    nomeDoPrato: ' Pizza Marguerita',
    descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    img: prato1,
    nomeDoPrato: ' Pizza Marguerita',
    descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    img: prato1,
    nomeDoPrato: ' Pizza Marguerita',
    descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    img: prato1,
    nomeDoPrato: ' Pizza Marguerita',
    descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

class PratoCard {
  img: string
  nomeDoPrato: string
  descricao: string

  constructor(
    img: string,
    nomeDoPrato: string,
    descricao: string
  ) {
    this.img = img
    this.nomeDoPrato = nomeDoPrato
    this.descricao = descricao
  }
}

export default PratosCards
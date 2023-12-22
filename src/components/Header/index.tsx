import * as S from './styles'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <>
      <S.Header>
        <div className="container">
          <img src={logo} alt="" />
          <S.Title>Viva experiências gastronômicasno conforto da sua casa</S.Title>
        </div>
      </S.Header>
    </>
  )
}

export default Header
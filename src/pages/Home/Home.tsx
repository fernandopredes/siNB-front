import { HomeStyle } from "./Home.style"
import logo from '../../assets/logo.png'
import Login from "../../components/Login/Login"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <HomeStyle className="container">
      <h1>Sistema de  Inventário</h1>
      <img src={logo} alt="logotipo da nav brasil" />
      <h2>Login</h2>
      <Login/>
      <span>Ainda não tem uma conta? Crie <Link to={'/register'}>aqui</Link>.</span>
    </HomeStyle>
  )
}

export default Home

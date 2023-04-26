import { DashboardLink, DashboardStyle } from "./Dashboard.style"
import dash from '../../assets/inventory.svg'
import plane from '../../assets/airport.svg'
import person from '../../assets/person.svg'
import { useNavigate } from "react-router-dom"

const Dashboard = () => {

  const navigate = useNavigate();
  const deslogar = () => {
    localStorage.setItem('token', ``)
    localStorage.setItem('user_id', ``)
    window.location.reload();
    setTimeout(() => navigate('/'), 1000)
  }

  return (
    <DashboardStyle>
      <DashboardLink to='/scan'>
        <img src={dash} alt="ícone de prancheta" />
        <h3>inventariar bens</h3>
      </DashboardLink>
      <DashboardLink to='#' className="center">
        <img src={plane} alt="icone de avião" />
        <h3>inventário por dependência</h3>
      </DashboardLink>
      <DashboardLink to='/owner'>
        <img src={person} alt="ícone de pessoa" />
        <h3>inventário por detentor</h3>
      </DashboardLink>
      <button onClick={() => {deslogar()}} className="btn">sair</button>
    </DashboardStyle>
  )
}

export default Dashboard

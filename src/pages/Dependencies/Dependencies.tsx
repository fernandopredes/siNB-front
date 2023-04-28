import { useEffect, useState } from "react";
import api from "../../api";
import { DependenciesLink, DependenciesStyle } from "./Dependencies.style";
import { useNavigate } from "react-router-dom";

interface Airport {
  id:number;
  airport: string;
}

const Dependencies = () => {

  const [airports, setAirports] = useState<Airport[]>([])

  const getAirports = async () =>{
    await api.get(`/airports`)
    .then(res => {
      setAirports(res.data)
      console.log(airports)
    })
    .catch(error => {
      console.error(error);
    });
  }

  useEffect(() => {
    getAirports()
  }, [])

  const navigate = useNavigate();
  const returnHome = () =>{
    navigate('/')
  }


  return (
    <DependenciesStyle>
      <button onClick={() => {returnHome()}}>Voltar</button>
      {airports
      .sort((a, b) => a.airport.localeCompare(b.airport))
      .map(airport=>(
        <DependenciesLink to={`/dependency/${encodeURIComponent(airport.airport)}`} key={airport.id}>{airport.airport}</DependenciesLink>
      ))}
    </DependenciesStyle>
  )
}

export default Dependencies

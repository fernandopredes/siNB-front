import { useEffect, useState } from "react";
import api from "../../api";
import check from '../../assets/c.svg'
import cross from '../../assets/x.svg'
import { OwnerStyle } from "./Owner.style";

interface Patrimonio {
  id: number;
  description: string;
  number: number;
  verified: boolean;
}

const Owner = () => {

  const token = localStorage.getItem('token')

  const [userData, setUserData] = useState<Patrimonio[]>([])
  const [searchTerm, setSearchTerm] = useState<Patrimonio | null>(null)
  const [patrimonyNumber, setPatrimonyNumber] = useState<string>('')
  const [page, setPage] = useState(1)

  const getData = async () =>{
    await api.get(`/my-patrimonies?page=${page}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      setUserData(res.data)
      console.log(userData)
    })
    .catch(error => {
      console.error(error);
    });
  }

  useEffect(() => {
    getData()
  }, [page])

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await api.get(`/search/${patrimonyNumber}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      console.log(res.data)
      setSearchTerm(res.data)
    })
    .catch(error => {
      console.error(error);
    });
  }

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const handleNextPage = () => {
    setPage(page + 1)
  }

  return (
    <OwnerStyle>
      <form onSubmit={handleSearch} className="top">
        <label htmlFor="search"/>
        <div>
          <input placeholder="Digite o número do item" type="text" id="search" value={patrimonyNumber} onChange={(event) => setPatrimonyNumber(event.target.value)} />
          <button type="submit">Buscar</button>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Número</th>
            <th>Verificado</th>
          </tr>
        </thead>
      {patrimonyNumber !== '' && searchTerm !== null ?
      <>
        <tbody>
          <tr>
            <td>{searchTerm?.description}</td>
            <td>{searchTerm?.number}</td>
            <td>{searchTerm?.verified ?
                  <span>Sim <img src={check} alt="icone de check" /></span>
                  :
                  <span>Não <img src={cross} alt="icone de x" /></span>}
            </td>
          </tr>
        </tbody>

      </>
      :
        <tbody>
          {userData.map(item => (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td>{item.number}</td>
              <td>{item.verified ?
                <span>Sim <img src={check} alt="icone de check" /></span>
                :
                <span>Não <img src={cross} alt="icone de x" /></span>}
              </td>
            </tr>
          ))}
        </tbody>

      }
      </table>
      {patrimonyNumber === '' || searchTerm === null ?
        <div className="bottom">
          <button onClick={handlePrevPage} disabled={page === 1}>Anterior</button>
          <button onClick={handleNextPage}>Próxima</button>
        </div>
      :
      null
      }

    </OwnerStyle>
  )
}

export default Owner

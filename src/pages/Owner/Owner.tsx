import { useEffect, useState } from "react";
import api from "../../api";
import check from '../../assets/c.svg'
import cross from '../../assets/x.svg'
import { OwnerStyle } from "./Owner.style";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

interface Patrimonio {
  id: number;
  description: string;
  number: number;
  verified: boolean;
}

const Owner = () => {

  const token = localStorage.getItem('token')

  const [userData, setUserData] = useState<Patrimonio[]>([])
  const [userFullData, setUserFullData] = useState<Patrimonio[]>([])
  const [searchTerm, setSearchTerm] = useState<Patrimonio | null>(null)
  const [patrimonyNumber, setPatrimonyNumber] = useState<string>('')
  const [page, setPage] = useState(1)

  const getFullData = async () =>{
    await api.get(`/my-patrimonies`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      setUserFullData(res.data)
      console.log(userData)
    })
    .catch(error => {
      console.error(error);
    });
  }

  useEffect(() => {
    getFullData()
  }, [])


  const getData = async () =>{
    await api.get(`/my-patrimonies?page=${page}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      setUserData(res.data)
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

  const navigate = useNavigate();
  const returnHome = () =>{
    navigate('/')
  }

  const generatePdf = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Relatório de Patrimônios", 14, 22);
    doc.setFontSize(14);
    doc.text(`Data: ${new Date().toLocaleDateString()}`, 14, 30);
    doc.setFontSize(12);

    (doc as any).autoTable({
      head: [["Descrição", "Patrimônio", "Verificado"]],
      body: userFullData.map((item) => [
        item.description,
        item.number,
        item.verified ? "Sim" : "Não",
      ]),
      startY: 40,
    });

    doc.save("relatorio_patrimonios.pdf");
  };

  return (
    <OwnerStyle>
      <div className="bottom menu">
        <button onClick={() => {returnHome()}}>Voltar</button>
        <button onClick={generatePdf}>Gerar relatório</button>
      </div>
      <form onSubmit={handleSearch} className="top">
        <label htmlFor="search"/>
        <div className="search-item">
          <input placeholder="Digite o número do item" type="text" id="search" value={patrimonyNumber} onChange={(event) => setPatrimonyNumber(event.target.value)} />
          <button type="submit">Buscar</button>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Patrimônio</th>
            <th>Localizado</th>
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

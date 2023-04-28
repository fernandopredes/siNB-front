import { useEffect, useState } from 'react';
import { ScanStyle } from './Scan.style';
import QrScanner from 'react-qr-scanner';
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import check from '../../assets/c.svg'
import cross from '../../assets/x.svg'

interface Patrimony {
  airport: string;
  description: string;
  id: number;
  number: number;
  price: number;
  registry: string;
  responsible: string;
  verified: boolean;
}

const Scan = () => {

  const navigate = useNavigate();
  const [qrcode, setQrcode] = useState('')
  const [record, setRecord] = useState<Patrimony>({
    airport: '',
    description: 'Nenhum item selecionado',
    id: 0,
    number: 0,
    price: 0,
    registry: '',
    responsible: '',
    verified: false,
  })
  const token = localStorage.getItem('token')

  /* função do scan */
  const handleScan = (data:any) => {
    if (data) {
      console.log('QR Code data:', data.text);
      setQrcode(data.text)
    }
  };

  const handleError = (err:any) => {
    console.error('Erro ao escanear QR Code:', err);
  };

  /* useEffect que busca os dados depois de ler o qrcode */
  useEffect(() => {
    api.get(`/search/${qrcode}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      setRecord(res.data);
    })
    .catch(error => {
      console.error(error);
    });

  }, [qrcode, token])

  /* tamanho do scan */
  const previewStyle = {
    height: 250,
    width: 300,
  };

  const constraints = {
    video: {
      facingMode: { exact: 'environment' }
    }
  };

  /* Funções para editar o item como verificado ou retornar para o menu principal */
  const editStatus = async () => {
    try {
      const res = await api.put(`/patrimonies/${record.id}`,{
        "verified": true
      })
      console.log(res)
      alert('Patrimônio verificado com sucesso')
      window.location.reload()
    } catch (err) {

      alert('houve um erro na verificar o patrimônio. Tente novamente.')
    }
  }

  const returnHome = () =>{
    navigate('/')
  }

  return (
    <>
      <ScanStyle>
      <h3>Aponte para o QR Code</h3>
          <div className='qrcode'>
          <QrScanner
            delay={300}
            style={previewStyle}
            onError={handleError}
            onScan={handleScan}
            constraints={constraints}
          />
        </div>
        <div className="description">
          <h2>{record.description}</h2>
          <span>Aeroporto: {record.airport}</span>
          <span>Responsável: {record.responsible}</span>
          <span>Preço: R${record.price.toFixed(2)}</span>
          <div className="verificado">
            <span>Item verificado? </span>
            <span>{record.verified ?
              <span>Sim <img src={check} alt="icone de check" /></span>
              :
              <span>Não <img src={cross} alt="icone de x" /></span>}
            </span>
          </div>
        </div>
        <div className="verify">
          <h3>Deseja marcar esse item como localizado?</h3>
          <p>*Caso o item já esteja localizado, ele não mudará de status.</p>
        </div>
        <div className="btns">
          <button onClick={() => {editStatus()}}>Sim</button>
          <button onClick={() => {returnHome()}}>Não</button>
        </div>
      </ScanStyle>

    </>
  );
};

export default Scan;

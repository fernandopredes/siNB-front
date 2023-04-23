import { LoginStyle } from "./Login.style"
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate} from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import api from '../../api'

type Inputs = {
  registry: string;
  password: string;
}

/* Schema para usar o hook-form e as validações com o yup */
const schema = yup.object({
  registry: yup.string().required('Preencha a sua matricula'),
  password: yup.string().required('Preencha a sua senha'),
  }).required();


  const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  /* Hook useNavigate para recarregar a página depois de logar */
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
  try {
      const res = await api.post('/login', data);
      alert('Login bem sucedido');

      localStorage.setItem('token', `${String(res.data.access_token)}`)
      localStorage.setItem('user_id', `${String(res.data.user_id)}`)

      navigate('/')
      window.location.reload()

    }
      catch (error) {
      alert('matrícula ou senha inválidos')
    }
  }
  return (
    <LoginStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <input {...register("registry", { required: true })}placeholder="Insira sua matrícula"  />
                <span className="required">{errors.registry?.message}</span>
            </label>
            <label>
                <input type='password'  {...register("password", { required: true })} placeholder="Insira sua senha" />
                <span className="required">{errors.password?.message}</span>
            </label>
            <button> Entrar </button>
          </form>
    </LoginStyle>
  )
}

export default Login

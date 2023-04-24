import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from '../../api'
import { BtnGoBack, RegisterStyle } from "./Register.style";


type Inputs = {
  name: string;
  registry: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object({
  name: yup.string().required('O nome é obrigatório'),
  registry: yup.string().min(7, 'A matrícula deve ter 7 dígitos').max(7, 'A matrícula deve ter 7 dígitos').required('O número da matrícula é obrigatorio.'),
  password: yup.string().min(8, 'A senha deve ter no mínimo 8 dígitos').required('Preencha uma senha'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), ''], 'As senhas precisam ser iguais').required('Confirme sua senha')
}).required();

function Register() {

  const { register, handleSubmit, watch, control, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  })

  const navigate = useNavigate();

  const password = useWatch({ name: 'password', defaultValue: '', control })
  const confirmPassword = useWatch({ name: 'confirmPassword', defaultValue: '', control })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const registerUser = async () => {
      try {
        const res = await api.post('/register', {
          name: data.name,
          registry: data.registry,
          password: data.password
        })

        alert('Usuário cadastrado com sucesso')
        navigate('/')
        window.location.reload()
      } catch (err) {

        alert('houve um erro na hora de cadastrar. Tente novamente.')
      }
    }
    registerUser();
};

  return (
    <>
      <RegisterStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Cadastro</h2>
            <label>
                <input {...register("name", { required: true })} className="register" placeholder="nome de usuário" />
                <span>{errors.name?.message}</span>
            </label>
            <label>
                <input {...register("registry", { required: true })} className="register" placeholder="matrícula" />
                <span>{errors.registry?.message}</span>
            </label>
            <label>
                <input type='password' {...register("password", { required: true })} className="register" placeholder="password" />
                <span>{errors.password?.message}</span>
            </label>
            <label>
                <input type='password' {...register("confirmPassword", { required: true })} className="register" placeholder="confirme o password" />
                <span>{errors.confirmPassword?.message}</span>
            </label>
            {password && confirmPassword && password !== confirmPassword && <span>As senhas precisam ser iguais</span>}
            <div className="buttons">
              <BtnGoBack to={'/'}>voltar</BtnGoBack>
              <button> Enviar </button>
            </div>
        </form>
      </RegisterStyle>
    </>
  )
}

export default Register

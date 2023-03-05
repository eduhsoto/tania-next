import { useForm, type SubmitHandler } from 'react-hook-form'
import { FirebaseError } from 'firebase/app'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useAuth, type AuthContextModel } from '@/context/authContext'
import {
  Button,
  FormStyle,
  GroupForm,
  LoginDiv,
} from '@/styles/styled-components/Login'
import Image from 'next/image'

interface Inputs {
  email: string
  pass: string
}

const Login = (): JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>()

  const [errAuth, setAuth] = useState({ err: false, msg: '' })
  const { push } = useRouter()
  const { signIn, user } = useAuth() as AuthContextModel

  useEffect(() => {
    if (user !== null) {
      void push('/dashboard')
    }
  }, [push, user])

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await signIn(data.email, data.pass)
      setAuth({ err: false, msg: 'Iniciando sesión' })
      void push('/dashboard')
    } catch (e) {
      setAuth({ err: true, msg: handleErrors(e) })
    }
  }

  const handleErrors = (e: unknown): string => {
    const err = e instanceof FirebaseError

    if (err) {
      const msg =
        e.code === 'auth/user-not-found'
          ? 'Correo incorrecto'
          : e.code === 'auth/wrong-password'
          ? 'Contraseña incorrecta'
          : e.code === 'auth/network-request-failed'
          ? 'Error de red, vuelva a conectarse y recargar esta pagina'
          : e.code === 'auth/too-many-requests'
          ? 'Demasiados intentos, intente más tarde'
          : 'Iniciando sesión'
      return msg
    }
    return 'Iniciando sesión'
  }

  return (
    <>
      <LoginDiv>
        <FormStyle onSubmit={handleSubmit(onSubmit)}>
          <Image
            src='/img/tania-profile.png'
            alt='profile-tania'
            width={64}
            height={64}
          />
          {errAuth.err ? <p>{errAuth.msg}</p> : <p>{errAuth.msg}</p>}
          <GroupForm>
            <label htmlFor='email'>Correo</label>
            <input
              type='text'
              {...register('email', {
                required: true,
                pattern: /^[A-Za-z0-9.-_]+@[A-Za-z]+\.[A-Za-z]+$/i,
              })}
              placeholder='Escribe tu correo'
            />
            {errors.email?.type === 'required' && <p>El correo es requerido</p>}
            {errors.email?.type === 'pattern' && (
              <p>Ingrese un correo válido</p>
            )}
          </GroupForm>
          <GroupForm>
            <label htmlFor='pass'>Contraseña</label>
            <input
              type='password'
              {...register('pass', {
                required: true,
              })}
              placeholder='Escribe tu contraseña'
            />
            {errors.pass?.type === 'required' && (
              <p>La contraseña es requerida</p>
            )}
          </GroupForm>
          <Button type='submit'>Iniciar sesión</Button>
        </FormStyle>
      </LoginDiv>
    </>
  )
}

export default Login

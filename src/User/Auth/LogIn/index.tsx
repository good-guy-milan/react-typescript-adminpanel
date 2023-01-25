import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Layout from '../Layout'
import { Title } from '../Shared'
import Field from "Shared/Field"
import Button from 'Shared/Button'
import routes from 'routes'
import style from './style.module.scss'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { login } from 'services/auth.service'
type Props = {
  setAccessToken: (val: string) => void
}

export default ({ setAccessToken }: Props) => {
  const [logined, setLogined] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    const res: any = await login(email, password);
    if(res.success) {
      sessionStorage.setItem('user', JSON.stringify(res));
      setAccessToken(res.token);
      setLogined(true);
    } else {
      toast.error('Email or password is not correct!');
    }
  }
  if (logined) 
    return <Redirect to={routes.root()}/>

  return <Layout>
    <Title>Login</Title>
    <Field label='Email' value={email} setValue={(str: string) => setEmail(str)} />
    <Field label='Password' type='password' value={password} setValue={(str: string) => setPassword(str)} />
    <div className={style.forgot}>Forgot passport?</div>
    <div className={style.buttons}>
      <Button onClick={() => handleLogin()} className={style.button} primary shadow>Login</Button>
      <Button component={Link} to={routes.auth.logInWithNumio()} className={style.button} primary outline shadow>
        Login with Numio
      </Button>
      <Link to={routes.auth.signUp()} className={style.center}>
        <div className={style.textButton}>Create account</div>
      </Link>
    </div>
    <ToastContainer />
  </Layout>
}


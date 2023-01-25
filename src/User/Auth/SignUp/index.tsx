import React from 'react'
import Layout from '../Layout'
import { Title } from '../Shared'
import Field from "Shared/Field"
import Button from 'Shared/Button'
import { Link } from 'react-router-dom'
import routes from 'routes'
import style from './style.module.scss'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { register } from 'services/auth.service'


const ThanksPage = () =>
  <Layout className={style.thanksPage}>
    <Title>Thank you for creating an account and joining the DAO!</Title>
    <div className={style.verifyText}>Please verify your email to complete registration to login.</div>
    <div className={style.buttons}>
      <Button component={Link} to={routes.auth.logIn()} className={style.button} primary shadow>Log in</Button>
    </div>
  </Layout>

export default () => {
  const [registered, setRegistered] = React.useState(false);
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [conPassword, setConPassword] = React.useState('')

  const handleRegister = async () => {
    const res: any = await register(firstName, lastName, email, password, conPassword);
    if (res._id) {
      setRegistered(true)
    } else {
      Object.keys(res).forEach((key, index) => {
        toast.warning(
          res[key],
        );
      })
    }
  }

  if (registered)
    return <ThanksPage />

  return <Layout>
    <Title>Register</Title>
    <Field label='First Name' value={firstName} setValue={(str: string) => setFirstName(str)} />
    <Field label='Last Name' value={lastName} setValue={(str: string) => setLastName(str)} />
    <Field label='Email' type='email' value={email} setValue={(str: string) => setEmail(str)} />
    <Field label='Password' type='password' value={password} setValue={(str: string) => setPassword(str)} />
    <Field label='Confirm Password' type='password' value={conPassword} setValue={(str: string) => setConPassword(str)} />
    <div className={style.buttons}>
      <Button onClick={() => handleRegister()} className={style.button} primary shadow>Register</Button>
      <div className={style.center}>
        <Link to={routes.auth.logIn()} className={style.textButton}>Log in</Link>
      </div>
    </div>
    <ToastContainer />
  </Layout>
}

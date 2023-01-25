import React from 'react'
import {Title} from "../Shared"
import Layout from '../Layout'
import qr from 'assets/images/numio-qr.png'
import style from './style.module.scss'

export default () =>
  <Layout className={style.wrap}>
    <Title>Login</Title>
    <div className={style.text}>
      Scan the QR code with your Numio app to login
    </div>
    <div className={style.qr}>
      <img src={qr} alt="numio qr code"/>
    </div>
  </Layout>

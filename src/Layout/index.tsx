import React from 'react'
import TopBar from './TopBar'
import Sidebar from './Sidebar'
import style from './style.module.scss'

type Props = {
  children: React.ReactNode
}

export default ({children}: Props) =>
  <div className={style.page}>
    <TopBar />
    <div className={style.columns}>
      <Sidebar />
      <div className={style.content}>{children}</div>
    </div>
  </div>

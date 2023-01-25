import React from 'react'
import logo from 'assets/images/logo.png'
import cn from 'classnames'
import style from './style.module.scss'

type Props = {
  children: React.ReactNode
  className?: string
}

export default ({children, className}: Props) =>
  <div className={style.page}>
    <div className={cn(style.wrap, className)}>
      <img className={style.logo} src={logo} alt="logo"/>
      {children}
    </div>
  </div>

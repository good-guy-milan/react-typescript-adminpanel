import React from 'react'
import style from './style.module.scss'

type Props = {
  children: React.ReactNode
}

export const Title = ({children}: Props) =>
  <div className={style.title}>{children}</div>

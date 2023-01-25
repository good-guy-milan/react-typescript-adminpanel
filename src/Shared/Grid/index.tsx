import React from 'react'
import style from './style.module.scss'

type Props = {
  children: React.ReactNode
}

export const Columns = ({children}: Props) =>
  <div className={style.columns}>{children}</div>

export const SmallColumn = ({children}: Props) =>
  <div className={style.smallColumn}>{children}</div>

export const WideColumn = ({children}: Props) =>
  <div className={style.wideColumn}>{children}</div>

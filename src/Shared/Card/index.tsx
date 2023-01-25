import React from 'react'
import style from './style.module.scss'

type Props = {
  children: React.ReactNode
  title?: string
  actions?: React.ReactNode
}

export default ({children, title, actions}: Props) =>
  <div className={style.card}>
    <div className={style.header}>
      {title && <div className={style.title}>
        {title.split(' ').map((word, i) =>
          <span key={i} className={style.word}>{word}</span>
        )}
      </div>}
      {actions}
    </div>
    <div className={style.content}>
      {children}
    </div>
  </div>


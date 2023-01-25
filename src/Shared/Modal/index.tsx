import React from 'react'
import cn from 'classnames'
import style from './style.module.scss'

type Props = {
  children: React.ReactNode
  className?: string,
  title?: string
  actions?: React.ReactNode
  close: () => any
}

export default ({children, className, title, actions, close}: Props) => {
  const handleClick = ({target}: any) => {
    if (target.className === style.modalWrap)
      close()
  }

  return <div className={style.modalWrap} onClick={handleClick}>
    <div className={cn(style.modal, className)}>
      <div className={style.closeButton} onClick={close}/>
      {title && <div className={style.title}>{title}</div>}
      <div>{children}</div>
      {actions && <div className={style.actions}>{actions}</div>}
    </div>
  </div>
}

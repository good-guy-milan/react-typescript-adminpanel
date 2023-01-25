import React from 'react'
import cn from 'classnames'
import style from './style.module.scss'

type Props = {
  children: React.ReactNode
  color?: 'success' | 'accent'
  pointer?: boolean
  [key: string]: any
}

export default ({children, color, pointer, ...props}: Props) =>
  <span {...props} className={
    cn(color && style[color], pointer && style.pointer)
  }>{children}</span>

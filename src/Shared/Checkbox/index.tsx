import React from 'react'
import style from './style.module.scss'

export default () =>
  <label className={style.wrap}>
    <input className={style.input} type='checkbox'/>
    <div className={style.switch}>
      <div className={style.circle}/>
    </div>
  </label>

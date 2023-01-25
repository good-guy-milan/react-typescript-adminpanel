import React from 'react'
import cn from 'classnames'
import iconNoEye from 'assets/images/icons/no-eye.svg'
import iconEye from 'assets/images/icons/eye.svg'
import style from './style.module.scss'

type Props = {
  label?: string
  error?: string
  type?: string
  value?: string
  setValue: (val: string) => void
}

export default ({label, error, type = 'text', value, setValue}: Props) => {
  const [localType, setLocalType] = React.useState(type)

  return (
    <label className={style.wrap}>
      {label && <div className={style.label}>{label}</div>}
      <div className={style.inputWrap}>
        {
          type === 'password' &&
          <img
            className={style.icon}
            src={localType === 'password' ? iconNoEye : iconEye}
            onClick={() => setLocalType(localType === 'password' ? 'text' : 'password')}
            alt=''
          />
        }
        <input type={localType} value={value} onChange={(e: any) => setValue(e.target.value)} className={cn(style.input, error && style.hasError)} />
      </div>
      {error && <div className={style.error}>{error}</div>}
    </label>
  )
}

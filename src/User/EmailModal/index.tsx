import React, { useState } from 'react'
import Modal from 'Shared/Modal'
import Button from 'Shared/Button'
import Field from 'Shared/Field'
import style from './style.module.scss'

type Props = {
  close: () => any
}

export default ({close}: Props) => {
  const [errorMsg, setErrorMsg] = useState('')

  return <Modal
    className={style.modal}
    title='Change Email'
    close={close}
    actions={
      <Button primary onClick={close}>Send Verification</Button>
    }
  >
    <div className={style.modalContent}>
      <div className={style.text}>
        Enter a new email address, and click "Send Verification." You’ll receive a verification email with a link you can click on to finalize the change.
      </div>
      <Field error='Error message' value={errorMsg} setValue={(str: string) => setErrorMsg(str)}  />
    </div>
  </Modal>
}

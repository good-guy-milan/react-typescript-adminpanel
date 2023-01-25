import React from 'react'
import { Redirect } from 'react-router-dom'
import Modal from 'Shared/Modal'
import Button from 'Shared/Button'
import Checkbox from 'Shared/Checkbox'
import EmailModal from 'User/EmailModal'
import PasswordModal from 'User/PasswordModal'
import avatar from "assets/images/avatar.png"
import routes from 'routes'
import style from './style.module.scss'
import * as AuthService from '../../services/auth.service'

type Props = {
  close: () => any,
  currentUser?: any
}

export default ({ close, currentUser }: Props) => {
  const [logoutStatus, setLogoutStatus] = React.useState(false)
  const [openEmailModal, setOpenEmailModal] = React.useState(false)
  const [openPasswordModal, setOpenPasswordModal] = React.useState(false)
  const logout = () => {
    AuthService.logout();
    setLogoutStatus(true)
  }

  if (logoutStatus)
    return <Redirect to={routes.auth.logIn()} />

  return <>
    {
      !openEmailModal &&
      <Modal className={style.modal} close={close}>
        <div className={style.modalHeader}>
          <div className={style.modalAvatar} style={{ backgroundImage: `url(${avatar})` }} />
          <div className={style.modalUserInfo}>
            <div className={style.modalName}>{currentUser.firstName} {currentUser.lastName}</div>
            <div className={style.modalEmail}>{currentUser.email}</div>
            <div className={style.modalDate}>Since 07/01/2020</div>
          </div>
        </div>
        <Button className={style.modalButton} light onClick={() => setOpenPasswordModal(true)}>
          Change Password
        </Button>
        <Button className={style.modalButton} light onClick={() => setOpenEmailModal(true)}>
          Change Email
        </Button>
        <Button className={style.modalButton} light component={'label'}>
          <div>Dark Mode</div>
          <Checkbox />
        </Button>
        <Button onClick={logout} className={style.modalButton} light>
          Log out
        </Button>
      </Modal>
    }
    {openEmailModal && <EmailModal close={() => setOpenEmailModal(false)} />}
    {openPasswordModal && <PasswordModal close={() => setOpenPasswordModal(false)} />}
  </>
}

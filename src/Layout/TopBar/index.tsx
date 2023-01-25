import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import ProfileModal from 'User/ProfileModal'
import routes from "routes"
import logo from "assets/images/logo.png"
import avatar from "assets/images/avatar.png"
import style from './style.module.scss'
import { getUserBoard } from 'services/user.service'

import { useDispatch } from 'react-redux'
import { setUserInfo } from '../../app/reducers/userReducer'

export default () => {

  const dispatch = useDispatch()
  
  const [modalOpen, setModalOpen] = React.useState(false)
  const [currentUser, setCurrentUser] = React.useState({
    id: null,
    firstName: null,
    lastName: null,
    email: null
  })

  useEffect(() => {
    getUserBoard()
    .then((data) => {
      setCurrentUser(data);
      dispatch(setUserInfo(data))
    })
  }, [modalOpen])

  return <>
    {
      modalOpen &&
      <ProfileModal close={() => setModalOpen(false)} currentUser={currentUser} />
    }
    <div className={style.topBar}>
      <Link className={style.logo} to={routes.root}>
        <img src={logo} alt="logo"/>
      </Link>
      <div className={style.user} onClick={() => setModalOpen(true)}>
        <div>
          <div className={style.name}>{currentUser.firstName} {currentUser.lastName}</div>
          <div className={style.email}>{currentUser.email}</div>
        </div>
        <div className={style.avatar} style={{backgroundImage: `url(${avatar})`}}/>
      </div>
    </div>
  </>
}

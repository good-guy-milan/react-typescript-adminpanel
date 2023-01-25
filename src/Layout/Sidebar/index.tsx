import React from 'react'
import {NavLink} from "react-router-dom"
import iconHome from "assets/images/icons/home.svg"
import iconAddProposal from "assets/images/icons/add-proposal.svg"
import iconUsers from "assets/images/icons/users.svg"
import iconBell from "assets/images/icons/bell.svg"
import iconPenNPaper from "assets/images/icons/pen-n-paper.svg"
import iconReward from "assets/images/icons/reward.svg"
import routes from 'routes'
import style from './style.module.scss'

const menu = [
  {
    to: routes.root(),
    icon: iconHome,
    text: 'Dashboard'
  },
  {
    to: routes.proposals(),
    icon: iconAddProposal,
    text: 'Proposals'
  },
  {
    to: routes.votes(),
    icon: iconUsers,
    text: 'Votes',
  },
  {
    to: routes.activeProjects(),
    icon: iconPenNPaper,
    text: 'Active Projects'
  },
  {
    to: routes.rewards(),
    icon: iconReward,
    text: 'Rewards'
  },
]

export default () =>
  <div className={style.sidebar}>
    {menu.map(({to, icon, text}, i) =>
      <NavLink key={i} exact className={style.item} activeClassName={style.active} to={to}>
        <div className={style.iconWrap}>
          <div className={style.icon} style={{maskImage: `url(${icon})`, WebkitMaskImage: `url(${icon})`}}/>
        </div>
        <div className={style.text}>{text}</div>
        {to === routes.votes() &&
          <div className={style.bell}>
            <img src={iconBell} alt=''/>
          </div>
        }
      </NavLink>
    )}
  </div>

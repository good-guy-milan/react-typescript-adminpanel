import React from 'react'
import Modal from "Shared/Modal"
import Button from "Shared/Button"
import iconLike from "assets/images/icons/like.svg"
import style from './style.module.scss'

type Props = {
  close: () => any
  title: string
}

export default ({close, title}: Props) =>
  <Modal
    title={title}
    close={close}
    actions={
      <>
        <Button primary onClick={close}>Ok</Button>
        <Button primary outline icon={iconLike}>Upvote</Button>
      </>
    }
  >
    <div className={style.modalContent}>
      <div className={style.modalBrief}>
        <span>350,000 PHNX</span>
        <span>5 milestone</span>
        <span>10/30/2020</span>
      </div>
      <div className={style.modalText}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
      </div>
      <div className={style.modalSteps}>
        <div className={style.modalStep}>
          <div className={style.modalStepNumber}>1</div>
          <div className={style.modalStepText}>Architecture Document</div>
        </div>
        <div className={style.modalStep}>
          <div className={style.modalStepNumber}>2</div>
          <div className={style.modalStepText}>Backend server and database connected with registration</div>
        </div>
        <div className={style.modalStep}>
          <div className={style.modalStepNumber}>3</div>
          <div className={style.modalStepText}>Buy and sell one product functionality</div>
        </div>
      </div>
    </div>
  </Modal>

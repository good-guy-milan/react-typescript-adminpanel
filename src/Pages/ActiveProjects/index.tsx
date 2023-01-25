import React from 'react'
import Card from "Shared/Card"
import Table from "Shared/Table"
import Modal from 'Shared/Modal'
import Button from 'Shared/Button'
import style from './style.module.scss'

type Project = {
  title: string
  milestone: string
  date: string
}

const data: Project[] = [
  {
    title: 'Amazon dApp build',
    milestone: 'Milestone 3/5',
    date: '09/30/2020',
  },
  {
    title: 'Gamer dApp build',
    milestone: 'Milestone 3/5',
    date: '09/30/2020',
  },
  {
    title: 'Youtube dApp build',
    milestone: 'Milestone 2/5',
    date: '09/30/2020',
  },
  {
    title: 'Facebook dApp build',
    milestone: 'Milestone 2/5',
    date: '09/30/2020',
  },
  {
    title: 'WhatsApp dApp build',
    milestone: 'Milestone 2/5',
    date: '09/30/2020',
  },
  {
    title: 'DEX dApp build',
    milestone: 'Milestone 2/5',
    date: '09/30/2020',
  },
  {
    title: 'Uber dApp build',
    milestone: 'Milestone 1/5',
    date: '09/30/2020',
  },
  {
    title: 'Tokenization dApp build',
    milestone: 'Milestone 3/5',
    date: '09/30/2020',
  },
]

export default () => {
  const [modalItem, setModalItem] = React.useState<Project | undefined>(undefined)
  const closeModal = () => setModalItem(undefined)

  return <Card title='Active Projects'>
    {modalItem &&
      <Modal
        close={closeModal}
        title={modalItem.title}
        actions={
          <Button primary onClick={closeModal}>Ok</Button>
        }
      >
        <div className={style.modalContent}>
          <div className={style.modalSection}>
            <div className={style.modalInfo}>
              <div className={style.modalColumn}>
                <div className={style.modalKey}>Status</div>
                <div className={style.modalValue}>{modalItem.milestone}</div>
              </div>
              <div className={style.modalColumn}>
                <div className={style.modalKey}>Est. Completion Date</div>
                <div className={style.modalValue}>{modalItem.date} (On time)</div>
              </div>
            </div>
          </div>
          <div className={style.modalSection}>
            <div className={style.modalTitle}>Progress Screenshots</div>
            <div className={style.modalImages}>
              <div/>
              <div/>
              <div/>
            </div>
          </div>
          <div className={style.modalSection}>
            <div className={style.modalTitle}>Notes</div>
            <div className={style.modalNotes}>
              <textarea className={style.modalTextarea}>
                Developers have been selected and designs have been completed.
              </textarea>
              <div className={style.modalNotesDate}>07/12/2020</div>
            </div>
          </div>
        </div>
      </Modal>
    }
    <Table columns={['Active Project', 'Status', 'Est. Completion Date']}>
      {data.map((item, i) =>
        <tr key={i} onClick={() => setModalItem(item)}>
          <td>{item.title}</td>
          <td>{item.milestone}</td>
          <td>{item.date}</td>
        </tr>
      )}
    </Table>
  </Card>
}

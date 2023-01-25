import React from 'react'
import Font from 'Shared/Font'
import Card from "Shared/Card"
import Table from "Shared/Table"
import {Columns} from 'Shared/Grid'
import Modal from 'Shared/Modal'
import Button from 'Shared/Button'
import style from './style.module.scss'

type Project = {
  title: string,
  date?: string
}

const upcoming: Project[] = [
  {
    title: 'Amazon dApp build',
  },
  {
    title: 'Uber replacement dApp',
    date: '08/01/2020',
  },
  {
    title: 'Facebook dApp build',
    date: '08/01/2020',
  },
  {
    title: 'Youtube dApp build',
    date: '09/01/2020',
  },
  {
    title: 'Whatsapp dApp build',
    date: '09/01/2020',
  },
  {
    title: 'DEX aggregator build',
    date: '09/01/2020',
  },
  {
    title: 'Gamer Marketplace build',
    date: '09/01/2020',
  },
  {
    title: 'Tokenization dApp build',
    date: '10/01/2020',
  },
]

const past = [
  [
    'DEX dApp build',
    '07/01/2020',
    <Font color='success'>Pass</Font>,
  ],
  [
    'Other dApp build',
    '07/01/2020',
    <Font color='success'>Pass</Font>,
  ],
  [
    'Other dApp build',
    '07/01/2020',
    'Fail',
  ],
  [
    'Other dApp build',
    '07/01/2020',
    'Fail',
  ],
  [
    'Other dApp build',
    '07/01/2020',
    <Font color='success'>Pass</Font>,
  ],
  [
    'Other dApp build',
    '07/01/2020',
    'Fail',
  ],
  [
    'Other dApp build',
    '07/01/2020',
    <Font color='success'>Pass</Font>,
  ],
  [
    'Other dApp build',
    '07/01/2020',
    <Font color='success'>Pass</Font>,
  ],
]

export default () => {
  const [modalItem, setModalItem] = React.useState<Project | undefined>(undefined)
  const closeModal = () => setModalItem(undefined)

  return <>
    {
      modalItem &&
      <Modal
        close={closeModal}
        title={modalItem.title}
        actions={
          <>
            <Button primary onClick={closeModal}>Yes</Button>
            <Button primary outline onClick={closeModal}>No</Button>
          </>
        }
      >
        <div className={style.modalContent}>
          <div className={style.modalInfo}>
            <div className={style.modalColumn}>
              <div className={style.modalKey}>Cost</div>
              <div className={style.modalValue}>350,000 PHNX</div>
            </div>
            <div className={style.modalColumn}>
              <div className={style.modalKey}>Est. Completion</div>
              <div className={style.modalValue}>{modalItem.date}</div>
            </div>
          </div>
          <div className={style.modalQuestion}>Are you in favor of funding this project?</div>
        </div>
      </Modal>
    }
    <Columns>
      <Card title='Upcoming Votes'>
        <Table columns={['Proposal', 'Voting Day']}>
          {upcoming.map((item, i) =>
            <tr key={i}>
              <td>{item.title}</td>
              <td>{
                item.date ||
                <Font
                  color='accent'
                  pointer
                  onClick={() => setModalItem(item)}
                >Vote Now</Font>
              }</td>
            </tr>
          )}
        </Table>
      </Card>
      <Card title='Past Votes'>
        <Table columns={['Proposal', 'Voting Day', 'Pass/Fail']}>
          {past.map((row, i) =>
            <tr key={i}>
              {row.map((value, j) =>
                <td key={j}>{value}</td>
              )}
            </tr>
          )}
        </Table>
      </Card>
    </Columns>
  </>
}

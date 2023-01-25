import React from 'react'
import Card from "Shared/Card"
import Table from "Shared/Table"
import Font from 'Shared/Font'
import Button from 'Shared/Button'
import Modal from 'Shared/Modal'
import ProposalModal from 'Pages/Proposals/Modal'
import style from './style.module.scss'

const data = [
  {
    title: 'Build Amazon Marketplace dApp',
    upvotes: <>Vote on 10/30/2020</>,
    comments: 104,
    cost: '350,000',
    date: <Font color='accent'>06/30/2020</Font>,
  },
  {
    title: 'Build Uber replacement dApp',
    upvotes: <>79 / <Font color='success'>100</Font></>,
    comments: 89,
    cost: '550,000',
    date: <Font color='accent'>07/05/2020</Font>,
  },
  {
    title: 'Build Facebook replacement dApp',
    upvotes: <>65 / <Font color='success'>100</Font></>,
    comments: 97,
    cost: '350,000',
    date: <Font color='accent'>07/15/2020</Font>,
  },
  {
    title: 'Build DEX aggregator dApp',
    upvotes: <>63 / <Font color='success'>100</Font></>,
    comments: 136,
    cost: '450,000',
    date: <Font color='accent'>07/30/2020</Font>,
  },
  {
    title: 'Build Tokenization dApp',
    upvotes: <>59 / <Font color='success'>100</Font></>,
    comments: 45,
    cost: '950,000',
    date: <Font color='accent'>08/15/2020</Font>,
  },
  {
    title: 'Build Youtube replacement dApp',
    upvotes: <>47 / <Font color='success'>100</Font></>,
    comments: 62,
    cost: '250,000',
    date: <Font color='accent'>08/15/2020</Font>,
  },
  {
    title: 'Build WhatsApp replacement dApp',
    upvotes: <>81 / <Font color='success'>100</Font></>,
    comments: 95,
    cost: '150,000',
    date: <Font color='accent'>08/25/2020</Font>,
  },
  {
    title: 'Build Gamer Marketplace dApp',
    upvotes: <>94 / <Font color='success'>100</Font></>,
    comments: 247,
    cost: '300,000',
    date: <Font color='accent'>09/01/2020</Font>,
  },
]

export default () => {
  const [modalOpen, setModalOpen] = React.useState(false)
  const closeModal = () => setModalOpen(false)
  const [projectModalItem, setProjectModalItem] = React.useState<{title: string} | undefined>(undefined)

  return <>
    {modalOpen &&
      <Modal
        title='Submit a Proposal'
        className={style.modal}
        actions={<Button primary onClick={closeModal}>Next</Button>}
        close={closeModal}
      >
        <div className={style.modalContent}>
          <div className={style.modalContentTitle}>
            Why do you want to build this dApp or smart contract? Why is it needed?
          </div>
          <textarea className={style.modalText}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          </textarea>
        </div>
      </Modal>
    }
    {
      projectModalItem &&
      <ProposalModal title={projectModalItem.title} close={() => setProjectModalItem(undefined)} />
    }
    <Card
      title='Latest Proposals'
      actions={
        <Button secondary onClick={() => setModalOpen(true)}>Submit Proposal</Button>
      }
    >
      <Table columns={['Proposal', 'Current Upvotes', '# comments', 'Cost (PHNX)', 'Expiration Date']}>
        {data.map(({title, upvotes, comments, cost, date}, i) =>
          <tr key={i} onClick={() => setProjectModalItem({title})}>
            <td>{title}</td>
            <td>{upvotes}</td>
            <td>{comments}</td>
            <td>{cost}</td>
            <td>{date}</td>
          </tr>
        )}
      </Table>
    </Card>
  </>
}


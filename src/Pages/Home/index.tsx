import React from 'react'
import Card from 'Shared/Card'
import Table from 'Shared/Table'
import Font from 'Shared/Font'
import PieChart from 'Shared/PieChart'
import ProposalModal from 'Pages/Proposals/Modal'
import style from './style.module.scss'

const chartData = [
  {
    title: 'Community Airdrop, HYDRO Holders',
    value: 40,
    color: '#172DCE',
  },
  {
    title: 'Phoenix DAO Foundation',
    value: 30,
    color: '#EA8604',
  },
  {
    title: 'DAO rewards',
    value: 15,
    color: '#A278FF',
  },
  {
    title: 'DAO Fund',
    value: 15,
    color: '#29B700',
  },
]

type Project = {
  title: string
  date: string
  price: string
}

const latestProposals: Project[] = [
  {
    title: 'Build Amazon Marketplace dApp',
    date: '06/28/20',
    price: '350,000 PHNX',
  },
  {
    title: 'Build DEX aggregator',
    date: '07/03/20',
    price: '350,000 PHNX',
  },
  {
    title: '1,000,000 tokens for exchange listing',
    date: '07/09/20',
    price: '350,000 PHNX',
  },
  {
    title: 'Build ZK proof storage contracts',
    date: '07/15/20',
    price: '350,000 PHNX',
  },
  {
    title: 'Start unbanked marketing initiative',
    date: '08/01/20',
    price: '350,000 PHNX',
  },
]

export default () => {
  const [modalItem, setModalItem] = React.useState<Project | undefined>(undefined)
  const openModal = (item: Project) => setModalItem(item)
  const closeModal = () => setModalItem(undefined)

  return <>
    {modalItem &&
      <ProposalModal title={modalItem.title} close={closeModal} />
    }
    <div className={style.grid}>
      <Card title='Latest Proposals'>
        <Table compact>
          {latestProposals.map((item, i) =>
            <tr key={i} onClick={() => openModal(item)}>
              <td>{item.title}</td>
              <td>{item.date}</td>
            </tr>
          )}
        </Table>
      </Card>
      <PieChart
        lineWidth={50}
        data={chartData}
      />
      <Card title='Voting Results'>
        <Table compact>
          <tr>
            <td>06/21/20</td>
            <td>Build messaging dApp</td>
            <td><Font color='success'>Passed</Font></td>
          </tr>
          <tr>
            <td>06/19/20</td>
            <td>Fund a checkers dApp</td>
            <td>Failed</td>
          </tr>
          <tr>
            <td>06/15/20</td>
            <td>Fund Exchange Listing</td>
            <td><Font color='success'>Passed</Font></td>
          </tr>
          <tr>
            <td>05/18/20</td>
            <td>Fund social marketing</td>
            <td><Font color='success'>Passed</Font></td>
          </tr>
          <tr>
            <td>05/12/20</td>
            <td>Fund a gambling dApp</td>
            <td>Failed</td>
          </tr>
        </Table>
      </Card>
      <Card title='Transaction History'>
        <Table compact columns={['Type', 'Use', 'Amount', 'Date']}>
          <tr>
            <td>Foundation</td>
            <td>DAO Developers</td>
            <td>1,500,000</td>
            <td>06/29/20</td>
          </tr>
          <tr>
            <td>DAO Rewards</td>
            <td>Community Vote</td>
            <td>345,613</td>
            <td>06/19/20</td>
          </tr>
          <tr>
            <td>Foundation</td>
            <td>Storage Protocol</td>
            <td>745,000</td>
            <td>06/15/20</td>
          </tr>
          <tr>
            <td>DOA Rewards</td>
            <td>Community Vote</td>
            <td>289,477</td>
            <td>05/18/20</td>
          </tr>
        </Table>
      </Card>
    </div>
  </>
}

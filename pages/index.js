import Head from 'next/head'

import Layout from '@components/Layout'
import Modal from '@components/Modal'

function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/images/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sunday</title>
        <meta name="title" content="Sunday" />
      </Head>
      <>
        <Modal />
        <Layout></Layout>
      </>
    </>
  )
}

const mapStateToProps = ({ modals }) => ({
  show: modals.show,
  modalName: modals.modalName,
})

export default connect(mapStateToProps, null)(Home)

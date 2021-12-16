import { connect } from 'react-redux'
import Head from 'next/head'

import Layout from '@components/Layout'
import ProjectosMain from '@components/Projects'
import Modal from '@components/Modal'

const Proyectos = () => {
  return (
    <>
      <Head>
        <title>Proyectos</title>
        <meta name="title" content="Sunday" />
      </Head>
      <Modal />
      <Layout>
        <ProjectosMain />
      </Layout>
    </>
  )
}

const mapStateToProps = ({ modals }) => ({
  show: modals.show,
  modalName: modals.modalName,
})

export default connect(mapStateToProps, null)(Proyectos)

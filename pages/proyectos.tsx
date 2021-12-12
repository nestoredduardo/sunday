import { connect } from 'react-redux'

import Layout from '@components/Layout'
import ProjectosMain from '@components/Projects'
import Modal from '@components/Modal'

const Proyectos = () => {
  return (
    <>
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

import { connect } from 'react-redux'

import NewProject from './Projects/NewProject'
import NewType from './Projects/NewType'
import NewTask from './Projects/Kanban/NewTask'

import { hideModal } from '@modalActions'

const Modal = ({ show, modalName, hideModal, extraData }) => {
  if (show) {
    return (
      <div
        className="min-h-screen min-w-full bg-[rgba(0,0,0,.65)] z-10 fixed flex justify-center items-center"
        onClick={() => hideModal()}
      >
        {modalName === 'newProject' && <NewProject />}
        {modalName === 'addType' && <NewType />}
        {modalName === 'newTask' && <NewTask extraData={extraData} />}
      </div>
    )
  }
  return null
}

const mapStateToProps = ({ modals }) => ({
  show: modals.show,
  modalName: modals.modalName,
  extraData: modals.extraData,
})

const mapDispatchToProps = {
  hideModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)

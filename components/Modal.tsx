import { connect } from 'react-redux'

import NewProject from './Projects/NewProject'

import { hideModal } from '@modalActions'

const Modal = ({ show, modalName, hideModal }) => {
  if (show) {
    return (
      <div
        className="min-h-screen min-w-full bg-[rgba(0,0,0,.65)] z-10 absolute flex justify-center items-center"
        onClick={() => hideModal()}
      >
        {modalName === 'newProject' && <NewProject />}
      </div>
    )
  }
  return null
}

const mapStateToProps = ({ modals }) => ({
  show: modals.show,
  modalName: modals.modalName,
})

const mapDispatchToProps = {
  hideModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)

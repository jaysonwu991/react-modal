import React from 'react'

import './Modal.scss'

class Modal extends React.Component {
  constructor(props) {
    super(props)

    this.modalContent = null

    this.state = {
      marginTop: 60
    }
  }

  render() {
    return (
      <div style={{ visibility: this.props.showModal ? 'visible' : 'hidden' }}>
        <div className='modal-backdrop'></div>
        <div className='modal' tabIndex={-1} role='dialog' onClick={this.props.onHideModal}>
          <div className='modal-dialog' role='document'>
            <div
              className='modal-content'
              ref={this.modalContent}
              style={{ marginTop: this.state.marginTop }}
            >
              <div className='modal-header'>
                <h5 className='modal-title'>{this.props.title ? this.props.title : ''}</h5>
                <button type='button' className='modal-close' aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>{this.props.children}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal

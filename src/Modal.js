import React from 'react'

import {
  MODAL_BACKDROP,
  MODAL,
  MODAL_DIALOG,
  MODAL_CONTENT,
  MODAL_HEADER,
  MODAL_TITLE,
  MODAL_CLOSE,
  MODAL_CLOSE_HOVER,
  MODAL_BODY
} from './ModalStyle'

class Modal extends React.Component {
  constructor(props) {
    super(props)

    this.modalContent = null

    this.state = {
      hover: false,
      marginTop: 60
    }

    this.toggleHover = this.toggleHover.bind(this)
    this.fixMarginTop = this.fixMarginTop.bind(this)
    this.getClientWidthHeight = this.getClientWidthHeight.bind(this)
  }

  componentDidMount() {
    this.fixMarginTop()
    window.addEventListener('resize', this.fixMarginTop)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.fixMarginTop)
  }

  getElementPosition() {
    const defaultRect = { top: 0, left: 0 }

    const rect =
      (this.modalContent.current && this.modalContent.current.getBoundingClientRect()) ||
      defaultRect

    return {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft
    }
  }

  getClientWidthHeight() {
    const width =
      (this.modalContent && this.modalContent.current && this.modalContent.current.clientWidth) || 0
    const height =
      (this.modalContent && this.modalContent.current && this.modalContent.current.clientHeight) ||
      0
    return {
      width,
      height
    }
  }

  getViewportOffset() {
    if (window.innerWidth) {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      }
    } else {
      if (document.compatMode === 'BackCompat') {
        return {
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }
      } else {
        return {
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight
        }
      }
    }
  }

  fixMarginTop() {
    if (this.getClientWidthHeight().height > this.getViewportOffset().height) {
      this.setState({
        marginTop: 30
      })
    } else {
      this.setState({
        marginTop: this.getViewportOffset().height / 2 - this.getClientWidthHeight().height / 2 - 60
      })
    }
  }

  toggleHover() {
    this.setState({
      hover: !this.state.hover
    })
  }

  render() {
    return (
      <div style={{ visibility: this.props.showModal ? 'visible' : 'hidden' }}>
        <div style={MODAL_BACKDROP}></div>
        <div tabIndex={-1} role='dialog' onClick={this.props.onHideModal} style={MODAL}>
          <div role='document' style={MODAL_DIALOG}>
            <div
              ref={this.modalContent}
              style={{ ...MODAL_CONTENT, marginTop: this.state.marginTop }}
            >
              <div style={MODAL_HEADER}>
                <h5 style={MODAL_TITLE}>{this.props.title ? this.props.title : ''}</h5>
                <button
                  type='button'
                  aria-label='Close'
                  style={this.state.hover ? { ...MODAL_CLOSE, ...MODAL_CLOSE_HOVER } : MODAL_CLOSE}
                  onMouseEnter={this.toggleHover}
                  onMouseLeave={this.toggleHover}
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div style={MODAL_BODY}>{this.props.children}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal

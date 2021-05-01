import React, { useRef, useState, useLayoutEffect } from 'react'

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

const Modal = ({ title, showModal, onHideModal, children }) => {
  const modalContent = useRef(null)
  const [hover, setHover] = useState(false)
  const [marginTop, setMarginTop] = useState(60)

  useLayoutEffect(() => {
    fixMarginTop()
    window.addEventListener('resize', fixMarginTop)
  }, [])

  const getClientWidthHeight = () => {
    const width = (modalContent && modalContent.current && modalContent.current.clientWidth) || 0
    const height = (modalContent && modalContent.current && modalContent.current.clientHeight) || 0
    return { width, height }
  }

  const getViewportOffset = () => {
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

  const fixMarginTop = () => {
    if (getClientWidthHeight().height > getViewportOffset().height) {
      setMarginTop(30)
    } else {
      setMarginTop(getViewportOffset().height / 2 - getClientWidthHeight().height / 2 - 60)
    }
  }

  return (
    <div style={{ visibility: showModal ? 'visible' : 'hidden' }}>
      <div style={MODAL_BACKDROP}></div>
      <div tabIndex={-1} role='dialog' onClick={onHideModal} style={MODAL}>
        <div role='document' style={MODAL_DIALOG}>
          <div ref={modalContent} style={{ ...MODAL_CONTENT, marginTop }}>
            <div style={MODAL_HEADER}>
              <h5 style={MODAL_TITLE}>{title || ''}</h5>
              <button
                type='button'
                aria-label='Close'
                onMouseEnter={() => setHover(!hover)}
                onMouseLeave={() => setHover(!hover)}
                style={hover ? { ...MODAL_CLOSE, ...MODAL_CLOSE_HOVER } : MODAL_CLOSE}
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div style={MODAL_BODY}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

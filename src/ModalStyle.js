export const MODAL_BACKDROP = {
  zIndex: 1050,
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: '#000',
  opacity: 0.5
}

export const MODAL = {
  zIndex: 1050,
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  overflow: 'hidden',
  WebkitOverflowScrolling: 'touch',
  outline: 0
}

export const MODAL_DIALOG = {
  position: 'relative',
  margin: '60px auto',
  maxWidth: '680px'
}

export const MODAL_CONTENT = {
  position: 'relative',
  backgroundColor: '#fff',
  backgroundClip: 'padding-box',
  border: '1px solid rgba(0, 0, 0, 0.2)',
  borderRadius: '6px',
  WebkitBoxShadow: '0 3px 9px rgba(0, 0, 0, 0.5)',
  boxShadow: '0 3px 9px rgba(0, 0, 0, 0.5)',
  outline: 0
}

export const MODAL_HEADER = {
  padding: '16px',
  borderBottom: '1px solid #e5e5e5'
}

export const MODAL_TITLE = {
  margin: 0
}

export const MODAL_CLOSE = {
  float: 'right',
  marginTop: '-20px',
  padding: 0,
  lineHeight: 1,
  background: '0 0',
  color: '#000',
  fontSize: '20px',
  fontWeight: 700,
  textShadow: '0 1px 0 #fff',
  border: 0,
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  filter: 'alpha(opacity=20)',
  opacity: 0.2,
  cursor: 'pointer'
}

export const MODAL_CLOSE_HOVER = {
  color: '#000',
  textDecoration: 'none',
  filter: 'alpha(opacity=50)',
  opacity: 0.5,
  cursor: 'pointer'
}

export const MODAL_BODY = {
  position: 'relative',
  padding: '16px'
}

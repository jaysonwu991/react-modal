# react-modal

> A React Component To Use Modal Like Bootstrap Intelligently

## Background

> [Bootstrap](https://getbootstrap.com/) Modal is beautiful, it is still attractive to be used by React, Modal is displayed in the center of the browser window，it uses `margin-top` to make it center instead of `flex` box (CSS3), so it is also fit for the browser of lower versions.

## Installation

```bash
$ npm i -S @lingjie991/react-modal
```

## Usage With React

```javascript
import React from 'react'
import Modal from '@lingjie991/react-modal'

const App = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className='App'>
      <span onClick={() => setShowModal(true)}>Click Me!</span>
      <Modal
        title='Hello'
        showModal={showModal}
        onHideModal={() => setShowModal(false)}
      >
        <p>Hello World!</p>
      </Modal>
    </div>
  )
}

export default App
```

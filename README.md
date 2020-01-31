# react-modal

> A React Component To Use Modal Like Bootstrap Intelligently

## Background

> [Bootstrap](https://getbootstrap.com/) Modal is beautiful, it is still attractive to be used by React, Modal is displayed in the center of the browser window，it uses `margin-top` to make it center instead of `flex` box (CSS3), so it is also fit for the browser of lower version.

## Installation

```bash
$ npm i -S @lingjie991/react-modal
```

## Usage With React

```javascript
import React from 'react'

import Modal from '@lingjie991/react-modal'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false
    }

    this.onShowModal = this.onShowModal.bind(this)
    this.onHideModal = this.onHideModal.bind(this)
  }

  onShowModal() {
    this.setState({
      showModal: true
    })
  }

  onHideModal() {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <div className='App'>
        <span onClick={this.onShowModal}>Click Me!</span>
        <Modal
          title='Hello'
          showModal={this.stateshowModal}
          onShowModal={this.onShowModal}
          onHideModal={this.onHideModal}
        >
          <p>Hello World!</p>
        </Modal>
      </div>
    )
  }
}

export default App
```

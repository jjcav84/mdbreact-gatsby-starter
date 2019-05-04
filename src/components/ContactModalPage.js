import React, { Component } from 'react'
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBRow
} from 'mdbreact'
import ContactPage from './ContactPage'

class ContactModalPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modal2: false,
    }
  }

  toggle (nr) {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    })
  }

  render () {
    return (
      <MDBContainer>
        <MDBRow center>
          <p
            className="btn nav-link text-dark Ripple-parent hover"
            onClick={() => this.toggle(2)}
          >
            <strong>Contact Me</strong>
          </p>
          <MDBModal
            isOpen={this.state.modal2}
            toggle={() => this.toggle(2)}
            size="fluid"
          >
            <MDBModalHeader toggle={() => this.toggle(2)}>
              Contact Me
            </MDBModalHeader>
            <MDBModalBody>
              <ContactPage />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="purple" size="lg" onClick={() => this.toggle(2)}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBRow>
      </MDBContainer>
    )
  }
}

export default ContactModalPage

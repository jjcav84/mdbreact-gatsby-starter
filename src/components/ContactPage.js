import React from 'react'
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBContainer
} from 'mdbreact'

const ContactPage = () => {
  return (
    <section id="contact" className="my-5">
      <MDBContainer>
        <p className="text-center w-responsive mx-auto pb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nulla at velit varius finibus. Pellentesque porttitor faucibus felis, quis aliquet odio mattis vitae. Donec at convallis nisi.
        </p>
      </MDBContainer>
      <MDBContainer className="mx-auto">
        <MDBRow>
          <MDBCol lg="5" className="lg-0 mb-4">
            <MDBCard>
              <MDBCardBody>
                <div className="form-header">
                  <h3 className="mt-2">
                    <MDBIcon icon="envelope" />
                    Write to me:
                  </h3>
                </div>
                <form
                  action="https://formspree.io/<user@reactapptemplate.com>"
                  method="POST">
                  <div className="md-form">
                    <MDBInput
                      name="name"
                      label="Your name"
                      type="text"
                      id="form-name"
                    />
                  </div>
                  <div className="md-form">
                    <MDBInput
                      name="email"
                      label="Your email"
                      type="text"
                      id="form-email"
                    />
                  </div>
                  <div className="md-form">
                    <MDBInput
                      name="subject"
                      label="Subject"
                      type="text"
                      id="form-subject"
                    />
                  </div>
                  <div className="md-form">
                    <MDBInput
                      name="areatext"
                      icon="pencil"
                      label="message"
                      iconClass="grey-text"
                      type="textarea"
                      id="form-text"
                    />
                    <MDBInput
                      type="hidden"
                      name="_next"
                      value="https://<yourreactappsite.com>/"
                    />
                    <MDBInput type="text" name="_gotcha" className="d-none" />
                  </div>
                  <div className="text-center">
                    <MDBBtn type="submit" color="cyan">
                      Submit
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="7">
            <div
              id="map-container"
              className="rounded z-depth-1-half map-container"
              style={{ height: '400px' }}>
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=<Your API Key>&q=Alamo, San Antonio+TX"
                title="This is a unique title"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
              />
            </div>
            <br />
            <MDBRow className="text-center blue-text">
              <MDBCol md="4">
                  <MDBIcon icon="map-marker" />
                <p>San Antonio, TX</p>
              </MDBCol>
              <MDBCol md="4">
                  <MDBIcon icon="phone" />
                <p>+1 (210) 123 456</p>
              </MDBCol>
              <MDBCol md="4">
                <MDBIcon icon="envelope" />                <p className="mb-md-0">admin@yourdomainname.com</p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

export default ContactPage

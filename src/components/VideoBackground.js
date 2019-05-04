import React from 'react'
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  Animation
} from 'mdbreact'
import backgroundImage from '../images/background.jpg'

const divStyle = {
  marginTop: '66px'
}

const gradientStyle = {
  background: 'linear-gradient(45deg, #30d0d0b9, #330867b9 100%)',
  WebkitBackground: 'linear-gradient(45deg, #30d0d0b9, #330867b9 100%)',
  MozBackground: 'linear-gradient(45deg, #30d0d0b9, #330867b9 100%)'
}

const VideoBackground = () => {
  return (
    <div id="videobackground" style={divStyle}>
      <MDBView>
        <img
          src={backgroundImage}
          className="img-fluid"
          alt="Mountain View, California"
        />
        <MDBMask className="d-flex justify-content-center align-items-center" style={gradientStyle}>
          <MDBContainer className="px-md-3 px-sm-0">
            <MDBRow>
              <MDBCol md="12" className="white-text text-center">
                <h1 className="h1-responsive font-weight-bold mb-0">
                  Full Page Hero
                </h1>
                <hr className="hr-light w-75" />
                <h3 className="h3-responsive">
                  Call to action copy text
                </h3>
                <Animation type="rubberBand" duration="2s">
                  <MDBBtn
                    outline
                    rounded
                    hover="true"
                    waves-effect="true"
                    color="white"
                    size="lg"
                    href="mailto:admin@yourdomainname.com">
                    <MDBIcon icon="home" /> Email me
                  </MDBBtn>
                </Animation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>
    </div>
  )
}

export default VideoBackground

import React from 'react'
import { MDBRow, MDBCol, MDBIcon, Animation, MDBContainer } from 'mdbreact'

const FeaturesPage = () => {
  return (
    <section id="about" className="text-center my-3">
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <Animation reveal type="zoomIn" duration="500ms">
              <MDBIcon className="cyan-text mb-2" icon="user-ninja" size="3x" />
            </Animation>
            <h3 className="responsive font-weight-bold my-2">About Me</h3>
            <p className="lead black-text mx-auto mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nulla at velit varius finibus. Pellentesque porttitor faucibus felis, quis aliquet odio mattis vitae. Donec at convallis nisi. Vestibulum nec sagittis quam. Donec at suscipit odio. Duis pulvinar placerat dolor. Ut eget gravida dolor. Duis malesuada bibendum nunc ut viverra. Vivamus pellentesque risus sit amet sem convallis, et pulvinar lectus venenatis. Quisque nisl diam, cursus sit amet tristique vitae, hendrerit non enim. Vivamus orci orci, laoreet ut justo eu, rutrum aliquet velit. Curabitur ac mattis libero. Etiam ac dolor metus. Curabitur nec est quis libero placerat sodales. Quisque consectetur ante metus, in suscipit urna vehicula id. Integer nec laoreet nulla.
            </p>
            <p className="lead black-text mx-auto mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nulla at velit varius finibus. Pellentesque porttitor faucibus felis, quis aliquet odio mattis vitae. Donec at convallis nisi. Vestibulum nec sagittis quam. Donec at suscipit odio. Duis pulvinar placerat dolor. Ut eget gravida dolor. Duis malesuada bibendum nunc ut viverra. Vivamus pellentesque risus sit amet sem convallis, et pulvinar lectus venenatis. Quisque nisl diam, cursus sit amet tristique vitae, hendrerit non enim. Vivamus orci orci, laoreet ut justo eu, rutrum aliquet velit. Curabitur ac mattis libero. Etiam ac dolor metus. Curabitur nec est quis libero placerat sodales. Quisque consectetur ante metus, in suscipit urna vehicula id. Integer nec laoreet nulla.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mx-auto pl-2 pr-2">
          <MDBCol lg="4" className="mx-auto">
            <Animation reveal type="zoomIn" duration="500ms">
              <MDBIcon className="cyan-text" icon="space-shuttle" size="3x" />
            </Animation>
            <h5 className="font-weight-bold my-4">Adventure</h5>
            <p className="black-text mb-lg-0 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nulla at velit varius finibus. Pellentesque porttitor faucibus felis, quis aliquet odio mattis vitae. Donec at convallis nisi. Vestibulum nec sagittis quam. Donec at suscipit odio. Duis pulvinar placerat dolor. Ut eget gravida dolor. Duis malesuada bibendum nunc ut viverra. Vivamus pellentesque risus sit amet sem convallis, et pulvinar lectus venenatis. Quisque nisl diam, cursus sit amet tristique vitae, hendrerit non enim. Vivamus orci orci, laoreet ut justo eu, rutrum aliquet velit. Curabitur ac mattis libero. Etiam ac dolor metus. Curabitur nec est quis libero placerat sodales. Quisque consectetur ante metus, in suscipit urna vehicula id. Integer nec laoreet nulla.
            </p>
          </MDBCol>
          <MDBCol lg="4" className="mx-auto">
            <Animation reveal type="zoomIn" duration="500ms">
              <MDBIcon className="cyan-text" icon="hat-wizard" size="3x" />
            </Animation>
            <h5 className="font-weight-bold my-4">Experience</h5>
            <p className="black-text mb-lg-0 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nulla at velit varius finibus. Pellentesque porttitor faucibus felis, quis aliquet odio mattis vitae. Donec at convallis nisi. Vestibulum nec sagittis quam. Donec at suscipit odio. Duis pulvinar placerat dolor. Ut eget gravida dolor. Duis malesuada bibendum nunc ut viverra. Vivamus pellentesque risus sit amet sem convallis, et pulvinar lectus venenatis. Quisque nisl diam, cursus sit amet tristique vitae, hendrerit non enim. Vivamus orci orci, laoreet ut justo eu, rutrum aliquet velit. Curabitur ac mattis libero. Etiam ac dolor metus. Curabitur nec est quis libero placerat sodales. Quisque consectetur ante metus, in suscipit urna vehicula id. Integer nec laoreet nulla.
            </p>
          </MDBCol>
          <MDBCol lg="4" className="mx-auto">
            <Animation reveal type="zoomIn" duration="500ms">
              <MDBIcon className="cyan-text" icon="laugh-beam" size="3x" />
            </Animation>
            <h5 className="font-weight-bold my-4">Happiness</h5>
            <p className="black-text mb-lg-0 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nulla at velit varius finibus. Pellentesque porttitor faucibus felis, quis aliquet odio mattis vitae. Donec at convallis nisi. Vestibulum nec sagittis quam. Donec at suscipit odio. Duis pulvinar placerat dolor. Ut eget gravida dolor. Duis malesuada bibendum nunc ut viverra. Vivamus pellentesque risus sit amet sem convallis, et pulvinar lectus venenatis. Quisque nisl diam, cursus sit amet tristique vitae, hendrerit non enim. Vivamus orci orci, laoreet ut justo eu, rutrum aliquet velit. Curabitur ac mattis libero. Etiam ac dolor metus. Curabitur nec est quis libero placerat sodales. Quisque consectetur ante metus, in suscipit urna vehicula id. Integer nec laoreet nulla.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

export default FeaturesPage

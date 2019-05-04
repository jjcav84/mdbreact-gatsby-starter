import React from 'react'
import {
  MDBRow,
  MDBCol,
  MDBCard,
  Animation,
  MDBIcon,
  MDBContainer
} from 'mdbreact'
import card1 from '../images/IMG_5317.jpg'
import card2 from '../images/IMG_5715.jpg'

const SkillsPage = () => {
  return (
    <section id="skills" className="text-center mx-auto my-3">
      <h2 className="h2-responsive font-weight-bold my-3">Services</h2>
      <Animation reveal type="zoomIn" duration="500ms">
        <MDBIcon className="cyan-text mb-5" icon="laptop-code" size="3x" />
      </Animation>
      <MDBContainer>
        <MDBRow>
          <MDBCol className="mb-4">
            <Animation reveal type="slideInLeft" duration="350ms">
              <MDBCard
                className="card-image img-fluid"
                style={{ backgroundImage: 'url(' + card1 + ')' }}
              >
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                  <div>
                    <h3 className="py-3 font-weight-bold">
                      <strong>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </strong>
                    </h3>
                    <h5 className="pb-3">
                      <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nulla at velit varius finibus. Pellentesque porttitor faucibus felis, quis aliquet odio mattis vitae. Donec at convallis nisi. Vestibulum nec sagittis quam. Donec at suscipit odio. Duis pulvinar placerat dolor. Ut eget gravida dolor. Duis malesuada bibendum nunc ut viverra. Vivamus pellentesque risus sit amet sem convallis, et pulvinar lectus venenatis. Quisque nisl diam, cursus sit amet tristique vitae, hendrerit non enim. Vivamus orci orci, laoreet ut justo eu, rutrum aliquet velit. Curabitur ac mattis libero. Etiam ac dolor metus. Curabitur nec est quis libero placerat sodales. Quisque consectetur ante metus, in suscipit urna vehicula id. Integer nec laoreet nulla.
                        </p>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nulla at velit varius finibus. Pellentesque porttitor faucibus felis, quis aliquet odio mattis vitae. Donec at convallis nisi. Vestibulum nec sagittis quam. Donec at suscipit odio. Duis pulvinar placerat dolor. Ut eget gravida dolor. Duis malesuada bibendum nunc ut viverra. Vivamus pellentesque risus sit amet sem convallis, et pulvinar lectus venenatis. Quisque nisl diam, cursus sit amet tristique vitae, hendrerit non enim. Vivamus orci orci, laoreet ut justo eu, rutrum aliquet velit. Curabitur ac mattis libero. Etiam ac dolor metus. Curabitur nec est quis libero placerat sodales. Quisque consectetur ante metus, in suscipit urna vehicula id. Integer nec laoreet nulla.
                        </p>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nulla at velit varius finibus. Pellentesque porttitor faucibus felis, quis aliquet odio mattis vitae. Donec at convallis nisi. Vestibulum nec sagittis quam. Donec at suscipit odio. Duis pulvinar placerat dolor. Ut eget gravida dolor. Duis malesuada bibendum nunc ut viverra. Vivamus pellentesque risus sit amet sem convallis, et pulvinar lectus venenatis. Quisque nisl diam, cursus sit amet tristique vitae, hendrerit non enim. Vivamus orci orci, laoreet ut justo eu, rutrum aliquet velit. Curabitur ac mattis libero. Etiam ac dolor metus. Curabitur nec est quis libero placerat sodales. Quisque consectetur ante metus, in suscipit urna vehicula id. Integer nec laoreet nulla.
                        </p>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nulla at velit varius finibus. Pellentesque porttitor faucibus felis, quis aliquet odio mattis vitae. Donec at convallis nisi. Vestibulum nec sagittis quam. Donec at suscipit odio. Duis pulvinar placerat dolor. Ut eget gravida dolor. Duis malesuada bibendum nunc ut viverra. Vivamus pellentesque risus sit amet sem convallis, et pulvinar lectus venenatis. Quisque nisl diam, cursus sit amet tristique vitae, hendrerit non enim. Vivamus orci orci, laoreet ut justo eu, rutrum aliquet velit. Curabitur ac mattis libero. Etiam ac dolor metus. Curabitur nec est quis libero placerat sodales. Quisque consectetur ante metus, in suscipit urna vehicula id. Integer nec laoreet nulla.
                        </p>
                    </h5>
                  </div>
                </div>
              </MDBCard>
            </Animation>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol className="mb-4">
            <Animation reveal type="slideInRight" duration="350ms">
              <MDBCard
                className="card-image img-fluid"
                style={{ backgroundImage: 'url(' + card2 + ')' }}
              >
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                  <div>
                    <div>
                      <h3 className="py-3 font-weight-bold">
                        <strong>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </strong>
                      </h3>
                      <h5 className="pb-3">
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nulla at velit varius finibus. Pellentesque porttitor faucibus felis, quis aliquet odio mattis vitae. Donec at convallis nisi. Vestibulum nec sagittis quam. Donec at suscipit odio. Duis pulvinar placerat dolor. Ut eget gravida dolor. Duis malesuada bibendum nunc ut viverra. Vivamus pellentesque risus sit amet sem convallis, et pulvinar lectus venenatis. Quisque nisl diam, cursus sit amet tristique vitae, hendrerit non enim. Vivamus orci orci, laoreet ut justo eu, rutrum aliquet velit. Curabitur ac mattis libero. Etiam ac dolor metus. Curabitur nec est quis libero placerat sodales. Quisque consectetur ante metus, in suscipit urna vehicula id. Integer nec laoreet nulla.
                        </p>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nulla at velit varius finibus. Pellentesque porttitor faucibus felis, quis aliquet odio mattis vitae. Donec at convallis nisi. Vestibulum nec sagittis quam. Donec at suscipit odio. Duis pulvinar placerat dolor. Ut eget gravida dolor. Duis malesuada bibendum nunc ut viverra. Vivamus pellentesque risus sit amet sem convallis, et pulvinar lectus venenatis. Quisque nisl diam, cursus sit amet tristique vitae, hendrerit non enim. Vivamus orci orci, laoreet ut justo eu, rutrum aliquet velit. Curabitur ac mattis libero. Etiam ac dolor metus. Curabitur nec est quis libero placerat sodales. Quisque consectetur ante metus, in suscipit urna vehicula id. Integer nec laoreet nulla.
                        </p>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nulla at velit varius finibus. Pellentesque porttitor faucibus felis, quis aliquet odio mattis vitae. Donec at convallis nisi. Vestibulum nec sagittis quam. Donec at suscipit odio. Duis pulvinar placerat dolor. Ut eget gravida dolor. Duis malesuada bibendum nunc ut viverra. Vivamus pellentesque risus sit amet sem convallis, et pulvinar lectus venenatis. Quisque nisl diam, cursus sit amet tristique vitae, hendrerit non enim. Vivamus orci orci, laoreet ut justo eu, rutrum aliquet velit. Curabitur ac mattis libero. Etiam ac dolor metus. Curabitur nec est quis libero placerat sodales. Quisque consectetur ante metus, in suscipit urna vehicula id. Integer nec laoreet nulla.
                        </p>
                      </h5>
                    </div>
                  </div>
                </div>
              </MDBCard>
            </Animation>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

export default SkillsPage

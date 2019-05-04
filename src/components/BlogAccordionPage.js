import React, { Component } from 'react'
import { Container, Collapse, Card, CardBody, MDBBtn, MDBCollapse } from 'mdbreact'

class BlogAccordionPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      collapseID: ''
    }
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }))

  render () {
    const { collapseID } = this.state
    return (
      <Container id="blog" className="md-accordion mt-3 mx-auto">
        <MDBBtn color="primary" onClick={this.toggleCollapse('basicCollapse')} style={{ marginBottom: '1rem' }}>
          Article Title
        </MDBBtn>
        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eros nibh, volutpat a condimentum at, rutrum at neque. Aliquam cursus porta ligula, ac dictum lectus varius a. Morbi hendrerit est nec tortor vulputate, at cursus nisl tincidunt. Vivamus venenatis est sit amet lacus bibendum, finibus elementum velit tempor.
            Donec tempus ante dapibus orci dictum maximus. Aliquam vitae lacinia dolor, vel fringilla odio. Ut volutpat massa vitae ipsum semper ullamcorper. Praesent ut metus aliquam est blandit mattis non eget nisi. Etiam tempus suscipit porttitor. Cras id varius sem. Curabitur tristique posuere posuere. Maecenas a felis a risus
            ornare porttitor a sed sapien. Nulla aliquet, orci at posuere vulputate, orci augue porta justo, vitae volutpat leo libero eget turpis. In et metus id nisi porttitor facilisis. Ut a rhoncus odio, sed vestibulum sapien. Donec viverra lorem efficitur, dignissim neque ut, facilisis augue.
          </p>
          <p>
            Maecenas sit amet turpis eu sapien fermentum tincidunt. Aenean est odio, auctor ac enim in, facilisis gravida lacus. Aenean luctus nulla elit, a laoreet nisl mattis in. Proin sed congue nibh. Duis sollicitudin facilisis tincidunt. Vestibulum nec tincidunt est. Donec leo sem, iaculis quis ornare sed, suscipit at purus. Nulla eget ultrices elit. Donec ante ligula, condimentum eget tortor non, facilisis ultrices lorem.
          </p>
          <p>
            Aenean non aliquam neque. Curabitur dignissim odio libero, a pulvinar orci pellentesque vitae. Duis eleifend molestie ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras euismod vulputate pellentesque. Vestibulum ut sollicitudin lorem. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Sed non justo ut metus aliquam dignissim in nec eros. Fusce maximus justo nec arcu bibendum vestibulum. Aenean vitae libero odio.
          </p>
          <p>
            Praesent in tincidunt tortor. Integer vel maximus elit. Cras sit amet lacus nibh. Suspendisse dignissim fermentum tellus ac pharetra.
            Aliquam ac metus eu ipsum finibus condimentum. Vestibulum ultrices justo sed ipsum pellentesque tristique. Vestibulum dictum eu ante sed euismod. Etiam vitae pellentesque libero, vel tempus mi. Integer porttitor sit amet mi et cursus.
          </p>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut maximus orci. In in lacinia sapien. Sed dui nisi, venenatis a turpis a, venenatis accumsan elit.
            Vivamus a varius orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus augue a nulla vehicula posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in nulla rutrum, volutpat velit nec, sagittis risus. Ut tempor ultricies felis at fringilla. Vivamus bibendum iaculis neque.
          </p>
          <p>
            Nam sollicitudin ex vel rhoncus malesuada. Sed tincidunt luctus purus. Phasellus rutrum rhoncus eleifend. Maecenas pretium ultrices rutrum. Sed tempor condimentum lorem sit amet dictum. Nullam facilisis nec sapien sit amet vehicula. Nunc congue, felis in consectetur sodales, lorem mauris euismod lorem, quis condimentum lectus odio at mauris. Quisque eget nisi sit amet ex feugiat faucibus ac nec urna. Donec fermentum mauris ex, et porta massa consectetur vel.
          </p>
          <p>
            Proin eget dolor tincidunt, fringilla lorem et, pretium neque. Vestibulum ultrices tristique sagittis. Donec viverra magna sed enim finibus, et consectetur leo imperdiet. Suspendisse gravida erat purus. Morbi consequat malesuada mauris, ut tristique mi consectetur a. Fusce sed augue et quam faucibus facilisis vitae a tortor. Phasellus laoreet quis libero quis iaculis. Maecenas laoreet non justo ut venenatis.
          </p>
          <p>
            Suspendisse condimentum varius libero, varius aliquet quam posuere sit amet. Phasellus vitae purus in mauris commodo porttitor. Praesent id nibh dapibus, laoreet turpis nec, consectetur sapien. Aliquam quis nibh velit. Vivamus mollis, ante sit amet iaculis blandit, risus justo tempor quam, id tincidunt ante quam ac nunc. Ut congue, urna sed mattis consequat, dolor nibh eleifend ligula, in eleifend ex augue convallis nulla. Nullam vel erat ullamcorper, facilisis mauris eget, interdum turpis. Integer quis justo consectetur diam euismod volutpat. Nam et nibh quis libero iaculis sollicitudin. In et arcu finibus, consectetur odio vel, vestibulum urna. Suspendisse eu odio dolor. Mauris in purus eu ante finibus laoreet. Nunc pharetra metus ut odio molestie bibendum.
          </p>
          <p>
            Praesent fringilla pulvinar risus, ut mattis velit feugiat id. Nam mollis libero elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam semper massa nec purus bibendum fringilla. Proin sagittis, sem volutpat fermentum sollicitudin, magna metus commodo enim, sed semper nibh nunc at urna. Proin non massa vitae metus aliquam pellentesque quis scelerisque nisi. Nullam quis urna sollicitudin, mollis purus quis, fermentum erat. Curabitur eu scelerisque nisl. Sed lobortis leo at neque aliquam volutpat. Nunc vitae congue arcu.
          </p>
          <p>
            Nullam dictum, leo eleifend gravida dapibus, nulla orci eleifend
            nisl, eu faucibus purus augue ac neque. Praesent vel sodales ante, vel finibus risus. Integer rhoncus tempus metus sed malesuada. In iaculis elit a urna accumsan pharetra. Nam sed venenatis lacus, at aliquam risus. Suspendisse fermentum nibh vitae rhoncus dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend libero quis ex posuere, id aliquam elit bibendum. Etiam arcu ex, dapibus eget nisl id, gravida bibendum ex. Etiam vitae dignissim nibh. Quisque nec semper justo. Aliquam rhoncus magna in libero interdum mollis.
          </p>
          <p>
            Suspendisse potenti. Vestibulum gravida nibh quam, quis pretium urna viverra ut. Nunc lectus nulla, accumsan ut nisl non, interdum fermentum enim. Quisque sollicitudin odio eu viverra semper. Donec at elementum eros. Proin porta arcu eget tellus efficitur, vel venenatis odio ullamcorper. Etiam eu elit nisl. Nunc dictum orci vel lobortis malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames acturpis egestas. Mauris vitae lobortis mi. Pellentesque ut nulla sit amet elit fringilla varius. Sed ac velit quam. Donec mollis turpis sed nisl pellentesque elementum. Quisque a metus quam. Nam sed laoreet nisi. Morbi fermentum vel magna a bibendum.
          </p>
          <p>
            Nullam tempor sapien vel risus suscipit, at porta quam commodo. Morbi tempus commodo risus, id laoreet nibh. Fusce pellentesque, diam ut pharetra consectetur, leo arcu vestibulum dui, et mollis erat nulla eget purus. Sed commodo, risus non gravida porttitor, ipsum nisl semper sapien, eget pellentesque sem dolor dignissim lectus. Praesent nec nibh urna. Phasellus vel tincidunt est. Fusce faucibus lacus quis ipsum gravida, quis rutrum erat finibus. Orci.
          </p>
        </MDBCollapse>
      </Container>
    )
  }
}
export default BlogAccordionPage

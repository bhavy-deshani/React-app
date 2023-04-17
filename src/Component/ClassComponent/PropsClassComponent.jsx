import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBRipple } from 'mdb-react-ui-kit'
import React, { Component } from 'react'

export default class PropsClassComponent extends Component {
    render() {
        return (
            <div>
                <>
                <div className="col-md-4 col-10 mx-auto">
                    <MDBCard className='h-100'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay h-100'>
                            <MDBCardImage className='card-img-top h-100' src={this.props.imgSrc} fluid alt={this.props.imgSrc} />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle>{this.props.prodTitle}</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn href='#'>Button</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </div>
                </>
            </div>
        )
    }
}

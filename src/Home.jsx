import React, {  } from 'react';
import Navbar from './CommonComponent/Navbar';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {  MDBCarousel,
  MDBCarouselItem,  } from 'mdb-react-ui-kit';
export default function Home() {

  return (
    <>
      <Navbar />
      <h1>This is a Home
      </h1>
      {/* <MDBRipple
      className='bg-image hover-overlay shadow-1-strong rounded'
      rippleTag='div'
      rippleColor='light'
    >
      <img src='https://mdbootstrap.com/img/new/fluid/city/113.webp' className='w-100' />
      <a href='#!'>
        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
      </a>
    </MDBRipple> */}
    {/* <div>
      <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg'
      >
        
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(36).jpg'
      >
        
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg'
      >
     
      </MDBCarouselItem>
    </MDBCarousel>
    </div> */}
    </>
  );
}
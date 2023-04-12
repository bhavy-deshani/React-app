import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './CommonComponent/Navbar';
import { MDBBtn } from 'mdb-react-ui-kit';

export default function Example() {

  return (
    <>
      <Navbar />
      <div className="container">
        <div className='row '>
          <div className='col-6'>
            <Link to="classcomponent"> <MDBBtn color='dark'>Class Component</MDBBtn></Link>
          </div>
          <div className='col-6'>
            <Link to="classcomponent"> <MDBBtn color='dark'>Functional Component</MDBBtn></Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
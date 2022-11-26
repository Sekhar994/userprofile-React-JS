import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

export default function Updateform() {
  return (
    <MDBContainer fluid>

      <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px'}}></div>

      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 text-center'>

          <h2 className="fw-bold mb-5">update profile </h2>

          <MDBInput wrapperClass='mb-4' label='Full Name' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Phone' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Aadhar number' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Address' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Highest Qualification' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='College' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Skills' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Year of Experience' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Current Employer' id='form1' type='text'/>

          <MDBBtn className='w-100 mb-4' size='md'>submit</MDBBtn>

        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}


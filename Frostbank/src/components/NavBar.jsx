import React from 'react'


const NavBar = () => {
  
  return (
    <>
    <div className='pt-md-4' style={{paddingLeft:'65px', paddingRight:'70px'}}>
      <div className='d-md-flex d-none align-items-center justify-content-between'>
      <div className='d-flex align-items-center gap-4'>
      <img className='' src="/images/logo.png" width={65} alt="" />
      <div className='d-flex gap-2'>
        <h6 className='fw-bold fs-5 text-primary-emphasis'>FDIC</h6>
        <p style={{fontSize:'11px', fontStyle:'italic', paddingTop:'3px' }}><small>FDIC-Insured-Backed by the full faith and credit of the U.S.Government </small></p>
      </div>
      </div>
      <h5 className='text-primary fw-bold'>Contact us</h5>
    </div>
    </div>
    </>
    
  )
}

export default NavBar
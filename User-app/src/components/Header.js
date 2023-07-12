import React from 'react'
import Lo from './../images/im-14.jpg'
function Header() {
  return (
    <div>
      <div className='row p-2'>
        <div className='col-4 mt-3'>
        <img className='ms-5' src={Lo} width={'130px'} height={'100px'} />
        </div>
        <div className='col-4 mt-2 d-flex align-items-center'>
          <div className='me-3'>
          <i class="fa fa-map-marker fa-3x text-danger"></i>
          </div>
          <div className=''>
          <h4 className='fh text-danger'>Address</h4>
          <p>Sivakasi To Kazhugumalai Main Road,<br/>Vembukottai Sivakasi,Tamilnadu - 626 131</p>
        </div>
          </div>
          
        <div className='col-4 mt-2'>
        <h4 className='fh text-danger'>Enquiry</h4>
        <p><i class="fa fa-whatsapp p-2"></i>+8903248347<br /><i class="fa fa-mobile p-2"></i>+9750655219</p>
        </div>
      </div>
    </div>
  )
}

export default Header

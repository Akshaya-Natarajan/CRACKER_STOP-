import React from 'react'
import Bg from './../images/im-3.jpg'
import li from './../images/im-4.jpg'
import Lo from './../images/im-14.jpg'
function Contact() {
  return (
    <>
    <>
      <div className='container-fluid p-0'>
        <img className='img-fluid' src={Bg} width={'100%'} height={'400px'} />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
          <img className='lo' src={Lo} width={'70%'} height={'350px'} />
          </div>
          <div className='col-6'>
            <div className='position-relative '>
              <img src={li} height={'160px'} width={'50%'} />
              <div className='underline-style '>
                <h1 className='ci text-center'>Contact Us</h1>
                <h3 className='ad'>Address</h3>
                <p>Sivakasi To Kazhugumalai Main Road,<br />Vembukottai Sivakasi,<br />Tamilnadu - 626 131</p>
                <hr></hr>
                <h3 className='mn'>Mobile Number</h3>
                <p><i class="fa fa-whatsapp p-2"></i>+89032 48347<br /><i class="fa fa-mobile p-2"></i>+97506 55219</p>
                <hr></hr>
                <h3 className='mn'>Email</h3>
                <p><i class="fa fa-envelope p-2"></i>karthikraja22@gmail.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
</>
     
  )
}

export default Contact



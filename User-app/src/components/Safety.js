import React from 'react'
import Bg from './../images/im1.jpg'
import Im from './../images/im2.jpg'
import Footer from './Footer'
function Safety() {
  return (
    <>
    <div className='container-fluid p-0'>
      <div className='position-relative'>
        <img src={Bg} width={'100%'} height={'400px'} />
        <div className='absolute'>
          Safety tips
        </div>
      </div>
      <div className='container'>
        <h2 className='inst'>Cracker Stop</h2>
        <p className='mt-3'>There are certain Do's & Don’ts to follow while purchasing, bursting and storing crackers. Thus, it is very important to follow the precautions while bursting crackers. A little negligence, ignorance and carelessness can cause a fatal injury.</p>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-9'>
            <h3 className='head'>Do's</h3>
            <hr></hr>
            <div className='d-flex m-5'>
              <i class=" check fa fa-check fa-2x pe-3" aria-hidden="true"></i>
              <div>
                <h4 className='sub'>Instructions</h4>
                <p className='my-2'>Display fireworks as per the instructions mentioned on the pack.</p>
              </div>
            </div>
            <div className=' d-flex m-5'>
              <i class=" check fa fa-check fa-2x pe-3" aria-hidden="true"></i>
              <div>
                <h4 className='sub'>Outdoor</h4>
                <p className='my-2'>Use fireworks only outdoor</p>
              </div>
            </div>
            <div className=' d-flex m-5'>
              <i class=" check fa fa-check fa-2x pe-3" aria-hidden="true"></i>
              <div>
                <h4 className='sub'>Branded Fireworks</h4>
                <p className='my-2'>Buy fireworks from authorized / reputed manufacturers only.</p>
              </div>
            </div>
            <div className='d-flex m-5'>
              <i class=" check fa fa-check fa-2x pe-3" aria-hidden="true"></i>
              <div>
                <h4 className='sub'>Distance</h4>
                <p className='my-2'>Light only one firework at a time, by one person. Others should watch from a safe distance.</p>
              </div>
            </div>
            <div className='d-flex m-5'>
              <i class=" check fa fa-check fa-2x pe-3" aria-hidden="true"></i>
              <div>
                <h4 className='sub'>Water</h4>
                <p className='my-2'>Keep two buckets of water handy. In the event of fire or any mishap.</p>
              </div>
            </div>
            <h3 className='head'>Don'ts</h3>
            <hr></hr>
            <div className='d-flex m-5'>
              <i class="time fa fa-times fa-2x pe-3" aria-hidden="true"></i>
              <div>
                <h4 className='sub'>Don't Make Tricks</h4>
                <p className='my-2'>Never make your own fireworks.</p>
              </div>
            </div>
            <div className='d-flex m-5'>
              <i class="time fa fa-times fa-2x pe-3" aria-hidden="true"></i>
              <div>
                <h4 className='sub'>Don't Relight</h4>
                <p className='my-2'>Never try to re-light or pick up fireworks that have not ignited fully.</p>
              </div>
            </div>
            <div className='d-flex m-5'>
              <i class="time fa fa-times fa-2x pe-3" aria-hidden="true"></i>
              <div>
                <h4 className='sub'>Don't Carry It</h4>
                <p className='my-2'>Never carry fireworks in your pockets</p>
              </div>
            </div>
            <div className='d-flex m-5'>
              <i class="time fa fa-times fa-2x pe-3" aria-hidden="true"></i>
              <div>
                <h4 className='sub'>Don't Touch It</h4>
                <p className='my-2'>After fireworks display never pick up fireworks that may be left over, they still may be active.</p>
              </div>
            </div>
            <div className='d-flex m-5'>
              <i class="time fa fa-times fa-2x pe-3" aria-hidden="true"></i>
              <div>
                <h4 className='sub'>Don't Wear Loose Clothes</h4>
                <p className='my-2'>Do not wear loose clothing while using fireworks.</p>
              </div>
            </div>
          </div>
          <div className='col-3 '>
            <div className='sticky-img'>
              <img className='img' src={Im} width={'100%'} height={'420px'} />
            </div>

          </div>
        </div>


      </div>


    </div>
    <Footer/>
    </>
  )
}

export default Safety

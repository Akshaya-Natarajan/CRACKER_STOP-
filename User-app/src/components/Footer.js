import React from 'react'
import Bg from './../images/im-5.jpg'
import Ft from './../images/im-6.jpg'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className='container-fluid mt-5 p-0'>
            <div className='position-relative '>
                <img src={Bg} width={'100%'} height={'700px'} />
                <div className='position-absolute bg-dark top-0' style={{ width: '100%', height: '700px', opacity: '0.5' }}>

                </div>

                <div className='position-absolute' style={{ top: "10%" }}>
                    <div className='m-auto w-75'>
                        <div className='row bg-danger align-items-center'>
                            <div className='col-6 p-3 text-white text-center'>
                                <h4 className='fh'>Cracker Stop</h4>
                                <p>We are one of the leading crackers manufacturers in Sivakasi. We do both wholesale and retail business. Our main motive is to give the best products to our customers. We also focus in manufacturing highly safety crackers.</p>
                            </div>
                            <div className='col-6 p-3 text- text-center'>
                                <img src={Ft} width={'50%'} height={'250px'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='position-absolute' style={{ top: "60%", left: "-2%" }}>
                    <div className='m-auto w-75'>
                        <div className='row'>
                            <div className='col-4 text-light'>
                                <h3 className='fh pb-2'>Our products</h3>
                                <Link to={'/PriceList'}>
                                    <button className='m-1 btn btn-outline-danger border border-1 border-white text-white'>Ground chakkars</button>
                                    <button className='m-1 btn btn-outline-danger border border-1 border-white text-white'>Flower Pots</button>
                                    <button className='m-1 btn btn-outline-danger border border-1 border-white text-white'>One sound Crackers</button>
                                    <button className='m-1 btn btn-outline-danger border border-1 border-white text-white'>Twinkling Stars</button>
                                    <button className='m-1 btn btn-outline-danger border border-1 border-white text-white'>Sparklers</button>
                                    <button className='m-1 btn btn-outline-danger border border-1 border-white text-white'>Rockets</button>
                                    <button className='m-1 btn btn-outline-danger border border-1 border-white text-white'>Sky Shots</button></Link>
                            </div>
                            <div className='col-5 text-light'>
                                <h3 className='fh pb-2'>Address</h3>
                                <p className='align-items-center'><i class="fa fa-map-marker text-light m-2"></i>Sivakasi To Kazhugumalai Main Road,<br /><span className='ps-4'>Vembukottai Sivakasi,</span>Tamilnadu - 626 131</p>
                                <p><i class="fa fa-whatsapp text-light m-2"></i>+8903248347<br /><i class="fa fa-mobile m-2"></i>+9750655219</p>
                                <p><i class="fa fa-envelope text-light m-2"></i>karthikraja22@gmail.com</p>
                            </div>
                            <div className='col-3'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.1680025389674!2d77.75747867420571!3d9.31837778439379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06b7fbc919232b%3A0xeddef47b10d21322!2sGowtham%20crackers!5e0!3m2!1sen!2sin!4v1684907323975!5m2!1sen!2sin" width="350" height="270" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
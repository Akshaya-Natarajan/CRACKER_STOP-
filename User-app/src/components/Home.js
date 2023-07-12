import React from 'react'
import Footer from './Footer'
import Bg from './../images/im-11.jpg'
import Si from './../images/im-12.jpg'
import Bk from './../images/im-13.jpg'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <div className='container-fluid p-0'>
        <img src={Bg} width={'100%'} height={'500px'} />
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <img src={Si} width={'100%'} height={'450px'} />
            </div>
            <div className='col-6 mt-5'>
              <h5 className='si'>Welcome</h5>
              <h3 className='si'>To Cracker Stop</h3>
              <p className='mt-4'>We are the one of the leading supplier of crackers & fancy fireworks items. Firecrackers have always been an integral part of indian culture and tradition. Be it a festival, a wedding, reunion or any other special occasion, it is in our hearts to celebrate it in the glory of lights.</p>
              <p>Each and every moment in life has to be celebrated and we make your celebrations still more memorable with our Premium Garlands, Mind Blowing Chakkars, Flower Pots and Sky Filling Aerial Shots.</p>
              <Link to={'/Aboutus'}>
                <button className='btn btn-danger mt-3'>Explore Us </button>
              </Link>
            </div>
          </div>
        </div>
        <div className='container-fluid position-relative'>
          <img src={Bk} width={'100%'} height={'450px'} />
          <div className='container position-absolute top-0 '>
            <div className='row'>
              <div className='col mt-5 ps-5 '>
                <div class="card cs" style={{ width: "18rem" }}>
                  <div class="card-body ">
                    <h5 class="card-title si">Quality</h5>
                    <p class="card-text">Quality & innovation are the key behind our success.</p>
                  </div>
                </div>
              </div>
              <div className='col'></div>
              <div className='col mt-5 ps-5 '>
                <div class="card cs" style={{ width: "18rem" }}>
                  <div class="card-body">
                    <h5 class="card-title si">Multiple Brands</h5>
                    <p class="card-text">Crackers we offer are safe and made from fine quality.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col mt-5 ps-5 '>

                <div class="card cs" style={{ width: "18rem" }}>
                  <div class="card-body">
                    <h5 class="card-title si">Safe to Use</h5>
                    <p class="card-text">Vast variety of multiple famous brands are available all across.</p>
                  </div>
                </div>
              </div>
              <div className='col'></div>
              <div className='col mt-5 ps-5'>

                <div class="card cs" style={{ width: "18rem" }}>
                  <div class="card-body">
                    <h5 class="card-title si">Genuine Price</h5>
                    <p class="card-text">Quality products at economic price is the main motto for us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container mt-5'>
          <h3 className='si text-center'>Quality Products</h3>
          <p className='mt-4'>Our motto is to make every festival celebration bright and safe. This, we bring out with our wide range of firecrackers. With over 200 varieties of crackers developed and marketed every year, we are among the most sought brands in the Sivakasi region and around the country. Our products are known for their safety and we take great efforts to ensure that all our orders are delivered in a standard time frame with an economical pricing.</p>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
<div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title si">Single Sound Crackers</h5>
    <h6 class="card-subtitle mb-2 text-muted">Kuruvi,Lakshmi,Ganesh,..</h6>
        <Link to={'/PriceList'}>
    <button className='btn btn-outline-danger'>Shop Now</button></Link>
  </div>
</div>
            </div>
            <div className='col-4'>
            <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title si">Chakkars</h5>
    <h6 class="card-subtitle mb-2 text-muted">Chakkar Small,Big,Special,..</h6>
    <Link to={'/PriceList'}>
    <button className='btn btn-outline-danger'>Shop Now</button></Link>
  </div>
</div>
            </div>
            <div className='col-4'>
            <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title si">Flower Pots</h5>
    <h6 class="card-subtitle mb-2 text-muted">Flower Pots Small,Big,Special,..</h6>
        <Link to={'/PriceList'}>
    <button className='btn btn-outline-danger'>Shop Now</button></Link>
  </div>
</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-4 mt-5'>
<div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title si">Garlands</h5>
    <h6 class="card-subtitle mb-2 text-muted">Deluxe,Giants,Garlands,..</h6>
        <Link to={'/PriceList'}>
    <button className='btn btn-outline-danger'>Shop Now</button></Link>
  </div>
</div>
            </div>
            <div className='col-4 mt-5'>
            <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title si">Sparklers</h5>
    <h6 class="card-subtitle mb-2 text-muted">Red,Green,Electric,..</h6>
        <Link to={'/PriceList'}>
    <button className='btn btn-outline-danger'>Shop Now</button></Link>
  </div>
</div>
            </div>
            <div className='col-4 mt-5'>
            <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title si">Rockets</h5>
    <h6 class="card-subtitle mb-2 text-muted">Baby Rockets,Lunik,Twosound,..</h6>
        <Link to={'/PriceList'}>
    <button className='btn btn-outline-danger'>Shop Now</button></Link>
  </div>
</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-4 mt-5'>
<div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title si">Fancy Fountains</h5>
    <h6 class="card-subtitle mb-2 text-muted">Funzone,Drone,hotoflash,..</h6>
    <Link to={'/PriceList'}>
    <button className='btn btn-outline-danger'>Shop Now</button></Link>
  </div>
</div>
            </div>
            <div className='col-4 mt-5'>
            <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title si">Color Matches</h5>
    <h6 class="card-subtitle mb-2 text-muted">Caps,Terpants,Two in One,..</h6>
        <Link to={'/PriceList'}>
    <button className='btn btn-outline-danger'>Shop Now</button></Link>
  </div>
</div>
            </div>
            <div className='col-4 mt-5'>
            <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title si">GiftBoxes</h5>
    <h6 class="card-subtitle mb-2 text-muted">Special,Deluxe,Grand,..</h6>
        <Link to={'/PriceList'}>
    <button className='btn btn-outline-danger'>Shop Now</button></Link>
  </div>
</div>
            </div>
          </div>
        </div>
        </div>
        
      
      <Footer />
    </>

  )
}

export default Home

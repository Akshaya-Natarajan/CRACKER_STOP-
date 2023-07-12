import React from 'react'
import Footer from './Footer'
import Bg from './../images/im-8.jpg'
import Gb from './../images/im-7.jpg'
import Ex from './../images/im-9.jpg'
import Ce from './../images/im-10.jpg'
import { Link } from 'react-router-dom'
function About() {
  return (
    <div className='container-fluid p-0'>
      <img src={Bg} width={'100%'} height={'400px'} />
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <h3 className='ab'>Cracker Stop - Online Crackers</h3>
            <p className='mt-4'>Cracker Stop shop for wholesale, retail and online sales in sivakasi has a strong base in supplying, crackers, fancy, pyrotech items and gift boxes for whole tamilnadu throughout the year for all festivals and celebrations.</p>
            <p>This is an outcome of the experience and knowledge we share in the field of selling firecrackers. We are a wholesale trader of multi brand firecrackers. We have our own exclusive showroom in Sivakasi.</p>
            <p>One can buy crackers from us round the year. Buying quality crackers during all season we came up with the solution to buy crackers online.</p>
            <h3 className='ab mt-5'>Our Speciality</h3>
            <p className='mt-4'>Firecrackers, Rockets, Fountains & Cones, Roman Candles, Sparklers, Novelties & Aerials display, Twinkling Stars, Smoke & Snakes, Chakkars, Lakshmi, Kuruvi Crackers, Power ropes, and more…</p>
          </div>
          <div className='col-6'>
            <img src={Gb} width={'100%'} height={'450px'} />

          </div>
        </div>
      </div>
      <div className='position-relative'>
        <img src={Ex} width={'100%'} height={'400px'} style={{ backgroundColor: 'black' }} />
        <div className='position-absolute bg-dark top-0' style={{ width: '100%', height: '400px', opacity: '0.5' }}></div>
        <div className='abs'>
          <h1 className='ah'>We are one of the leading sellers of crackers</h1>
          <p className='mt-5 text-light'>To buy best quality crackers online with best price - Cracker Stop is a best quality Crackers Shop in Sivakasi.</p>
          <div class="text-center ">
            <Link to={'/PriceList'}>
              <button type="button" class="btn btn-outline-danger mt-4">Check Now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <h3 className='ab mt-5'>Our Vision</h3>
            <p className='mt-4'>To maintain quality of crackers in every aspect by offering safe, unique and environmental-friendly sparklers.</p>
          </div>
          <div className='col-4'>
            <img classname='mt-4' src={Ce} width={'100%'} height={'250px'} />
          </div>
          <div className='col-4'>
            <h3 className='ab mt-5'>Our Mission</h3>
            <p className='mt-4'>To be the first class wholesale & retail Company, producing safe and quality crackers with highest quality at low price enabling you to spread joy and happiness.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About

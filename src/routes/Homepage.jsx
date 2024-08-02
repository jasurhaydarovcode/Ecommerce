import React from 'react'
import Navbar from '../components/Navbar'
import imgProductHero from '../assets/home/Rocket single seater 1.svg'
import secProW1 from '../assets/home/secondProduct/Granite square side table 1.svg'
import secProW2 from '../assets/home/secondProduct/Cloud sofa three seater + ottoman_3 1.svg'

import productFirst from '../assets/home/products/Mask group.svg'
import productSecond from '../assets/home/products/Granite dining table with dining chair 1.png'
import productThree from '../assets/home/products/Mask group.png'
import productFour from '../assets/home/products/Plain console with teak mirror 1.png'

import bgStulB from '../assets/home/order/Asgaard sofa 1.png'

import blogImg1 from '../assets/home/blogpost/Group 48.svg'
import blogImg2 from '../assets/home/blogpost/Group 49.svg'
import blogImg3 from '../assets/home/blogpost/Group 50.svg'

import bgOur from '../assets/home/ourInsta/Group 43.png'

import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'


const divStyle = {
  backgroundImage: `url(${bgOur})`,
  height: '500px',
  width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Ecommers Home</title>
      </Helmet>

      <Navbar />

      <div className='container'>
        <div className='flex justify-around items-center'>
          {/* START TITLE */}
          <div className='leading-[100px]'>
            <h1 className='text-[100px] font-semibold'>Rocket single <br /> seater</h1>
            <p className='font-semibold border-b-2 w-[120px] border-b-black text-2xl pt-10'>Shop Now</p>
          </div>
          {/* END TITLE */}

          {/* START PRODUCT IMAGE */}
          <div>
            <img src={imgProductHero} alt="" />
          </div>
          {/* END PRODUCT IMAGE */}
        </div>


        {/* START SEOND PRODUCT */}
        <div className='flex justify-between'>
          {/* FIRST PRODUCT */}
          <div className='relative'>
            <img src={secProW1} alt="logo product" />
            <div className='absolute top-80'>
              <h2 className='text-4xl font-semibold'>Side Table</h2>
              <p className='border-b-2 w-32 pt-5 hover:border-none cursor-pointer transition text-2xl border-b-black font-semibold'>View More</p>
            </div>
          </div>


          {/* SECOND PRODUCT */}
          <div className='relative'>
            <img src={secProW2} alt="logo product" />
            <div className='absolute top-80'>
              <h2 className='text-4xl font-semibold'>Side Table</h2>
              <p className='border-b-2 w-32 pt-5 hover:border-none cursor-pointer transition text-2xl border-b-black font-semibold'>View More</p>
            </div>
          </div>
        </div>
        {/* END SEOND PRODUCT */}
      </div>


      {/* START PICKS */}
      <div className='bg-white'>
        <div className="container pt-10">
          <h1 className='text-center pb-5 text-4xl font-semibold'>Top Picks For You</h1>
          <p className='text-center text-gray-500'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>


          {/* START PRODUCTS */}
          <div className='flex justify-between items-center py-20'>


            {/* #1 */}
            <div>
              <div>
                <img src={productFirst} alt="title" />
              </div>
              <div className='text-center'>
                <p className='font-semibold text-xl'>Trenton modular safa_3</p>
                <p className='font-bold text-xl'>Rs. 25,000.00</p>
              </div>
            </div>
            {/* /#1 */}

            {/* #2 */}
            <div>
              <div>
                <img src={productSecond} alt="title" />
              </div>
              <div className='text-center'>
                <p className='font-semibold text-xl'>Trenton modular safa_3</p>
                <p className='font-bold text-xl'>Rs. 25,000.00</p>
              </div>
            </div>
            {/* /#2 */}

            {/* #3 */}
            <div>
              <div>
                <img src={productThree} alt="title" />
              </div>
              <div className='text-center'>
                <p className='font-semibold text-xl'>Trenton modular safa_3</p>
                <p className='font-bold text-xl'>Rs. 25,000.00</p>
              </div>
            </div>
            {/* /#3 */}

            {/* #4 */}
            <div>
              <div>
                <img src={productFour} alt="title" />
              </div>
              <div className='text-center'>
                <p className='font-semibold text-xl'>Trenton modular safa_3</p>
                <p className='font-bold text-xl'>Rs. 25,000.00</p>
              </div>
            </div>
            {/* /#4 */}
          </div>
          {/* END PRODUCTS */}


          <div className='flex justify-center pb-5'>
            <div className='text-center text-3xl w-max pb-2 border-b-2 border-b-black hover:border-none transition font-semibold'>
              View More
            </div>
          </div>


        </div>
      </div>
      {/* END PICKS */}



      {/* START ORDER */}
      <div className='bg-[#FBEBB5]'>
        <div className='container flex items-center justify-between'>
          <div>
            <img src={bgStulB} alt="image logo" />
          </div>

          <div>
            <h2 className='text-[30px] font-semibold'>New Arrivals</h2>
            <h1 className='text-[80px] font-bold'>Asgaard sofa</h1>
            <button className='py-6 px-14 mt-2 border-2 border-yellow-900 text-xl'>Order Now</button>
          </div>
        </div>
      </div>
      {/* END ORDER */}



      <div className='bg-white'>
        <div className='container'>
          <h2 className='text-center pt-10 pn-7 text-[50px] font-semibold'>Our Blogs</h2>
          <p className='text-gray-500 text-center'>Find a bright ideal to suit your taste with our great selection</p>

          {/* START CARDS */}
          <div className='flex justify-between items-center py-10'>


            {/* START CARD #1 */}
            <div>
              <img src={blogImg1} alt="" />
            </div>
            {/* END CARD #1 */}

            {/* START CARD #2 */}
            <div>
              <img src={blogImg2} alt="" />
            </div>
            {/* END CARD #2 */}



            {/* START CARD #3 */}
            <div>
              <img src={blogImg3} alt="" />
            </div>
            {/* END CARD #3 */}
          </div>
          {/* END CARDS */}
          <div className='flex justify-center pb-10'>
            <h2 className='text-4xl border-b-2 border-b-black w-max pb-2 transition hover:border-none'>View All Post</h2>
          </div>
        </div>
      </div>


      <div style={divStyle} className='brightness-110'>
        <div className='container'>
          <div className='flex justify-center'>
            <div className='pt-16'>
              <h1 className='font-bold text-[100px]'>Our Instagram</h1>
              <p className='text-center font-semibold text-[30px]'>Follow our store on instagram</p>
              <div className='flex justify-center'>
                <button className='py-4 m-10 font-semibold px-16 shadow-lg bg-white rounded-full'>Follow Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}

export default Homepage
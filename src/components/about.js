import React from 'react'
import Header from './header'
import logo from '../assets/logo.png'

export default function about() {
  return (
    <>
      <div className="Navigation">
        <Header />
      </div>
      <div className='About poppins-regular h-screen w-screen absolute top-0 flex justify-center bg-slate-300'>
        <img src={logo} alt='logo' className='absolute top-0 right-0 m-5 sm:h-20 h-14'></img>
        <div className='content mt-4 flex justify-center'>
          <div className='grid grid-cols-1'>
            <h1 className='flex-1 justify-center poppins-semibold mt-20 mx-auto sm:text-4xl'>About  Us</h1>
            {/* <div className='h-screen w-screen flex justify-center'>
              <div className='bg-white p-5 h-fit w-[90%]  shadow-sm flex justify-center'>
                <p className='poppins-semibold'>Since 2018, we’ve been Uttarakhand’s
                  first recognized incubator, driving
                  innovation and entrepreneurship. We
                  help overcome challenges, attract
                  talent and investment, and
                  strengthen the local
                  economy.</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

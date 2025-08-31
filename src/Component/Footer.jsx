import React from 'react'
import { MdElectricCar } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import android from '../assets/playstore.png'
import iphone from '../assets/appstore.png'


const Footer = () => {
  return (
    <section className='max-w-[1400px] pt-10  bg-black/90'>
    {/* parent container  */}
    <div className='grid grid-cols-2 md:px-10 px-5 mb-5'>
        {/* parent containerof left side  */}
        <div className='mr-3'>
            <div className='flex items-center gap-x-2  mt-2'>
            <h3 className='text-3xl text-green-400 pt-2'><MdElectricCar/></h3>
            <h3 className='text-2xl text-white font-bold'>EVion</h3>
            </div>
            <div className='mt-5'>
                <ul className='text-white font-semibold  md:text-sm text-[10px] flex md:flex-row flex-col gap-y-2 gap-x-8'>
                    <li className=''>CHARGING STATION</li>
                    <li>SUPPORT</li>
                    <li>PRICING</li>
                    <li>ABOUT US</li>
                    <li>CONTACT US</li>
                </ul>
            </div>
            <div className='md:mt-8 mt-5'>
            <h3 className='text-white md:text-sm text-[10px] font-semibold'>742 EVERGREEN TERRACE,<br/>SPRINGFIELD,IL 62704,USA</h3>
            </div>
        </div>
        {/* parent container of right side  */}
        <div className=' md:mt-0 md:pt-0 pt-4'>
            <div className='md:gap-x-5 gap-x-2  flex justify-end mb-5'>
            {[FaFacebookF,FaInstagram,FaLinkedinIn,FaTwitter,FaYoutube].map((Icon,index)=>{
                return(
                    <div key={index} className='cursor-pointer h-7 w-7 rounded-full text-white justify-center items-center flex bg-white/20 hover:bg-white hover:text-black active:bg-white active:text-black'>
                    <Icon className='md:text-lg text-sm'/>
                    </div>
                )
            })}
            </div>
            <div className='flex gap-x-5 justify-end '>
                <h3 className='text-white font-semibold md:text-sm text-[10px]'>PRIVACY POLICY</h3>
                <h3 className='text-white font-semibold md:text-sm text-[10px]'>TERMS & CONDITION</h3>
            </div>
            <div className='flex mb:mt-1 -mt-3 justify-end'>
                <img src={android} className='active:scale-110  cursor-pointer mb-5 transition-all duration-300 md:h-30 h-22 md:w-30 w-22 object-contain'/>
                <img src={iphone} className='active:scale-110  cursor-pointer mb-5 transition-all duration-300 md:h-30 h-22 md:w-30 w-22 object-contain '/>
            </div>
        </div>
    </div>

    <div className='h-10 bg-black flex justify-center items-center'>
        <h3 className='text-white text-md font-light'>&copy; EVion. All rights reserved</h3>
    </div>
    
    </section>
  )
}

export default Footer
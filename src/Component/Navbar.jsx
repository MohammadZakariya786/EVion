import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdElectricCar } from "react-icons/md";
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const handleMenu=()=>{
        setToggleMenu(!toggleMenu)
    }


  return (
    <section className='bg-black/60 backdrop-blur-sm left-0 right-0 fixed top-0 z-100'>
    <nav className='flex justify-between md:px-20 px-5 mx-auto w-full items-center   h-16 '>
        {/* logo */}
        <div className='text-white flex items-center gap-x-2'>
        <h2 className='md:text-3xl text-2xl pt-2'><MdElectricCar/></h2>
        <h1 className='md:text-2xl text-xl font-bold'>EVion</h1>
        </div>
        {/* page section  */}
        <div className='flex md:gap-x-20 gap-x-5 items-center'>
        <div className='hidden md:flex'>
            <ul className='flex gap-x-8 text-xl  font-medium text-white'>
                <li> <a href='/chargingstation' className=' transition-all duration-200 ease-in-out active:scale-1.1 hover:border-b-2 hover:border-white'>Charging Station</a></li>
                <li> <a href='/support' className=' transition-all duration-200 ease-in-out active:scale-1.1 hover:border-b-2 hover:border-white'>Support</a></li>
                <li> <a href='/pricing' className=' transition-all duration-200 ease-in-out active:scale-1.1 hover:border-b-2 hover:border-white'>Pricing</a></li>
                <li> <a href='/aboutus' className=' transition-all duration-200 ease-in-out active:scale-1.1 hover:border-b-2 hover:border-white'>About Us</a></li>
                <li> <a href='/contactus' className=' transition-all duration-200 ease-in-out active:scale-1.1 hover:border-b-2 hover:border-white'>Contact Us</a></li>
            </ul>
        </div>
        <button className='bg-white text-zinc-800 md:py-2 py-[5px] md:text-lg text-xs text-nowrap md:px-4 px-3 rounded-full font-medium cursor-pointer'>Download App</button>
        <button onClick={handleMenu} className='md:hidden flex text-white text-2xl'><GiHamburgerMenu/></button>
        </div>
    </nav>
    {/* hamburger menu  */}
    <div className={`md:hidden flex mt-2 ${toggleMenu?"max-h-80 opacity-100":"max-h-0 opacity-0"} transition-all duration-500 overflow-hidden ease-in-out`}>
            <ul className='flex flex-col w-full text-center gap-x-8 text-md  font-medium text-white'>
                <li className='border-y py-3 border-white/60 transition-colors active:bg-white active:text-zinc-800'>
                Charging Station
                
                </li>
                <li className='border-b py-3 border-white/60 transition-colors active:bg-white active:text-zinc-800'>
                Support
                </li>
                <li className='border-b py-3 border-white/60 transition-colors active:bg-white active:text-zinc-800'>
                Pricing
                </li>
                <li className='border-b py-3 border-white/60 transition-colors active:bg-white active:text-zinc-800'>
                About Us
                </li>
                <li className='border-b py-3 border-white/60 transition-colors active:bg-white active:text-zinc-800'>
                Contact Us
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Navbar
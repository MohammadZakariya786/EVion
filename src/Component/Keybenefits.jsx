import React, { use, useRef } from 'react'
// import backgroundImg from '../assets/benefitsBG.png'
import backgroundImg from '../assets/bgImage.webp'
import ChargerImg from '../assets/charger1.webp'
import { FaCircle } from "react-icons/fa";
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

const Keybenefits = () => {
    const containerRef=useRef();
    useGSAP(()=>{
    gsap.from(".charger-img",{
    y:150,
    // opacity: 0,
    duration: 1,
    ease: 'circ.out', 
    scrollTrigger: {
      trigger:".charger-img",
      start: "top 100%",
      end: "bottom 90%",
      scrub: 2,    
      // markers: true,
    }
  }
);

      const leftTextGroup=gsap.utils.toArray(".container-leftText");
      leftTextGroup.forEach((el)=>{
        gsap.from(el,{
        x:-500,
        opacity:0,
        duration:1,
        ease:'power2.out',
        scrollTrigger:{
          trigger:el,
          start:"top 100%",
          end:"bottom 90%",
          scrub:2,
          // markers:true,
        }
      })
      })
      const rightTextGroup=gsap.utils.toArray(".container-rightText");
      rightTextGroup.forEach((el)=>{
        gsap.from(el,{
        x:500,
        opacity:0,
        duration:1,
        ease:'power2.out',
        scrollTrigger:{
          trigger:el,
          start:"top 100%",
          end:"bottom 90%",
          scrub:2,
          // markers:true,
        }
      })
      })
      
      gsap.from(".container-heading",{
        y:50,
        opacity:0,
        duration:0.8,
        scale:0.8,
        ease:'power2.out',
        stagger:0.2,
        scrollTrigger:{
          trigger:".container-heading",
          start:"top 80%",
          end:"bottom 60%",
          toggleActions:"play none none reverse",
          // markers:true,
        }
      })
      
    },{scope:containerRef})
  return (
    <section ref={containerRef} className='relative bg-black h-[100vh] overflow-hidden'>
        <img src={backgroundImg} className='absolute inset-0 h-full w-full object-cover'/>
        <div className='bg-black/75 absolute inset-0'></div>
        <div className='w-full absolute -top-2  h-15 bg-gradient-to-b from-black to-transparent'></div>
        <div className='md:px-10 px-5  text-white z-10 relative h-full flex flex-col'>
            <div className='text-center pt-20'>
                <h1 className='container-heading md:text-4xl text-3xl font-medium tracking-tight'>KEY BENEFITS</h1>
                <p className='container-heading md:pt-5 pt-3 text-xs md:text-sm md:-mb-0 -mb-30'>Unlock the core advantages of our EV charger—designed for speed,intelligence and compatibility with every ride.</p>
            </div>
            <div className=' relative flex justify-center items-center flex-1'>
                <div className='charger-img gpu-boost'>
                <img src={ChargerImg}  className='gpu-boost md:h-100 h-[80vh]  md:w-100 w-[80vh] object-contain transition duration-300 hover:drop-shadow-[0_0_10px_white] '/>
                </div>
                {/* left side points  */}
                {/* point 1  */}
                <div className='container-leftText gpu-boost absolute md:top-[25%] top-[35%] md:left-[12%] left-[1%]'>
                <div className='flex items-center md:w-100 w-32'>
                <h4 className=' md:text-lg text-[12px] w-[70px] md:w-fit font-light whitespace-nowrap'>Fast & Reliable <br/> Charging</h4>
                <div className='h-[0.1rem] flex-1 bg-gradient-to-l from-white 
                to-transparent '>           
                </div>
                <div className='md:w-6 w-5 md:h-6 h-5   bg-gray-500 rounded-full flex items-center justify-center'>
                <FaCircle className='text-white md:text-xs text-[10px]'/></div>
                </div>
                </div>
                {/* point 2  */}
                <div className='container-leftText gpu-boost absolute md:top-[53%] top-[50%] md:left-[12%] left-[3%]'>
                <div className=' flex items-center md:w-100 w-32'>
                <h4 className=' md:text-lg text-[12px] w-[50px] md:w-fit font-light'>Multiple Charging Options</h4>
                <div className='h-[0.1rem] flex-1 bg-gradient-to-l from-white to-transparent '></div>
                <div className='md:w-6 w-5 md:h-6 h-5   bg-gray-500 rounded-full flex items-center justify-center'>
                <FaCircle className='text-white md:text-xs text-[10px]'/></div>
                </div>
                </div>
                {/* point 3  */}
                <div className='container-leftText gpu-boost absolute md:top-[77%] top-[66%] md:left-[12%] left-[1%]'>
                <div className=' flex items-center md:w-100 w-31'>
                <h4 className=' md:text-lg text-[12px] w-[70px] md:w-fit font-light whitespace-nowrap'>24/7 Customer<br/> Support</h4>
                <div className='h-[0.1rem] flex-1 bg-gradient-to-l from-white to-transparent '></div>
                <div className='md:w-6 w-5 md:h-6 h-5   bg-gray-500 rounded-full flex items-center justify-center'>
                <FaCircle className='text-white text-[10px]'/></div>
                </div>
                </div>
                {/* Right side points  */}
                {/* point 4  */}
                <div className='container-rightText gpu-boost absolute md:top-[18%] top-[30%] md:right-[14%] right-[10%]'>
                <div className=' flex items-center md:w-100 w-30'>
                <div className='md:w-6 w-5 md:h-6 h-5   bg-gray-500 rounded-full flex items-center justify-center'>
                <FaCircle className='text-white text-[10px]'/></div>
                <div className='h-[0.1rem] flex-1 bg-gradient-to-l from-transparent to-white '></div>
                <h4 className=' md:text-lg text-[12px] w-[65px] md:w-fit font-light'>Easy-to-Use Platform</h4>
                </div>
                </div>
                {/* point 5  */}
                <div className='container-rightText gpu-boost absolute md:top-[39%] top-[60%] md:right-[14%] right-[10%]'>
                <div className=' flex items-center md:w-100 w-30'>
                <div className='md:w-6 w-5 md:h-6 h-5   bg-gray-500 rounded-full flex items-center justify-center'>
                <FaCircle className='text-white text-[10px]'/></div>
                <div className='h-[0.1rem] flex-1 bg-gradient-to-l from-transparent to-white '></div>
                <h4 className=' md:text-lg text-[12px] w-[65px] md:w-fit font-light'>Eco-Friendly Commitement</h4>

                </div>
                </div>
                {/* point 6  */}
                <div className='container-rightText gpu-boost absolute md:top-[65%] top-[43%] md:right-[14%] right-[10%]'>
                <div className=' flex items-center md:w-100 w-30'>
                <div className='md:w-6 w-5 md:h-6 h-5   bg-gray-500 rounded-full flex items-center justify-center'>
                <FaCircle className='text-white text-[10px]'/></div>
                <div className='h-[0.1rem] flex-1 bg-gradient-to-l from-transparent to-white '></div>
                <h4 className=' md:text-lg text-[12px] w-[65px] md:w-fit font-light'>Transparent Pricing</h4>
                </div>
                </div>
                
                
                
                
                
            
            </div>
        </div>
        <div className='w-full absolute bottom-0  h-25 bg-gradient-to-t from-black to-transparent'></div>
    </section>
  )
}

export default Keybenefits
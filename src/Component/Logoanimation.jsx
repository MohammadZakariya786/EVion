import React, { useRef } from 'react'
import tesla from '../assets/tesla.png'
import porsche from '../assets/porsche.png'
import toyota from '../assets/toyota.png'
import mercedes from '../assets/mercedes.png'
import tata from '../assets/tata.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
const Logoanimation = () => {
    const containerRef =useRef()
    const marqueeRef=useRef()
    useGSAP(()=>{
        gsap.to(marqueeRef.current,{
        xPercent:-50,
        duration:20,
        ease:'linear',
        repeat:-1
        })
    },[])
  return (
    <section ref={containerRef} className='max-w-[1400px] relative '>
        <div className='w-full absolute -top-10 h-10 bg-gradient-to-t from-black to-transparent'></div>
        <div className='bg-black flex  md:justify-between'>
     <div className='overflow-hidden relative'>
        <div ref={marqueeRef} className='flex md:gap-x-20 gap-x-15 w-max  '>
        {[...logos ,...logos].map((user,index)=>(
        <div key={user.id + '-' + index} className={`   flex justify-center items-center flex-shrink-0  ${user.extraClass || 'md:h-50 md:w-50 w-40 h-40'}`}>
        <img src={user.img} className='animate-pulse h-full w-full  object-contain'/>
        </div>
        ))}
        </div>
    </div>
    </div>
    </section>
  )
}

export default Logoanimation

const logos=[
    {
        id:1,
        img:tesla
    },
    {
        id:2,
        img:tata, extraClass:'md:w-[150px] w-[110px]'
    },
    {
        id:3,
        img:porsche
    },
    {
        id:4,
        img:mercedes,extraClass:'md:w-[120px] w-[100px]'
    },
    {
        id:5,
        img:toyota,extraClass:'md:w-[100px] w-[80px]'
    },
]
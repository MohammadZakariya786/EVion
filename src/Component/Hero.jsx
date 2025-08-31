import React, { useRef } from 'react'
import bgDesktop from '../assets/bgDesktop.webp'
import bgMobile from '../assets/bgMobile.webp'
import user1 from '../assets/customer1.webp'
import user2 from '../assets/customer2.webp'
import user3 from '../assets/customer3.webp'
import user4 from '../assets/customer4.webp'
import user5 from '../assets/customer5.webp'
import { GiCarWheel } from "react-icons/gi";
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

    const containerRef=useRef();
    useGSAP(()=>{
        var tl=gsap.timeline();
        const usercard=gsap.utils.toArray('.user-icon');
            tl.from('.heading-1',{
                y:-300,
                opacity:0,
                scale:0.2,
                duration:1,
                delay:0.5,
                ease:'power2.out',})    


            tl.from(usercard,{
                
                y: 150,
                delay:0.3,
                scale:3,
                stagger:{
                    each:0.3,
                    from:'start',
                },
                duration:1,
                opacity:1,
                ease:'power2.out', 
            })
            tl.from('.user-textCard',{
                y:50,
                opacity:0,
                duration:1,
                ease:'power2.out',})
            gsap.from('.a',{
                y:100,duration:1,delay:1,
                stagger:{each:0.3,from:'start'},
                opacity:0,
                ease:'power2.out',
                
            })
            gsap.from('.b',{
                y:100,duration:1,delay:1,
                stagger:{each:0.3,from:'end'},
                opacity:0,
                ease:'power2.out',
                
            })
        },{scope:containerRef})

    



    const renderUsers=users.map((user,i)=>{
        return(
            <div className=' user-icon gpu-boost  md:h-8 h-7 md:w-8 w-7'>
                <img className='w-full h-full outline-2 outline-white overflow-hidden rounded-full object-contain' src={user.img}/>
            </div>
        )
    })






  return (
    <section>
        <div ref={containerRef} className='relative w-full h-[100vh] overflow-hidden'>
            <picture className='absolute inset-0 w-full h-full'>
            <source srcSet={bgMobile} media='(max-width:640px)'/>
            <source srcSet={bgDesktop} media='(max-width:1024px)'/>
            <img src={bgDesktop} alt='background' className='w-full h-full object-cover '/>
            </picture>
        {/* gradient  */}
        <div className=' absolute h-60 w-full left-0 bottom-0 bg-gradient-to-t 
        from-black/80  to-transparent'></div>
        <div className=' flex flex-col md:gap-y-20 z-10 relative w-full h-full justify-center items-center'>
            {/* h3 text for mobile  */}
            <h3 className='heading-1 text-center md:hidden block absolute top-[13%]  text-[3vh]/7  text-white  font-sans font-bold'>The Future<br/><span className='text-6xl inline-block -mt-2 text-transparent [-webkit-text-stroke:2px_white]'>M<span className='text-[32px] text-white inline-block animate-spin'><GiCarWheel/></span>ves</span> <br/><span className=''>at the Speed<br/>Of</span></h3>
            {/* h3 text for laptop  */}
            <h3 className='heading-1 md:block hidden absolute  md:top-[20%] md:text-[1.7vw] md:text-black  font-sans font-bold'>The Future <span className='text-3xl inline-block  text-black'>M<span className='text-[18px] text-black inline-block animate-spin'><GiCarWheel/></span>ves</span> at the Speed Of</h3>
            <h2 className='gpu-boost  tracking-wider  md:text-[130px] text-[20vw] md:mix-blend-difference font-extrabold text-transparent [-webkit-text-stroke:2px_white] md:[-webkit-text-stroke:4px_black] md:-translate-x-3
            absolute md:top-[18%] top-[30%]
            
             md:[mask-image:radial-gradient(ellipse_45%_60%_at_center_bottom,transparent_60%,black_90%)]
                       md:[-webkit-mask-image:radial-gradient(ellipse_50%_60%_at_center_bottom,transparent_20%,black_80%)'>
                        <span className='a inline-block'>C</span>
                        <span className='a inline-block'>H</span>
                        <span className='a inline-block'>A</span>
                        <span className='b inline-block'>R</span>
                        <span className='b inline-block'>G</span>
                        <span className='b inline-block'>E</span>
                        </h2>
        </div>    
        <div className='absolute bottom-15 right-15 flex -space-x-4 items-center'>
        {
            renderUsers
        }
        
        <div className='user-textCard md:bg-white/30 bg-white/35 rounded-full border-t-[1.5px] border-l-2 
        border-white/50 md:px-6 px-5 md:py-3 py-3 md:ml-8 ml-6'>
            <h4 className='md:text-white text-white md:text-sm text-xs font-medium'>5.6K + ACTIVE USERS
            </h4>
        </div>
        </div>
        </div>
        
    </section>
  )
}

export default Hero


const users=[
    {
        id:1,
        img:user1,
    },
    {
        id:2,
        img:user2,
    },
    {
        id:3,
        img:user3,
    },
    {
        id:4,
        img:user4,
    },
    {
        id:5,
        img:user5,
    },
]
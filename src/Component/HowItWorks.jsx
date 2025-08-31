import React, { useRef } from 'react'
import pic1 from '../assets/pic1.webp'
import pic2 from '../assets/pic2.webp'
import pic3 from '../assets/pic3.webp'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const containerRef=useRef();
  useGSAP(()=>{
    const cards=gsap.utils.toArray(".container-card");
    cards.forEach((el)=>{
      gsap.from(el,{
        y:300,
        opacity:0,
        duration:0.3,
        ease:'power2.out',
        scale:0.5,
        scrollTrigger:{
          trigger:el,
          start:"top 130%",
          end:"bottom 120%",
          scrub:2,
          // markers:true,
        }
      })
    })
    gsap.from('.heading',{
      y:50,
      opacity:0,
      scale:0.8,
      duration:0.8,
      ease:'back.in',
      scrollTrigger:{
        trigger:'.heading',
        start:'top 100%',
        end:'bottom 90%',
        scrub:2,
        // markers:true
      }
    })
  },{scope:containerRef})

  return (
    <section>
        <div ref={containerRef} className='bg-black md:px-20 px-5 mx-auto pt-15 max-w-[1400px] '>
        <div><h1 className='heading md:text-4xl text-3xl text-center text-white tracking-tight font-medium'>HOW IT WORK'S</h1></div>
        {/* CARD SECTION  */}
        <div className='flex md:flex-row flex-col justify-between items-center gap-x-3 mt-10 md:-space-y-0 -space-y-12'>
            {   
                data.map((info,id)=>{
                    return<div key={info.id} className='container-card md:p-5 md:w-90 w-80 h-[520px]'>
                        {/* image content  */}
                            <div className='w-full h-80 flex items-center justify-center rounded-xl'>
                                <img src={info.image} className='w-full h-full object-contain rounded-xl'/>
                            </div>
                        {/* text content  */}
                            <div className='pt-5 '>
                                <h3 className='text-xl text-white font-semibold'>{info.title}</h3>
                                <p className='text-white/70 pt-3 text-sm'>{info.description}</p>
                            </div>
                        </div>

                })
            }
        </div>
        </div>
    </section>
  )
}

export default HowItWorks


const data=[
  {
    id:1,
    image:pic1,
    title: "Easy Plug In",
    description: "Connect your EV to the charger easily—Power up anytime, anywhere with a simple plug-in"
  },
  {
    id:2,
    image:pic2,
    title: "Charge Smart",
    description: "Use our app to monitor, schedule, and optimize your charge with smart features."
  },
  {
    id:3,
    image:pic3,
    title: "Drive Clean",
    description: "Hit the road with a full battery and a clean conscience—powered by sustainable energy."
  }
]

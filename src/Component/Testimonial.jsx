import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import img from '../assets/testimonialimg.webp'
import { FaStar } from 'react-icons/fa'
import { FaQuoteLeft } from "react-icons/fa6";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
const Testimonial = () => {

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
          start:"top 140%",
          end:"bottom 100%",
          scrub:2,
          // markers:true,
        }
      })
    })
    gsap.from('.container-leftText',{
      x:-100,
      opacity:0,
      
      duration:0.3,
      ease:'back.in',
      scrollTrigger:{
        trigger:'.container-leftText',
        start:'top 90%',
        end:'bottom 70%',
        scrub:2,
        // markers:true
      }
    })
    gsap.from('.container-rightText',{
      x:100,
      opacity:0,
      
      duration:0.8,
      ease:'back.in',
      scrollTrigger:{
        trigger:'.container-rightText',
        start:'top 90%',
        end:'bottom 70%',
        scrub:2,
        // markers:true
      }
    })
  },{scope:containerRef})





    const renderCards=customers.map((cust,id)=>{
        return(
            // parent container 
            <SwiperSlide key={cust.id} className='container-card bg-white/15 p-5 rounded-lg '>
                <div className=''>
                    {/* quote  */}
                <div className='text-white md:text-xl text-md md:pb-2 pb-1'><FaQuoteLeft/></div>
                {/* text content  */}
                <div>
                    <h3 className='text-white md:text-xl text-lg font-semibold whitespace-nowrap md:pb-4 pb-2'>{cust.title}</h3>
                    <p className='text-white md:text-sm text-xs md:pb-4 pb-2'>{cust.review}</p>
                    <div className='bg-black/70 shadow-xs shadow-gray-500 h-[2px] w-full'></div>
                </div>
                {/* second text content  */}
                <div className='md:mt-5 mt-3 flex justify-between items-center'>
                    <div>
                        <h3 className='text-white font-medium text-lg pb-1'>{cust.name}</h3>
                        <h3 className='text-white/80 font-light text-sm pb-4'>{cust.position}</h3>
                    </div>
                    <div>
                        <p className='flex text-yellow-300 text-sm gap-x-1'>
                            {
                                Array.from({length:cust.rating},(_,index)=>(
                                    <FaStar key={index}/>
                                ))
                            }
                        </p>
                    </div>
                </div>
                </div>
            </SwiperSlide>
        )
    })




  return (
    <section ref={containerRef} className='max-w-[1440px] mx-auto overflow-x-hidden'>
        <div className='relative  md:px-10 px-5'>
            <div className='absolute inset-0 bg-black/80 w-full z-10'></div>
            <div className='absolute top-0 left-0 bg-gradient-to-b from-black to-transparent text-transparent h-8 w-full z-10'></div>
            <img src={img} className='absolute inset-0 w-full h-full object-cover'/>
            {/* text content layout  */}
            <div className='z-30 py-13 relative h-full flex md:flex-row flex-col md:justify-between gap-y-2 w-full '>
                <h1 className='container-leftText text-white md:text-3xl text-2xl font-semibold md:max-w-[50%]'>TRUSTED BY THOUSANDS,<br/><span className='bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent'>LOVED BY ALL</span></h1>
                <h3 className='container-rightText text-white/80 font-light md:text-md text-sm md:max-w-[40%]'>Discover why EV drivers trust our charging stations for a reliable, fast, and seamless experience. See how we’ve helped thousands stay powered on their journeys with exceptional service and support.</h3>
            </div>
            {/* card content  */}
            <div className='relative bottom-5  z-40 flex gap-x-5 pb-10'>
                <Swiper 
                navigation={{
                    nextEl:".custom-next",
                    prevEl:".custom-prev"
                }} 
                modules={[Navigation]}
                loop={true}
                breakpoints={{
                  640: { slidesPerView: 1, slidesPerGroup: 1 },
                  768: { slidesPerView: 2, slidesPerGroup: 2 },
                  1024: { slidesPerView: 2, slidesPerGroup: 2 }
                }}
                
                spaceBetween={20}
                className="mySwiper">

                {
                    renderCards
                }
                </Swiper>
            </div>
            <div className='absolute z-40 bottom-4 right-[2%]  text-white/60 flex  gap-x-1'>
            <button className=' custom-prev hover:text-white active:text-white cursor-pointer rounded-full flex'>
            <IoIosArrowDropleft className='text-3xl'/>
            </button>
            <button className=' custom-next hover:text-white active:text-white cursor-pointer rounded-full flex'>
            <IoIosArrowDropright className='text-3xl'/>
            </button>
            </div>
        </div>

    </section>
  )
}

export default Testimonial

const customers=[
  {
    id:1,
    name: "Sarah Sen",
    position: "General Manager",
    title: "Fast and Efficient Charging!",
    review: "I was amazed by how quick the charging process was! The station was easy to locate, and I was back on the road in no time. Definitely my go-to for long trips.",
    rating: 4
  },
  {
    id:2,
    name: "David L.",
    position: "Assistant Manager",
    title: "User-Friendly Experience",
    review: "The mobile app makes the entire process so simple. I found a nearby station, started my session, and paid all from my phone. Highly recommend this service.",
    rating: 4
  },
  {
    id:3,
    name: "Priya K.",
    position: "Software Engineer",
    title: "Reliable Service",
    review: "The charging stations are always available when I need them. I never have to worry about running out of battery on my commute.",
    rating: 4
  },
  {
    id:4,
    name: "John M.",
    position: "Marketing Specialist",
    title: "Great Support Team",
    review: "I had a small issue with the charger, and the support team resolved it within minutes. Excellent customer service!",
    rating: 5
  },
  {
    id:5,
    name: "Anita R.",
    position: "HR Consultant",
    title: "Affordable and Convenient",
    review: "Pricing is fair and transparent, and the convenience of quick charging stations near my workplace makes it perfect for daily use.",
    rating: 4
  },
  {
    id:6,
    name: "Michael B.",
    position: "Logistics Manager",
    title: "Perfect for Long Trips",
    review: "I drove across states and had no issues finding stations along the way. Consistent performance and reliable speed every time.",
    rating: 4
  }
]

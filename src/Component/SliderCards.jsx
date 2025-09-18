import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import cardimg1 from '../assets/card1img.webp'
import cardimg2 from '../assets/card2img.webp'
import cardimg3 from '../assets/card3img.webp'
import cardimg4 from '../assets/card4img.webp'

const SliderCards = () => {

    const dotsImage=[cardimg1,cardimg2,cardimg3,cardimg4]

  return (
    <section className='relative max-w-[1440px]'>
    
    <Swiper
    spaceBetween={30}
        effect={'fade'}
        navigation={false}
        loop={Infinity}
        autoplay={{
            delay:3000,
            disableOnInteraction:false,
        }}
        // onAutoplayTimeLeft={5}
        pagination={{
          clickable: true,
          renderBullet:(index,className)=>
            `<span class="${className}">
          <img src="${dotsImage[index]}" class="md:w-10 w-8 md:h-10 h-8 object-cover rounded-full border-2 border-white"/>
          </span>`
        }}
        modules={[EffectFade, Navigation, Pagination,Autoplay]}
        className="mySwiper h-[60vh]">
        {
            
            cards.map((card)=>{
                return(
                    // parent card 
                    <SwiperSlide key={card.id} className=' relative h-full  bg-red-400 px-5 bg-cover bg-no-repeat' style={{backgroundImage:`url(${card.image})`,
                            backgroundPosition:'center'
                            }}>
                    {/* gradient overlay  */}
                    <div className='bg-black/70  absolute inset-0'></div>
                    {/* text content  */}
                    <div className='flex justify-center items-center relative z-10 h-full'>
                    <div className='flex  justify-center flex-col'>
                    <h3 className='text-white text-3xl  font-medium text-center pb-5'>{card.title}</h3>
                    <p className='text-white text-lg  font-semibold text-center pb-3'>"{card.subtitle}"</p>
                    <p className='text-white text-xs  font-medium text-center'>{card.description}</p>
                    </div>
                    </div>
                    </SwiperSlide>
                )
            })
        }
    </Swiper>
    </section>
  )
}

export default SliderCards

const cards=[
  {
    id: 1,
    title: "ENERGY FLOW OPTIMIZATION",
    subtitle: "Save up tp $100 per month",
    description: "Energy Supply Coordination",
    image:cardimg1
  },
  {
    id: 2,
    title: "SMART CHARGING SOLUTIONS",
    subtitle: "Charge faster with AI scheduling",
    description: "Intelligent Load Management",
    image:cardimg2
  },
  {
    id: 3,
    title: "SUSTAINABLE ENERGY USAGE",
    subtitle: "Reduce carbon footprint by 40%",
    description: "Green Energy Integration",
    image:cardimg3
  },
  {
    id: 4,
    title: "COST-EFFICIENT POWER",
    subtitle: "Cut electricity bills significantly",
    description: "Dynamic Pricing Benefits",
    image:cardimg4
  }
]

import React, { useRef, useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import pic2 from '../assets/faqimg.webp'
import charger from '../assets/charger2.webp'
import bgImg from '../assets/faqbg.webp'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
const FAQ = () => {
  const containerRef=useRef();
  useGSAP(()=>{
    const cards=gsap.utils.toArray(".container-card");
      gsap.from(cards,{
        y:-200,
        opacity:0,
        duration:0.4,
        ease:'circ.inOut',
        stagger:0.3,
        scale:0.5,
        scrollTrigger:{
          trigger:cards,
          start:"top 80%",
          end:"bottom 70%",
          toggleActions:"play none none reverse",
          // markers:true,
        }
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
    gsap.to('.container-chargerImg ',{
      y:-300,
      yoyo:true,
      repeat:-1,
      opacity:1,
      duration:2,
      ease:'back.in',
    })
    gsap.to('.container-carImg ',{
      x:400,
      y:-200,
      yoyo:true,
      repeat:-1,
      opacity:1,
      scale:0.4,
      duration:2,
      ease:'back.in',
    })
  },{scope:containerRef})


    const [activeToggle, setActiveToggle] = useState(null)

    const dropdownmenu=(id)=>{
        if (activeToggle===id){
            setActiveToggle(null);
        }
        else{
            setActiveToggle(id);
        }
    }

  return (
    <section ref={containerRef} className='overflow-hidden max-w-[1400px] bg-black mx-auto pt-15 pb-15'>
    <div className='md:px-10 px-5'>
    <h3 className='heading md:text-4xl text-2xl text-center text-white tracking-tight font-medium pb-10'>EVERYTHING YOU NEED TO KNOW</h3>
    {/* parent container of both text and img  */}
    <div className='relative grid md:grid-cols-2 grid-cols-1 gap-x-10 mt-5 gap-y-10 '>
    <div className='flex flex-col '>
        {/* faq section  */}
        {
            questions.map((info)=>{
                return(
            
        <div key={info.id} className='container-card text-white bg-black flex justify-between space-y-5'>
        {/* left section of text  */}
        <div className={`border-b-1 border-white/30 py-1  flex flex-col justify-between ${activeToggle===info.id?'max-h-50':'max-h-15  overflow-hidden'} transition-all duration-300`}>
        <h3 className='font-semibold md:text-lg text-md pb-8  pr-3'>{info.question}</h3>
        <p className='md:text-sm text-xs font-sans pb-5 pr-3 text-white/60'>{info.answer}</p>
        </div>
        {/* right section of dropdown arrow  */}
        <div className='flex items-center'>
        <button  onClick={()=>dropdownmenu(info.id)}><FaChevronDown className={`transition-all duration-300 ${activeToggle===info.id?'rotate-180':'rotate-0 -translate-y-4 -translate-x-4'}`}/></button>
        </div>
        </div>
        )})}
        </div>
        {/* image section  */}
        <div className='relative  md:ml-10 ml-5 border-y-5 border-l-10 border-r-0 border-white rounded-bl-full rounded-l-full  z-50 w-full md:h-100 h-80  flex'
        style={{backgroundImage:`url(${bgImg})`,backgroundSize:'cover',backgroundPosition:'right',backgroundRepeat:'no-repeat'}}>
        <div className='absolute inset-0  overflow-hidden rounded-bl-full rounded-l-full'>
          <img src={charger} className='container-chargerImg absolute  md:-top-10 bottom-25  right-0   object-contain   z-10  translate-x-4 rounded-lg md:w-80 w-50 md:h-80 h-50 transform scale-x-[-1]'/>
        </div>
        <img src={pic2} className='container-carImg absolute  md:top-10 -bottom-23 translate-x-2 object-cover  rounded-lg md:w-140  md:h-140  z-40 drop-shadow-[0_10px_10px_rgba(0,0,0,0.7)] '/>
        
    </div>
    </div>
    </div>
    </section>
    
  )
}

export default FAQ


const questions=[
  {
    id: 1,
    question: "How do I find a charging station?",
    answer: "You can easily locate the nearest charging stations using our interactive map on the website or mobile app. You can also filter by location, availability, and charging speed for convenience."
  },
  {
    id: 2,
    question: "How do I start a charging session?",
    answer: "To start a charging session, simply plug the connector into your vehicle and follow the instructions on the station screen or mobile app. Once confirmed, charging will begin automatically."
  },
  {
    id: 3,
    question: "What types of charging connectors are supported?",
    answer: "Our stations support multiple connector types including CCS, CHAdeMO, and Type 2, ensuring compatibility with most electric vehicles."
  },
  {
    id: 4,
    question: "Can I monitor my charging progress?",
    answer: "Yes, you can monitor your charging progress in real time through our mobile app or the on-screen display at the charging station."
  },
  {
    id: 5,
    question: "Are your stations eco-friendly?",
    answer: "Absolutely. Our stations are powered by renewable energy sources wherever possible and designed to minimize environmental impact."
  },
  {
    id: 6,
    question: "Is there a membership or subscription plan?",
    answer: "Yes, we offer both pay-as-you-go and subscription plans. Membership plans provide discounted charging rates and additional benefits."
  }
]

import React from 'react'
import bgDesktop from '../assets/bgDesktop.png'
import bgTablet from '../assets/bgTablet.png'
import bgMobile from '../assets/bgMobile.png'
import car2 from '../assets/car2.png'
import user1 from '../assets/customer1.webp'
import user2 from '../assets/customer2.webp'
import user3 from '../assets/customer3.webp'
import user4 from '../assets/customer4.webp'
import user5 from '../assets/customer5.webp'

const Hero = () => {

    const renderUsers=users.map((user,i)=>{
        return(
            <div className=' md:h-8 h-7 md:w-8 w-7'>
                <img className='w-full h-full outline-2 outline-white overflow-hidden rounded-full object-contain' src={user.img}/>
            </div>
        )
    })






  return (
    <section>
        <div className='relative w-full h-[100vh]'>
            <picture className='absolute inset-0 w-full h-full'>
            <source srcSet={bgMobile} media='(max-width:640px)'/>
            <source srcSet={bgDesktop} media='(max-width:1024px)'/>
            <img src={bgDesktop} alt='background' className='w-full h-full object-cover '/>
            </picture>
        {/* gradient  */}
        <div className='absolute h-60 w-full left-0 bottom-0 bg-gradient-to-t 
        from-black/80  to-transparent'></div>
        <div className='flex flex-col md:gap-y-20 z-10 relative w-full h-full justify-center items-center'>
            <h3 className='absolute top-[19%] left-[28%] md:top-[24%] md:left-[39%] md:text-[1.7vw] md:text-black  text-[4vw] text-white  font-sans font-bold'>The Future Moves at the Speed Of</h3>
            <h2 className='tracking-wider  md:text-[150px] text-[25vw] md:mix-blend-difference font-extrabold text-transparent [-webkit-text-stroke:2px_white] md:[-webkit-text-stroke:4px_black] md:-translate-x-3
            absolute md:top-[15%] top-[15%]
            
             md:[mask-image:radial-gradient(ellipse_45%_60%_at_center_bottom,transparent_60%,black_90%)]
                       md:[-webkit-mask-image:radial-gradient(ellipse_50%_60%_at_center_bottom,transparent_20%,black_80%)'>Charge</h2>
        </div>    
        <div className='absolute bottom-10 right-15 flex -space-x-4 items-center'>
        {
            renderUsers
        }
        
        <div className='md:bg-white/30 bg-white/35 rounded-full border-t-[1.5px] border-l-2 
        border-white/50 md:px-6 px-5 md:py-3 py-3 md:ml-8 ml-6'>
            <h4 className='md:text-white text-white md:text-sm text-xs font-semibold'>5.6K + ACTIVE USERS
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
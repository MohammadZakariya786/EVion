import React from 'react'
import tesla from '../assets/tesla.png'
import porsche from '../assets/porsche.png'
import toyota from '../assets/toyota.png'
import mercedes from '../assets/mercedes.png'
import tata from '../assets/tata.png'
const Logoanimation = () => {
  return (
    <section className='max-w-[1400px] relative '>
        <div className='w-full absolute -top-10 h-10 bg-gradient-to-t from-black to-transparent'></div>
        <div className='bg-black flex px-10 gap-x-20 justify-between'>
    {logos.map((user)=>(
    <div key={user.id} className={`h-50 w-50 flex justify-center items-center ${user.extraClass || ''}`}>
    <img src={user.img} className='animate-pulse h-full  w-full object-contain'/>
    </div>
    ))}
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
        img:tata, extraClass:'w-[150px]'
    },
    {
        id:3,
        img:porsche
    },
    {
        id:4,
        img:mercedes,extraClass:'w-[120px]'
    },
    {
        id:5,
        img:toyota,extraClass:'w-[100px]'
    },
]
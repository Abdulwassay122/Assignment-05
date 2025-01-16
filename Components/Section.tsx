import React from 'react'
import Image from "next/image";
import pic from './img/rs-group-wrap ⏵ rs-group (1).svg'

export default function Section() {
  return (
    <section className='flex justify-between w-[1920px] h-[826.57px]'>
      <div className='ml-[171px] w-[902px] mr-[91p] mt-[182px]'>
        <h2 className='font-bold font-LibreBodoni text-[40px] w-[496px] h-[189px] ml-[6px] mb-[28px]'>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h2>
        <p className='font-500 font-LibreBodoni text-[30px] text-[#787054] w-[902px] h-[147px] tracking-wider  mb-[50px]'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
        <button className='text-white font-500 font-LibreBodoni text-[30px] bg-[#A29875] rounded-[10px] w-[288px] h-[58px] ml-[6px]'>Explore Now</button>
      </div>
      <div className='mr-[266px]  mt-[64px]'>
        <Image className='h-auto w-auto' width={200} height={200} src={pic.src} alt='pic'/>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { CardItem } from './CardItem';


function section2() {
    const [count, setCount] = useState(0);
    
  return (
    <>
        <div className='mt-10'>
            <div className=' flex justify-end'>
                <p className='text-[14px] leading-5 font-semibold text-[#0B63E5] border-b border-[#0B63E5] p-[0.05px]'>Preview Package</p>
            </div>
            <div className='mt-3 p-4 bg-[#FFFFFF] rounded-md'>
                <div className=''>
                    <h4 className='text-[22px] leading-[28px] text-[#0F161E] font-semibold'>Equipment</h4>
                    <p className='text-[#5A5F66] text-[14px] leading-5'>Equipment items included in this package.</p>
                </div>

                <div>
                    <div className='bg-[#E8F0FC] px-2 py-2 my-6 rounded-md flex items-center gap-2'>
                        <Image src={"/Images/sound.png"} width={24} height={24} alt='sound' className=''/>
                        <h6 className='text-[16px] leading-5 text-[#0846A3] font-semibold'>
                            Sound
                        </h6>
                    </div>

                    <div>
                        <h5 className='text-[16px] leading-5 font-semibold text-[#0F161E]'>Speaker</h5>
                        <CardItem/>
                        <CardItem/>
                    </div>

                    <div className='mt-4'>
                        <h5 className='text-[16px]  leading-5 font-semibold text-[#0F161E]'>Microphone</h5>
                        <CardItem/>

                    </div>

                    <div className='mt-4'>
                        <h5 className='text-[16px]  leading-5 font-semibold text-[#0F161E]'>Audio Mixer</h5>
                        <CardItem/>

                    </div>
                </div>

                <div>
                    <div className='bg-[#E8F0FC] px-2 py-2 my-6 rounded-md flex items-center gap-2'>
                        <Image src={"/Images/structure.png"} width={24} height={24} alt='structure' className=''/>
                        <h6 className='text-[16px] leading-5 text-[#0846A3] font-semibold'>
                            Structures
                        </h6>
                    </div>
                    <div className='mt-4'>
                        <h5 className='text-[16px]  leading-5 font-semibold text-[#0F161E]'>Fixed Fixture</h5>
                        <CardItem/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default section2
import React from 'react'

import picture from '../../assets/about.jpg'
const Content = () => {
    return (
        <section className='p-[3rem] w-full'>
            <div className='md:flex sm:grid'>
                <div  className='w-1/2'>
                    <h1 className='text-3xl font-bold uppercase'>Our mission
                        <div className='border w-12 my-4 border-red-600'></div>
                    </h1>
                    <p className='text-md pb-2 font-serif md:w-3/4'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
                        error.
                    </p>
                    <p className='text-md pb-2 font-serif md:w-3/4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ea sint impedit suscipit sunt asperiores provident voluptate, praesentium eum temporibus.
                    </p>
                </div>
                <div className='bg-zinc-200 w-1/2 pr-4 md:min-h-[26.6rem] rounded-sm relative'>
                    <img className='absolute ml-[-3px] rounded-sm' src={picture} alt="Lorem ipsum dolor sit" />
                </div>
            </div>
            <div className='md:mt-[4rem] md:flex w-full'>
                <div className='w-1/2'>
                    <h2>Extraordinary Experiences
                        <div className='border w-12 my-4 border-red-600'></div>
                    </h2>
                       <p className='text-md pb-2 font-serif md:w-3/4'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
                        error.
                    </p>
                    <p className='text-md pb-2 font-serif md:w-3/4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ea sint impedit suscipit sunt asperiores provident voluptate, praesentium eum temporibus.
                    </p>
                </div>
                <div className='w-1/2'>
                    <h2>Our core mission
                        <div className='border w-12 my-4 border-red-600'></div>
                    </h2>
                       <p className='text-md pb-2 font-serif md:w-3/4'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
                        error.
                    </p>
                    <p className='text-md pb-2 font-serif md:w-3/4'>
                <div className='flex items-center mb-2'>
                    <div className='m-1 border border-red-600 w-3 h-0'></div>
                    <div>
                        Lorem ipsum dolor sit amet.
                    </div>
                </div>
                <div className='flex items-center mb-2'>
                    <div className='m-1 border border-red-600 w-3 h-0'></div>
                    <div>
                        Lorem ipsum dolor sit amet.
                    </div>
                </div>
                <div className='flex items-center mb-2'>
                    <div className='m-1 border border-red-600 w-3 h-0'></div>
                    <div>
                        Lorem ipsum dolor sit amet.
                    </div>
                </div>
                    </p>

                </div>
            </div>
        </section>
    )
}

export default Content
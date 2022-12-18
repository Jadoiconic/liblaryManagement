import React from 'react'
import myImage from '../../assets/86121130.jpg'

const Container = () => {
    return (
        <section className='h-screen w-full bg-zinc-200 flex flex-col justify-between'>
            <div className="grid grid-cols-2 max-w-[1240] m-auto">
                <div className='flex flex-col justify-center sm:items-start w-full px-2 py-8'>
                    <p className='text-2xl'>Movies and Video Production</p>
                    <p className='py-3 text-5xl font-bold'>Problem Statement</p>
                    <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id amet nam facilis rem, sequi tempore.</p>
                    <button className='py-3 px-6 my-4'>Get Started</button>
                </div>
                <div className='flex justify-end mr-4'>
                    <img className='h-full' src={myImage} alt='/' />
                </div>
            </div>
                <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 transform md:translate-x-1/2 bg-zinc-200 border-slate-300 rounded-xl text-center shadow-xl'>
                    <p>Data Services</p>
                    <div className='flex justify-between flex-wrap px-4'>
                        <p className='flex px-4 py-2 text-slate-500'>App Security</p>
                        <p className='flex px-4 py-2 text-slate-500'>Web Design</p>
                        <p className='flex px-4 py-2 text-slate-500'>Cloud Data Store</p>
                        <p className='flex px-4 py-2 text-slate-500'>API</p>
                    </div>
                </div>
        </section>
    )
}

export default Container
import React from 'react'
import myImage from '../../assets/86121130.jpg'

const Container = () => {
    return (
        <section className='h-screen w-full bg-zinc-200 flex flex-col justify-start scroll-smooth' id="home">
            <div className="grid md:grid-cols-2 max-w-[1240] m-auto">
                <div className='flex flex-col justify-start sm:items-start w-full px-2 py-0'>
                    <p className='text-2xl'>Movies and Video Production</p>
                    <p className='py-3 text-5xl font-bold'>Problem Statement</p>
                    <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id amet nam facilis rem, sequi tempore.</p>
                    <button className='py-3 px-6 my-4'>Get Started</button>
                </div>
                <div className='md:flex md:justify-end mr-4 sm:w-full mx-auto mb-3'>
                    <img className='md:w-1/2 sm:w-full mr-4' src={myImage} alt='/' />
                </div>
            </div>
            <div>
                <p className='font-bold text-2xl text-center'>Data Services</p>
            </div>
        </section>
    )
}

export default Container
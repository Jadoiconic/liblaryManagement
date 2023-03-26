import React from 'react'
// import myImage from '../../assets/home bg.jpeg'

const Container = () => {
    return (
        <section className="h-[70vh] w-full bg-zinc-200 flex flex-col justify-start scroll-smooth" id="home">
                
            <div className="max-w-[1240px] m-auto">
                <div className='flex flex-col justify-start sm:items-start w-full px-2 py-0'>
                    <p className='text-2xl'>Libray Management System</p>
                    <p className='py-3 text-5xl font-bold'>We share you </p>
                    <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id amet nam facilis rem, sequi tempore.</p>
                    <button className='py-3 px-6 my-4'>Get Started</button>
                </div>
            </div>
        </section>
    )
}

export default Container
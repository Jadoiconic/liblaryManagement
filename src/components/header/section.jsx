import React from 'react'

const Container = () => {
    return (
        <section className='h-screen w-full bg-zinc-200 flex flex-col justify-between'>
            <div className="grid grid-clos-2 max-w-[1240] m-auto">
                <div className='flex flex-col justify-center sm:items-start w-full px-2 py-8'>
                    <p className='text-2xl'>Movies and Video Production</p>
                    <p className='py-3 text-5xl font-bold'>Problem Statement</p>
                    <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id amet nam facilis rem, sequi tempore.</p>
                    <button className='py-3 px-6 my-4'>Get Started</button>
                </div>
            </div>
        </section>
    )
}

export default Container
import React from 'react'
import myImage from '../../assets/86121130.jpg'

const Section = () => {
    return (
        <section className='mt-10 p-3 grid bg-zinc-200'>
            <div className='w-full'>
                <img src={myImage} className='w-full object-cover h-auto' alt="bg" srcset="sdf" />
            </div>
        </section>
    )
}

export default Section
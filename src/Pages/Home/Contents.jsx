import React from 'react'

const Contents = () => {
    return (
        <section className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>This is trusted by Libray Checkers</h2>
                    <p className='text-3xl text-gray-500'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vel modi illum maiores molestiae molestias blanditiis amet impedit sapiente veritatis.
                    </p>
                </div>
                <div className='grid md:grid-cols-3 gap-1 px-2 text-center mt-5'>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-indigo-600'>100%</p>
                        <p className='text-gray-400 mt-2'>Completion</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                        <p className='text-gray-400 mt-2'>Delivary</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-indigo-600'>99<sup>+</sup></p>
                        <p className='text-gray-400 mt-2'>likes</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contents
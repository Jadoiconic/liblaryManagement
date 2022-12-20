import React from 'react'
import fundingImage from '../../assets/cover-thompson.png'


const Fund = () => {
    return (
        <section className='w-full mt-14' id='subs'>
            <div className='w-full h-[600px] bg-gray-900/90 absolute'>
                <img src={fundingImage} alt="" className='w-full h-full object-cover mix-blend-overlay' />
            </div>
            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-12'>
                    <h2 className='pt-8 text-slate-300 uppercase text-center'>Support</h2>
                    <h3 className='text-4xl font-bold py-6 text-center'>Finding right Movies </h3>
                    <p className='py-4 text-2xl font-thin'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum sapiente sunt omnis reprehenderit, delectus earum accusamus inventore cumque vero fugit modi neque nesciunt totam praesentium.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 rounded-lg text-white mt-[-4rem] h-16 p-4 bg-indigo-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        <h3 className='font-bold text-2xl my-6'>Sales</h3>
                        <p className='text-gray-600 text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nostrum placeat aliquid laborum incidunt quidem.
                        </p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex itmes-center text-indigo-600'>Contact Us <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-2 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>

                        </span>
                        </p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 rounded-lg text-white mt-[-4rem] h-16 p-4 bg-indigo-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <h3 className='font-bold text-2xl my-6'>Videos</h3>
                        <p className='text-gray-600 text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nostrum placeat aliquid laborum incidunt quidem.
                        </p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex itmes-center text-indigo-600'>Contact Us
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-2 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>

                            </span>
                        </p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 rounded-lg text-white mt-[-4rem] h-16 p-4 bg-indigo-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                        <h3 className='font-bold text-2xl my-6'>Gifts</h3>
                        <p className='text-gray-600 text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nostrum placeat aliquid laborum incidunt quidem.
                        </p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex itmes-center text-indigo-600'>Contact Us
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-2 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>

                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Fund
import React from 'react'

const FooterSection = () => {
    return (
        <section className='w-full text-gray-300 bg-slate-900 px-2'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-3 md:grid-cols-5 border-b-2 border-gray-600 py-4'>
                <div>
                    <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                    <ul>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Analysis</li>
                        <li className='py-1'>Comerce</li>
                        <li className='py-1'>Data Processing</li>
                        <li className='py-1'>Movies</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercase pt-2'>Support</h6>
                    <ul>
                        <li className='py-1'>Documantations</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Advertisment</li>
                        <li className='py-1'>Donate</li>
                    </ul>
                </div>
                
                <div>
                    <h6 className='font-bold uppercase pt-2'>About Us</h6>
                    <ul>
                        <li className='py-1'>About</li>
                        <li className='py-1'>Blog</li>
                        <li className='py-1'>Jobs</li>
                        <li className='py-1'>Adverts</li>
                    </ul>
                </div>
                <div className=''>
                    <h6 className='font-bold uppercase pt-2'>Subscription</h6>
                    <div className=''>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <div className='flex justify-center px-2 my-4'>
                            <input type="email" className='p-2 rounded-0' id="email" />
                            <button className='p-2 rounded-0'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterSection
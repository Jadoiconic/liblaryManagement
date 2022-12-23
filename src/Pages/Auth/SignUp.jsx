import React from 'react'
import FooterSection from '../../Layout/Footer/FooterSection'
import NavBAr from '../../Layout/header/header'
import myImage from '../../assets/signBg.PNG'
import { AiFillFacebook } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

const SignUp = () => {
    return (
        <>
            <NavBAr />
            <div className='flex justify-center items-center w-full bg-zinc-200'>
                <div className='md:w-3/4 bg-white sm:w-full lg:w-3/4 rounded-md md:my-10 sm:my-5 py-2 px-4 grid md:grid-cols-2'>
                    <div className='p-2 shadow w-3/4'>
                        <form action="" method="post">
                            <h2 className='font-bold text-2xl'>
                                Create New Account
                            </h2>
                            {/* <div className='pt-2'>
                                <label htmlFor="names" className='font-bold text-sm'>Full Name</label>
                                <input type="text" className='p-2 w-full border rounded-lg border-gray-300 focus:border-indigo-600 focus:outline-none valid:border-green-500 invalid:border-red-600' required placeholder='you@example.com' />
                            </div> */}
                            <div className='pt-2'>
                                <label htmlFor="email" className='font-bold text-sm'>Email Address</label>
                                <input type="email" className='p-2 w-full border rounded-lg border-gray-300 focus:border-indigo-600 focus:outline-none valid:border-green-500 invalid:border-red-600' required placeholder='you@example.com' />
                            </div>
                            <div className='pt-2'>
                                <label htmlFor="email" className='font-bold text-sm'>Password</label>
                                <input type="password" minLength={6} maxLength={16} className='p-2 w-full border border-gray-300 rounded-lg focus:border-indigo-600 focus:outline-none valid:border-green-500 invalid:border-red-600' required placeholder='Passowrd' />
                            </div>
                            <div className='pt-2'>
                                <label htmlFor="email" className='font-bold text-sm'>Confirm Password</label>
                                <input type="password" minLength={6} maxLength={16} className='p-2 w-full border border-gray-300 rounded-lg focus:border-indigo-600 focus:outline-none valid:border-green-500 invalid:border-red-600' required placeholder='Passowrd' />
                            </div>
                            <div className='pt-2'>
                                <input type="checkbox" id='me' className='mr-1 rounded-sm' />
                                <label htmlFor="me">Remember me</label>
                            </div>
                            <button className='w-full py-2 my-3'>Sign In</button>
                            <p>Doesn't have account yet? <a href='./register'>Sign Up</a></p>
                            <div className='relative my-4 mx-auto'>
                                <div className="border relative"></div>
                                <span className="absolute text-center mx-[33%] bg-white mt-[-0.9rem]">Or Login with</span>
                            </div>
                            <div className='flex justify-between'>
                                <button className='p-2 w-2/5 bg-[rgb(224,33,33)]  text-lg items-center flex'><FcGoogle size={20} /> Google</button>
                                <button className='p-2 w-2/5 bg-[#127] text-lg items-center flex'><AiFillFacebook size={20} /> Facebook</button>
                            </div>
                        </form>
                    </div>
                    <div className='w-full'>
                        <img src={myImage} className='w-full h-auto' />
                    </div>
                </div>
            </div>
            <FooterSection />
        </>
    )
}

export default SignUp
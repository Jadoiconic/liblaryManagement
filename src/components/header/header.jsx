import React from 'react'



const NavBAr = () => {
  return (
    <nav className='w-screen h-[70px] z-10 bg-[#127795] drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <h1 className='text-2xl font-bold sm:text-3xl'>MustaDev</h1>
        <div className='flex items-center'>
          <ul className="hidden md:flex">
            <li className=''>Home</li>
            <li className=''>Services</li>
            <li className=''>About Us</li>
            <li className=''>Contacts</li>
            <li className=''>Help</li>
          </ul>
          <div className='hidden md:flex'>
            <button>Sign In</button>
            <button>Sign Out</button>
          </div>
        </div>
      <div className='md:hidden xl:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
      </svg>
      </div>
     
      
    </nav>
  )
}

export default NavBAr
import React from 'react'


const NavBAr = () => {
  const [navb, setNav] = React.useState(false)
  const handleClick = () => setNav(!navb)
  return (
    <nav className='w-full h-[70px] z-10 bg-[#127795] sticky top-0 drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-2xl font-bold sm:text-3xl'>MustaDev</h1>
          <ul className="hidden md:flex">
            <li className=''>Home</li>
            <li className=''>Services</li>
            <li className=''>About Us</li>
            <li className=''>Contacts</li>
            <li className=''>Help</li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='border-1 bg-transparent px-8 text-black mr-4'>Sign In</button>
          <button className='px-8 py-2'>Sign Up</button>
        </div>
        <div className='md:hidden xl:hidden' onClick={handleClick}>
          {!navb ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg> :
            <span className="text-bold text-5xl text-yellow-600 hover:text-red-500">&times;</span>
          }

        </div>
      </div>
      
        <ul className={!navb ? 'hidden' :'abosolute bg-zinc-300 w-full px-8'}>
          <li className='border-b-2 border-[#6d7170] w-full'>Home</li>
          <li className='border-b-2 border-[#6d7170] w-full'>Services</li>
          <li className='border-b-2 border-[#6d7170] w-full'>About Us</li>
          <li className='border-b-2 border-[#6d7170] w-full'>Contacts</li>
          <li className='border-b-2 border-[#6d7170] w-full'>Help</li>
          <div className='flex pr-4 flex-col py-4'>
            <button className='border-1 bg-transparent px-8 py-2 mb-4 text-black mr-4'>Sign In</button>
            <button className='px-8 py-2'>Sign Up</button>
          </div>
        </ul>
      
    </nav>
  )
}

export default NavBAr
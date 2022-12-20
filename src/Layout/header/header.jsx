import React from 'react'


const NavBAr = () => {
  const [navb, setNav] = React.useState(false)
  const handleClick = () => setNav(!navb)
  return (
    <nav className='w-full h-[70px] z-10 bg-indigo-200 sticky top-[0] shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-2xl font-bold sm:text-3xl'>MustaDev</h1>
          <ul className="hidden md:flex font-bold text-blue-600">
            <a href="./" className='hover:bg-zinc-400'><li>Home</li></a>
            <a href="./services" className='hover:bg-zinc-400'><li>Services</li></a>
            <a href="./about" className='hover:bg-zinc-400'><li>About Us</li></a>
            <a href="./contacts" className='hover:bg-zinc-400'><li>Contacts</li></a>
            <a href="./support" className='hover:bg-zinc-400'><li>Help</li></a>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <a href="./register"><button className='px-8 py-2 bg-transparent  hover:text-blue-600 border-2 font-bold mr-4'>Sign In</button></a>
          <a href="./register"><button className='px-8 py-2  hover:text-blue-600 font-bold'>Sign Up</button></a>
        </div>
        <div className='md:hidden xl:hidden' onClick={handleClick}>
          {!navb ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hover:text-white w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg> :
            <span className="text-bold text-5xl text-yellow-600 hover:text-red-500 cursor-default">&times;</span>
          }

        </div>
      </div>

      <ul className={!navb ? 'hidden' : 'abosolute bg-slate-600 w-full px-8'}>
        <a href="./"><li className='border-b-2 border-[#6d71708f] text-white hover:bg-indigo-900 w-full'>Home</li></a>
        <a href="./Services"><li className='border-b-2 border-[#6d71708f] hover:bg-indigo-900 text-white w-full'>Services</li> </a>
        <a href="./About"><li className='border-b-2 border-[#6d71708f] hover:bg-indigo-900 text-white w-full'>About Us </li></a>
        <a href="./Contacts"><li className='border-b-2 border-[#6d71708f] hover:bg-indigo-900 text-white w-full'>Contacts </li></a>
        <a href="./Support"><li className='border-b-2 border-[#6d71708f] hover:bg-indigo-900 text-white w-full'>Help </li></a>

        <div className='flex pr-4 flex-col py-4'>
          <a href="./login"><button className='border-1 hover:border-white bg-transparent px-8 py-2 mb-4 text-black mr-4 w-full'>Sign In</button></a>
          <a href="./register"><button className='px-8 py-2 hover:border-white w-full'>Sign Up</button></a>
        </div>
      </ul>

    </nav >
  )
}

export default NavBAr
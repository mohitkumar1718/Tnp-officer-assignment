import React, { useState } from 'react'

const Navbar = () => {
    let Links =[
        {name:"HOME",link:"/"},
        {name:"Internship",link:"/"},
        {name:"Mock Tests",link:"/"},
        {name:"Learning ",link:"/"},
        {name:"About ",link:"/"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md border-b-2 w-full fixed top-0 left-0 px-10 lg:px-20 text-2xl'>
           <div className='lg:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <img src="/logo2.png" className='h-12 w-44' alt="" />
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer lg:hidden w-7 h-7'>
               { open?<img className='duration-500' src="/cross.png" alt="" />:<img className='duration-500' src="/menu.png" alt="" />}
            </div>
            {/* linke items */}
            <ul className={`lg:flex  lg:items-center mx-auto  lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-20 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='lg:ml-8 lg:my-0 my-7 font-semibold'>
                        <a href={link.link} className='text-indigo-900 font-bold  '>{link.name}</a>
                    </li>))
                }
            {/* button */}
                <button className=' bg-indigo-900  text-white lg:ml-20 px-3 py-1 rounded-2xl duration-500 md:static'>Get Started</button>
            </ul>
           </div>
        </div>
    );
}

export default Navbar
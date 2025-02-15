import React from 'react'
import logo from '../assets/logo.svg'
import facebook from '../assets/facebook_icon.svg'
import twitter from '../assets/twitter_icon.svg'
import instagram from '../assets/instagram_icon.svg'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20 '>
         <img src={logo} width={150}/>

         <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @Siva Bhavana | All right reserved.</p>

         <div className='flex gap-2.5'>
            <img src={facebook} width={35}/>
            <img src={twitter} width={35}/>
            <img src={instagram} width={35}/>
         </div>
    </div>
  )
}

export default Footer
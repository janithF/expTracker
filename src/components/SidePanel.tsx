import React from 'react'
import icon from '../assets/img/icons/icon.svg'

const SidePanel = () => {
  return (
    <div id='sidepanel' className='flex flex-col items-center'>
        <img src={icon} alt="icon" className='w-[250px]'/>
        <h2>SidePanel</h2>
    </div>
  )
}

export default SidePanel
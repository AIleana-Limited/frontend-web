'use client'
import React, {useState} from 'react'
import Navigation from './Navigation'
import Image from 'next/image'
import { ArrowRight, PanelLeft } from 'lucide-react'

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <aside className={`hidden px-4 py-8 md:block shrink-0 "
    ${collapsed ? "w-85" : "w-30"}`}>
    <div className=" pb-10 flex flex-col gap-8 ">
      <div className='flex justify-between items-center'>
        {
          collapsed ? <Image src='/logo.svg' width={120} height={120} alt='Logo' className='ml-4' />
          :
           <Image src='/favicon.svg' width={40} height={40} alt='Favicon' className='ml-4' />
        }
        {
          collapsed ? 
        <PanelLeft className='w-6 h-6' onClick={() => setCollapsed(!collapsed)}/>
        :
        <ArrowRight className='w-6 h-6' onClick={() => setCollapsed(!collapsed)}/>
        }
      </div>
        <Navigation collapse={collapsed}/>
        </div>
              </aside>
  )
}

export default Sidebar

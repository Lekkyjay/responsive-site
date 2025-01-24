'use client'

import { navLinks } from '@/lib/navLinks';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GrTechnology } from 'react-icons/gr';
import { HiBars3BottomRight } from 'react-icons/hi2';

interface IProps {
  openNav: () => void
}

export default function Navbar({ openNav }: IProps) {
  const [navBg, setNavBg] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true)
      } 
      else {
        setNavBg(false)
      }
    }     

    window.addEventListener('scroll', handler)

    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div className={`transition-all duration-200 h-[8vh] z-[100] fixed w-full ${navBg ? 'bg-white shadow-md' : 'bg-white'}`}>
      <div className="flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-800 rounded-full">
            <GrTechnology className="text-white w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold hidden sm:block md:text-2xl text-blue-800">
            TechDev
          </h1>
        </div>
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.url} className="text-black font-semibold hover:text-rose-500 transition-all duration-200">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#" className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
            Create Account
          </Link>
          <HiBars3BottomRight className="text-black cursor-pointer w-8 h-8 lg:hidden" onClick={openNav} />
        </div>
      </div>
    </div>
  )
}
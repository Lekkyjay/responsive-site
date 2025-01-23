'use client'

import { useState } from 'react'
import MobileNav from './MobileNav'
import Navbar from './Navbar'

export default function ResponsiveNav() {
  const [showNav, setShowNav] = useState(false)

  const openNavHandler = () => setShowNav(true)
  const closeNavHandler = () => setShowNav(false)

  return (
    <div>
      <Navbar openNav={openNavHandler} />
      <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  )
}
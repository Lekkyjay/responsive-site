import { navLinks } from '@/lib/navLinks'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

interface IProps {
  showNav: boolean,
  closeNav: () => void
}

export default function MobileNav({ showNav, closeNav }: IProps) {
  const navOpen = showNav ? 'translate-x-0' : '-translate-x-full'

  return (
    <div>
      <div className={`${navOpen} fixed inset-0 transform transition-all duration-500 z-[102] bg-black opacity-70`}></div>
      <div className={`${navOpen} fixed flex flex-col justify-center h-full bg-blue-900 text-white transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] space-y-6 z-[105]`}>
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url} className="text-black font-semibold hover:text-rose-500 transition-all duration-200">
            <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}
        <CgClose className="absolute top-5 right-5 cursor-pointer sm:w-8 sm:h-8 w-6 h-6" onClick={closeNav} />
      </div>      
    </div>
  )
}
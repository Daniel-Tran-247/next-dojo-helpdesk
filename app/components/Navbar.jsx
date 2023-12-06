import Link from 'next/link'
import Image from 'next/image'
import Logo from '../assets/images/dojo-logo.png' 

export default function Navbar() {
  return (
    <nav>
        <Link href="/"><Image src={Logo} alt="Dojo Logo" width={70} 
        quality={100} /><span>Dojo Desktop</span></Link>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
    </nav>
  )
}

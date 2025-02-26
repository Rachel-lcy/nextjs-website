import Link from "next/link"
import Image from "next/image"
import Logo from './logo.png'

export default function Navbar() {
  return (
    <nav>
      <Image 
        src={Logo}
        alt='Rachel logo'
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>Rachel Website</h1>
      <Link href='/'>Dashboard</Link>
      <Link href='/tickets'>Tickets</Link>
  </nav>
  )
}

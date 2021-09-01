import Image from 'next/image'
import logo from '../../../public/logo.png'
import { VFC } from 'react'

const Logo: VFC = () => (
  <div className="w-24">
    <Image src={logo} priority alt="logo of survaq" />
  </div>
)

export default Logo

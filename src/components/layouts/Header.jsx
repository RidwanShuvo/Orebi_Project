import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import List from '../List'
import Image from '../Image'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
  <nav className='border-y border-borderColor '>
    
      <Container className="p-8 ">
        <Flex>
      
      <div className="w-[5%]">
        <Image src={Logo}/>
      </div>
      <div className="w-[95%]">
      <ul>
          <Flex className="justify-center gap-5">
          <List href="/" text="Home"/>
            <List href="shop" text="Shop"/>
            <List href="#"text="About"/>
            <List href="contact"text="Contacts"/>
            <List href="#"text="Journal"/>
          </Flex>
       </ul>
      </div>
      
        </Flex>
      </Container>
      
  </nav>
  )
}

export default Header
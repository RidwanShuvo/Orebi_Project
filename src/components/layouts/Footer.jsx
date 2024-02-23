import React from 'react'
import Container from '../Container'
import List from '../List'
import Flex from '../Flex'
import Image from '../Image'
import Logo2 from '../../assets/logo2.png'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <section>
        <Container>
         <Flex className="pb-[65px] bg-[#F5F5F3]">
         <div className="w-[10%]">
            <p className="text-base font-bold font-'dm' text-primaryColor pb-[17px]">MENU</p>
            <ul>
            <List text="Home"/>
            <List text="Shop"/>
            <List text="About"/>
            <List text="Contact"/>
            <List text="Journal"/>
            </ul>
            </div>
            <div className="w-[15%]">
            <p className="text-base font-bold font-'dm' text-primaryColor pb-[17px]">SHOP</p>
            <ul>
            <List text="Category 1"/>
            <List text="Category 2"/>
            <List text="Category 3"/>
            <List text="Category 4"/>
            <List text="Category 5"/>
            </ul>
            </div>
            <div className="w-[15%]">
            <p className="text-base font-bold font-'dm' text-primaryColor pb-[17px]">HELP</p>
            <ul>
            <List text="Privacy Policy"/>
            <List text="Terms & Conditions"/>
            <List text="Special E-shop"/>
            <List text="Shipping"/>
            <List text="Secure Payments"/>
            </ul>
            </div>
            <div className="w-[30%]">
            <p className="text-base font-bold font-'dm' text-primaryColor">(052) 611-5711</p>
            <p className="text-base font-bold font-'dm' text-primaryColor pb-[17px]">company@domain.com</p>
            <ul>
            <List text="575 Crescent Ave. Quakertown, PA 18951"/>
            </ul>
            </div>
            <div className="w-[30%]">
            <Image src={Logo2}/>
            </div>
         </Flex>
         <Flex className="pb-[52px] bg-[#F5F5F3]">
         <div className="w-[70%]">
         <Flex className="gap-4">
         <FaFacebookF />
         <FaLinkedinIn />
         <FaInstagram />
         </Flex>
         </div>
         <div className="w-[30%]">
         <List text="2020 Orebi Minimal eCommerce Figma Template by Adveits"/>
         </div>
         </Flex>
        </Container>
    </section>
  )
}

export default Footer
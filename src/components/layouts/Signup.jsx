import React from 'react'
import axios from "axios";
import {useState, useEffect} from "react";
import Container from '../Container'
import Header from './Header'
import Category from './Category'
import Label from '../Label'
import Input from '../Input'
import Flex from '../Flex'
import { PiSquareThin } from "react-icons/pi";
import Footer from './Footer'


const Signup = () => {
  let [all, setAll] = useState([])
  useEffect(()=>{
    async function all (){
      let data = await axios.get("https://restcountries.com/v3.1/all");
      setAll(data.data)
    }
  },[])
  return (
    <section>
        <Container>
            <Header/>
            <Category/>
            <div className="w-[100%]  relative ">
    <div className="w-[102px] h-4 left-[2px] top-[130px] absolute justify-center items-center inline-flex">
        <div className="text-neutral-500 text-xs font-normal font-['DM Sans']">Home--Sign up</div>
    </div>
    <div className="w-[217px] h-16 pr-px left-0 top-0 absolute justify-center items-center inline-flex">
        <div className="text-neutral-800 text-[49px] font-bold font-['DM Sans'] pt-20 pr-[30px]">Sign up</div>
    </div>
    
    <div className='pt-[260px] pr-[772px] border-y border-borderColor pb-[100px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</div>
    </div>
    <div className=" border-y border-borderColor">
    <div className="text-[39px] font-bold font-'dm' py-10 ">Your Personal Details</div>
    <div className='py-10'>
      <Flex>
      <div className="w-1/2">
        <Label labelName="First Name"/>
        <Input inType="text" inPh="First Name"/>
      </div>
      <div className="w-1/2 ml-[40px]">
      <Label labelName="Last Name"/>
        <Input inType="text" inPh="Last Name"/>
      </div>
      </Flex>
    </div>
    <div className='pt-10 pb-[100px] '>
      <Flex>
      <div className="w-1/2">
        <Label labelName="Email address"/>
        <Input inType="email" inPh="company@domain.com"/>
      </div>
      <div className="w-1/2 ml-[40px]">
      <Label labelName="Telephone"/>
        <Input inType="number" inPh="Your phone number"/>
      </div>
      </Flex>
    </div>
    </div>
    <div className=" border-y border-borderColor ">
    <div className="text-[39px] font-bold font-'dm' py-10 ">New Customer</div>
    <div className='py-10'>
      <Flex>
      <div className="w-1/2">
        <Label labelName="Address 1"/>
        <Input inType="url" inPh="4279 Zboncak Port Suite 6212"/>
      </div>
      <div className="w-1/2 ml-[40px]">
      <Label labelName="Address 2"/>
        <Input inType="url" inPh=""/>
      </div>
      </Flex>
    </div>
    <div className='pt-10 pb-10'>
      <Flex>
      <div className="w-1/2">
        <Label labelName="City"/>
        <Input inType="text" inPh="Your city"/>
      </div>
      <div className="w-1/2 ml-[40px]">
      <Label labelName="Post Code"/>
        <Input inType="number" inPh="05228"/>
      </div>
      </Flex>
    </div>
    <div className='pt-10 pb-[100px] '>
      <Flex>
      <div className="w-1/2">
      
        <Label labelName="Country"/>
        <Input inType="text" inPh="Please select"/>
       
      </div>
      <div className="w-1/2 ml-[40px]">
      <Label labelName="Region"/>
        <Input inType="text" inPh="Please select"/>
      </div>
      </Flex>
    </div>
    </div>
    <div className=" border-y border-borderColor pb-[80px]">
    <div className="text-[39px] font-bold font-'dm' py-10 ">Your Password</div>
    <div className='py-10'>
      <Flex>
      <div className="w-1/2">
        <Label labelName="Password"/>
        <Input inType="password" inPh="Password"/>
      </div>
      <div className="w-1/2 ml-[40px]">
      <Label labelName="Repeat Password"/>
        <Input inType="password" inPh="Repeat password"/>
      </div>
      </Flex>
    </div>
    </div>
    <div className="py-[150px]">
    <Flex className="gap-4 items-center">
    <PiSquareThin />
    <h1 className=" text-sm font-normal font-'dm' text-listColor">I have read and agree to the Privacy Policy</h1>
    </Flex>
    <button className="w-[185px] h-[50px] left-[54px] top-[2200px] absolute bg-neutral-800">
        {/* <button className="w-[185px] h-[50px] left-0 bottom-[100px] absolute " /> */}
        <div className="left-[70px] top-[16px] absolute text-center text-white text-sm font-bold font-'dm'">Log in</div>
    </button>
    </div>
    <Footer/>
        </Container>
    </section>
  )
}

export default Signup
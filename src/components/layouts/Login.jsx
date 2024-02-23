import React from 'react'
import Header from './Header'
import Container from '../Container'
import Category from './Category'
import Label from '../Label'
import Input from '../Input'
import Flex from '../Flex'
import Footer from './Footer'

const Login = () => {
  return (
    <section>
        <Container>
        <Header/>
            <Category/>
            <div className="w-[100%]  relative ">
    <div className="w-[102px] h-4 left-[2px] top-[130px] absolute justify-center items-center inline-flex">
        <div className="text-neutral-500 text-xs font-normal font-['DM Sans']">Home--Login</div>
    </div>
    <div className="w-[217px] h-16 pr-px left-0 top-0 absolute justify-center items-center inline-flex">
        <div className="text-neutral-800 text-[49px] font-bold font-['DM Sans'] pt-20 pr-[65px]">Login</div>
    </div>
    
    <div className='pt-[260px] pr-[772px] border-y border-borderColor pb-[100px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</div>
    </div>
    <div className=" border-y border-borderColor pb-[80px]">
    <div className="text-[39px] font-bold font-'dm' py-10 ">Returning Customer</div>
    <div className='py-10'>
      <Flex>
      <div className="w-1/2">
        <Label labelName="Email address"/>
        <Input inType="email" inPh="company@domain.com"/>
      </div>
      <div className="w-1/2 ml-[40px]">
      <Label labelName="Password"/>
        <Input inType="password" inPh=""/>
      </div>
      </Flex>
    </div>
    </div>
    <div className='border-y border-borderColor pb-[200px]'>
    <button className="w-[185px] h-[50px] left-[54px] top-[1000px] absolute bg-listColor rounded-lg hover:bg-black ">
        <div className="left-[70px] top-[16px] absolute text-center text-white text-sm font-bold font-'dm' hover:text-white">Log in</div>
    </button>
    </div>
    <div className=" pb-[140px]">
    <div className="text-[39px] font-bold font-'dm'">New Customer</div>
    <div className='pt-[60px] pr-[772px] pb-[60px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</div>
    <button className="w-[185px] h-[50px] left-[54px] top-[1380px] absolute bg-listColor rounded-lg hover:bg-black ">
        <div className="left-[70px] top-[16px] absolute text-center text-white text-sm font-bold font-'dm' hover:text-white">Continue</div>
    </button>
    </div>
    <Footer/>
        </Container>
    </section>
  )
}

export default Login
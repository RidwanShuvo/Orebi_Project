import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Banner1 from '../../assets/banner1.png'


const Banner = () => {
  return (
   <a href="#">
     <section className="bg-[#0000] border-y border-borderColor"> 
        <Container>
            <Flex>
            <div className="relative w-full h-[475px]">
         <img src={Banner1} alt="Banner" className="w-full " />
         <div className="absolute top-[38%] left-1/20">
         <p className="text-[#262626] text-[10px] font-normal font-'dm' ml-[95px] mt-[45px]">01</p>
         </div>
         <div className="w-0.5 h-[120px] relative">
    <div className="w-0.5 h-[120px] left-[115px] top-[-256px] absolute bg-white" />
    <div className="w-0.5 h-[30px] left-[115px] top-[-256px] absolute bg-neutral-800" />
    </div>


    <div className="w-[185px] h-[50px] left-[200px] top-[350px] absolute">
        <div className="w-[185px] h-[50px] left-0 top-0 absolute bg-neutral-800" />
        <div className="left-[59px] top-[16px] absolute text-center text-white text-sm font-bold font-'dm'">Shop Now</div>
    </div>
    <div className="pr-px left-[200px] top-[250px] pb-[40px] absolute justify-center items-center gap-2 inline-flex">
        <div className=" text-base font-normal font-'dm'">Up to</div>
        <div className="text-[40px] font-bold font-'dm'">50%</div>
        <div className=" text-base font-normal font-'dm'">sale for all furniture items!</div>
    </div>
    <div className="left-[200px] top-[150px] pb-[25px] absolute  text-[49px] font-bold font-'dm'">Final Offer</div>
</div>


            </Flex>
        </Container>
    </section>
   </a>
  )
}

export default Banner

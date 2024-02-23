import React from 'react'
import Container from '../Container'
import BestOne from '../../assets/BestOne.png'
import BestTwo from '../../assets/BestTwo.png'
import BestThree from '../../assets/BestThree.png'
import BestFour from '../../assets/BestFour.png'
import BadgeNew from '../BadgeNew'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { BiRefresh } from "react-icons/bi";
import Flex from '../Flex'
import Basic from '../Basic'
import Pricing from '../Pricing'
import Image from '../Image';

const BestSeller = () => {
  return (
    <section>
    <Container className="pb-[130px]">
   <div className="text-start font-bold font-'dm' pb-12">Our Bestsellers</div>
   <Flex>
        <div className="w-[1/4] relative group">
        <Image src={BestOne}/>
        <BadgeNew text="New" className="absolute top-5 left-7"/>
        <div className="bg-white w-full h-21 absolute top-52 pr-8 invisible group-hover:visible overflow-y-auto duration-500">
        <Flex className="justify-end items-center gap-3.5 pt-6">
        <p className="text-base font-normal text-listColor font-'dm'">Add to Wish List</p>
        <FaHeart />
        </Flex>

       <Flex className="justify-end items-center gap-3.5 py-5">
       <p className="text-base font-normal text-listColor font-'dm'">Compare</p>
       <BiRefresh />
       </Flex>
        
     
      <Flex className="justify-end items-center gap-3.5">
      <p className="text-base font-bold text-primaryColor font-'dm'">Add to Cart</p>
      <FaShoppingCart />
      </Flex>
    
      </div>
      <Flex className="items-center justify-between pb-5 pt-8">
     <Basic text="Basic Crew Neck Tee"className="" />
      <Pricing text="$44.00" className="text-base font-normal font-'dm' text-listColor"/>
     </Flex>
      <p className="text-base font-normal text-listColor font-'dm'">Black</p>
        </div>
        <div className="w-[1/4] relative group px-5">
        <Image src={BestTwo}/>
        <BadgeNew text="New" className="absolute top-5 left-7"/>
        <div className="bg-white w-[89%] h-21 absolute top-52 pr-8 invisible group-hover:visible overflow-y-auto duration-500">
        <Flex className="justify-end items-center gap-3.5 pt-6">
        <p className="text-base font-normal text-listColor font-'dm'">Add to Wish List</p>
        <FaHeart />
        </Flex>

       <Flex className="justify-end items-center gap-3.5 py-5">
       <p className="text-base font-normal text-listColor font-'dm'">Compare</p>
       <BiRefresh />
       </Flex>
        
     
      <Flex className="justify-end items-center gap-3.5">
      <p className="text-base font-bold text-primaryColor font-'dm'">Add to Cart</p>
      <FaShoppingCart />
      </Flex>
    
      </div>
      <Flex className="items-center justify-between pb-5 pt-8">
     <Basic text="Basic Crew Neck Tee"className="" />
      <Pricing text="$44.00" className="text-base font-normal font-'dm' text-listColor"/>
     </Flex>
      <p className="text-base font-normal text-listColor font-'dm'">Black</p>
        </div>
        <div className="w-[1/4] relative group pr-5">
        <Image src={BestThree}/>
        <BadgeNew text="New" className="absolute top-5 left-7"/>
        <div className="bg-white w-full h-40 absolute top-52 pr-8 invisible group-hover:visible overflow-y-auto duration-500">
        <Flex className="justify-end items-center gap-3.5 pt-6">
        <p className="text-base font-normal text-listColor font-'dm'">Add to Wish List</p>
        <FaHeart />
        </Flex>

       <Flex className="justify-end items-center gap-3.5 py-5">
       <p className="text-base font-normal text-listColor font-'dm'">Compare</p>
       <BiRefresh />
       </Flex>
        
     
      <Flex className="justify-end items-center gap-3.5 pb-6">
      <p className="text-base font-bold text-primaryColor font-'dm'">Add to Cart</p>
      <FaShoppingCart />
      </Flex>
    
      </div>
      <Flex className="items-center justify-between pb-5 pt-8">
     <Basic text="Basic Crew Neck Tee"className="" />
      <Pricing text="$44.00" className="text-base font-normal font-'dm' text-listColor"/>
     </Flex>
      <p className="text-base font-normal text-listColor font-'dm'">Black</p>
        </div>
        <div className="w-[1/4] relative group">
        <Image src={BestFour}/>
        <BadgeNew text="New" className="absolute top-5 left-7"/>
        <div className="bg-white w-full h-40 absolute top-52 pr-8 invisible group-hover:visible overflow-y-auto duration-500">
        <Flex className="justify-end items-center gap-3.5 pt-6">
        <p className="text-base font-normal text-listColor font-'dm'">Add to Wish List</p>
        <FaHeart />
        </Flex>

       <Flex className="justify-end items-center gap-3.5 py-5">
       <p className="text-base font-normal text-listColor font-'dm'">Compare</p>
       <BiRefresh />
       </Flex>
        
     
      <Flex className="justify-end items-center gap-3.5 pb-6">
      <p className="text-base font-bold text-primaryColor font-'dm'">Add to Cart</p>
      <FaShoppingCart />
      </Flex>
    
      </div>
      <Flex className="items-center justify-between pb-5 pt-8">
     <Basic text="Basic Crew Neck Tee"className="" />
      <Pricing text="$44.00" className="text-base font-normal font-'dm' text-listColor"/>
     </Flex>
      <p className="text-base font-normal text-listColor font-'dm'">Black</p>
        </div>
   </Flex>
    </Container>
   </section>
  )
}

export default BestSeller
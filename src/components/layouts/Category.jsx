import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Bar from '../icons/Bar'
import Paragraph from '../Paragraph'
import { FaSearch ,FaUser, FaCaretDown ,FaShoppingCart}  from "react-icons/fa"
import Shopmenu from '../Shopmenu'
import User from '../User'


const Category = () => {
  return (
    <section className="bg-categoryColor border-y border-borderColor">
      
        <Container className="">
           
        <Flex className="items-center">
                <div className="w-1/4 dropdown">
                <button>
                   {/* <Flex className="items-center gap-4 pl-6"> */}
                   
                   {/* <Bar/> */}
                   <Shopmenu/>
                    {/* <Paragraph className="text-sm text-primaryColor" text="Shop by Category"/> */}
                  
                    
                   {/* </Flex> */}
                   </button>
                  
                </div>
                
                
                <Flex className="w-1/2 text-center items-center justify-center p-6">
                    <input type="text" className="w-[600px] p-4 outline-none placeholder:text-placeColor placeholder:text-sm" placeholder='Search Products'/>
                    <FaSearch className='ml-[-40px]' />
                </Flex>
                <div className="w-1/4">
                <Flex className="justify-end">
                <User/>
                <FaShoppingCart className='mr-5 ml-10' />
                </Flex>
                </div>
                </Flex>
        </Container>
       
    </section>
  )
}

export default Category
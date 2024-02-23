import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Paragraph from '../Paragraph'
import { FaTruck, FaUndoAlt } from "react-icons/fa";
import { PiNumberTwoBold } from "react-icons/pi";

const Shipping = () => {
  return (
    <section className='border-y border-borderColor'>
        <Container>
            <Flex className="justify-center gap-[450px] p-8">
                <div className="w-[1/3]">
                 <Flex className=" gap-3 items-center">
                 <PiNumberTwoBold />
                  <Paragraph text="Two years warranty" className="text-base text-paragraphColor font-normal font-'dm'"/>
                 </Flex>
                </div>
                <div className="w-[1/3]">
                <Flex className=" gap-3 items-center">
                <FaTruck/>
                <Paragraph text="Free shipping" className="text-base text-paragraphColor font-normal font-'dm'"/>
                </Flex>
                </div>
                <div className="w-[1/3]">
                <Flex className=" gap-3 items-center">
                <FaUndoAlt />
                <Paragraph text="Return policy in 30 days" className="text-base text-paragraphColor font-normal font-'dm'"/>
                </Flex>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Shipping



import React from 'react'
import Container from '../Container'
import Image from '../Image'
import Ad_1 from '../../assets/Ad_1.png'
import Ad_2 from '../../assets/Ad_2.png'
import Ad_3 from '../../assets/Ad_3.png'
import Flex from '../Flex'

const Ads = () => {
  return (
    <Container className="py-32">
        <Flex className="gap-10">
        <div className="w-1/2 ">
        <a href="#"><Image src={Ad_1}/></a>
        </div>
        <div className="w-1/2">
            <div>
        <a href="#"><Image src={Ad_2}/></a>
        </div>
        <div className='pt-10'>
        <a href="#"><Image src={Ad_3}/></a>
        </div>
        </div>
    
       
      
        </Flex>
    </Container>
  )
}

export default Ads
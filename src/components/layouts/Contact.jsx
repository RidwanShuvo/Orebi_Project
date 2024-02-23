import React from 'react'
import Container from '../Container'
import Header from './Header'
import Category from './Category'

const Contact = () => {
  return (
    <section>
        <Container>
            <Header/>
            <Category/>
            <div className="w-[100%] h-[91px] relative">
    <div className="w-[102px] h-4 left-[2px] top-[130px] absolute justify-center items-center inline-flex">
        <div className="text-neutral-500 text-xs font-normal font-['DM Sans']">Home--Contacts</div>
    </div>
    <div className="w-[217px] h-16 pr-px left-0 top-0 absolute justify-center items-center inline-flex">
        <div className="text-neutral-800 text-[49px] font-bold font-['DM Sans'] pt-20">Contacts</div>
    </div>
    </div>
        </Container>
    </section>
  )
}

export default Contact
import React from 'react'
import Flex from '../Flex'
import List from '../List'
import {FaPlus} from "react-icons/fa";
const CategoryTwo = () => {
  return (
    <>
   <div className='border-b-2 border-red-500 pb-4'>
    <Flex className='justify-between'>
    <ul className='mt-[7px]'>
        <List text='category1'/>
    </ul>
    <FaPlus className='mt-[10px]'/>
   </Flex>
   </div>
    <div className='border-b-2 border-red-500 pb-4'>
    <Flex className='justify-between'>
    <ul className='mt-[7px]'>
        <List text='category2'/>
    </ul>
    <FaPlus className='mt-[10px]'/>
   </Flex>
   </div>
   <div className='border-b-2 border-red-500 pb-4'>
    <Flex className='justify-between'>
    <ul className='mt-[7px]'>
        <List text='category3'/>
    </ul>
    <FaPlus className='mt-[10px]'/>
   </Flex>
   </div>
   <div className='border-b-2 border-red-500 pb-4'>
    <Flex className='justify-between'>
    <ul className='mt-[7px]'>
        <List text='category4'/>
    </ul>
    <FaPlus className='mt-[10px]'/>
   </Flex>
   </div>
   <div className='border-b-2 border-red-500 pb-4'>
    <Flex className='justify-between'>
    <ul className='mt-[7px]'>
        <List text='category5'/>
    </ul>
    <FaPlus className='mt-[10px]'/>
   </Flex>
   </div>

   </>
  )
}

export default CategoryTwo
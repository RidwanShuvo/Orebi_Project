import React from 'react'
import Container from '../Container'
import Header from './Header'
import Category from './Category'
import BestOne from '../../assets/BestOne.png'
import BestTwo from '../../assets/BestTwo.png'
import BestThree from '../../assets/BestThree.png'
import BestFour from '../../assets/BestFour.png'
import BadgeNew from '../BadgeNew'
import { FaHeart, FaShoppingCart, FaCaretDown } from "react-icons/fa";
import { BiRefresh } from "react-icons/bi";
import { LuPlus } from "react-icons/lu";
import Flex from '../Flex';
import Paragraph from '../Paragraph';
import Basic from '../Basic'
import Pricing from '../Pricing'
import Image from '../Image';
import Footer from './Footer'
import { useRef ,useEffect} from "react"
import CategoryTwo from './CategoryTwo'

const Shop = () => {
  const dropRef = useRef(null);
  const btnRef = useRef(null);
  const dropRefOne = useRef(null);
  const btnRefOne = useRef(null);
  const dropRefTwo = useRef(null);
  const btnRefTwo = useRef(null);


  let handleClick = (dropRefCmn, btnRefCmn) => {
    const dropStyle = dropRefCmn.current.style;

    if (dropStyle.display === "block") {
      dropStyle.display = "none";
    } else {
      dropStyle.display = "block";
    }
  };

  let handleClickOutSite = (event, dropRefCmn, btnRefCmn) => {
    if (
      dropRefCmn.current &&
      !dropRefCmn.current.contains(event.target) &&
      !btnRefCmn.current.contains(event.target)
    ) {
      dropRefCmn.current.style.display = "none";
    }
  };

  useEffect(() => {
    document.addEventListener("click", (event) => {
      handleClickOutSite(event, dropRef, btnRef);
    });
    document.addEventListener("click", (event) => {
      handleClickOutSite(event, dropRefOne, btnRefOne);
    });
    document.addEventListener("click", (event) => {
      handleClickOutSite(event, dropRefTwo, btnRefTwo);
    });
    return () => {
      document.removeEventListener("click", (event) => {
        handleClickOutSite(event, dropRef, btnRef);
      });
      document.removeEventListener("click", (event) => {
        handleClickOutSite(event, dropRefOne, btnRefOne);
      });
      document.removeEventListener("click", (event) => {
        handleClickOutSite(event, dropRefTwo, btnRefTwo);
      });
    };
  }, []);
  return (
    <secion>
        <Container>
            <div>
            <Header/>
            <Category/>

            <div className="w-[100%] h-[91px] relative">
    <div className="w-[102px] h-4 left-[2px] top-[130px] absolute justify-center items-center inline-flex">
        <div className="text-neutral-500 text-xs font-normal font-['DM Sans']">Home--Products</div>
    </div>
    <div className="w-[217px] h-16 pr-px left-0 top-0 absolute justify-center items-center inline-flex">
        <div className="text-neutral-800 text-[49px] font-bold font-['DM Sans'] pt-20">Products</div>
    </div>
    </div>
    <Flex>
  <Flex>
  <div className="w-[30%] ">
    <div className="w-[372px]  relative flex-col justify-start items-start inline-flex pt-[200px]">
    <div className="text-neutral-800 text-xl font-bold font-['DM Sans']">Shop by Category</div>
    
    <div className="w-[300px]   relative ">
    
        <CategoryTwo/>
    </div>
    
    
  
</div>
<button onClick={() => {
                  handleClick(dropRef, btnRef);
                }}
                ref={btnRef}>
    <Flex className="items-center gap-44">
    
      <p className="text-xl font-bold font-'dm' w-[133px] text-primaryColor">Shop by Color</p>
      <FaCaretDown />
      </Flex>
    </button>
    <div className="hidden" ref={dropRef}>
     <ul className=" absolute top-[745px] z-50 w-[330px] h-auto bg-white  p-4 left-[50px] text-listColor pb-[30px] opacity:1; transform:none;">
      <li className="text-black text-opacity-70 pb-[15px] pr-72 text-base font-bold font-'dm' px-4 py-1 hover:px-[42px] hover:pe-[200px] hover:drop-shadow-lg border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-red-600 duration-700 cursor-pointer ">Red</li>
      <li className="text-black text-opacity-70 py-[15px] pr-72 text-base font-bold font-'dm' px-4  border-b-[1px] border-b-gray-400 hover:border-b-white  hover:text-green-600 duration-700 cursor-pointer hover:px-[42px] hover:pe-[200px]">Green</li>
      <li className="text-black text-opacity-70 pr-60 py-[15px] text-base font-bold font-'dm' px-4 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-yellow-600 duration-700 cursor-pointer hover:px-[42px] hover:pe-[200px] ">Yellow</li>
      <li className="text-black text-opacity-70 pr-60 py-[15px] text-base font-bold font-'dm' px-4  border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-blue-600 duration-700 cursor-pointer hover:px-[42px] hover:pe-[200px] ">Blue</li>
      <li className="text-black text-opacity-70 pr-60 py-[15px] text-base font-bold font-'dm' px-4 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-teal-600 duration-700 cursor-pointer hover:px-[42px] hover:pe-[200px] ">Teal</li>
      <li className="text-black text-opacity-70 pr-40 py-[15px] text-base font-bold font-'dm' px-4  border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-lime-600 duration-700 cursor-pointer hover:px-[40px] hover:pe-[150px] ">Lime</li>
     </ul>
     </div>
    </div>
    </Flex> 
    <div className="w-[70%] pt-[100px] pb-[250px]">
   <Flex>
        <div className="w-[1/4] relative group">
        <Image src={BestOne} className="justify-start "/>
        <BadgeNew text="New" className="absolute top-5"/>
        <div className="bg-white w-full h-25 absolute top-60 pr-8 invisible group-hover:visible overflow-y-auto duration-500">
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
   
   </Flex>

            </div>
    <div className="w-[80%] pt-[100px] pb-[250px]">
   <Flex>
        <div className="w-[1/4] relative group">
        <Image src={BestTwo} className="justify-start "/>
        <BadgeNew text="New" className="absolute top-5"/>
        <div className="bg-white w-full h-25 absolute top-60 pr-8 invisible group-hover:visible overflow-y-auto duration-500">
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
   
   </Flex>

            </div>
    {/* <div className="w-[30%] pb-[300px] ">
    <button onClick={handleDrop}>
    <Flex className="items-center gap-44 ">
    
      <p className="text-xl font-bold font-'dm' text-primaryColor">Shop by Color</p>
      <FaCaretDown />
      </Flex>
    </button>
    <div className="hidden" ref={dropRef}>
     <ul className=" absolute top-[745px] z-50 w-[330px] h-auto bg-white  p-4 left-[50px] text-listColor pb-[30px] opacity:1; transform:none;">
      <li className="text-black text-opacity-70 pb-[15px] pr-72 text-base font-bold font-'dm' px-4 py-1 hover:px-[42px] hover:pe-[200px] hover:drop-shadow-lg border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-red-600 duration-700 cursor-pointer ">Red</li>
      <li className="text-black text-opacity-70 py-[15px] pr-72 text-base font-bold font-'dm' px-4  border-b-[1px] border-b-gray-400 hover:border-b-white  hover:text-green-600 duration-700 cursor-pointer hover:px-[42px] hover:pe-[200px]">Green</li>
      <li className="text-black text-opacity-70 pr-60 py-[15px] text-base font-bold font-'dm' px-4 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-yellow-600 duration-700 cursor-pointer hover:px-[42px] hover:pe-[200px] ">Yellow</li>
      <li className="text-black text-opacity-70 pr-60 py-[15px] text-base font-bold font-'dm' px-4  border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-blue-600 duration-700 cursor-pointer hover:px-[42px] hover:pe-[200px] ">Blue</li>
      <li className="text-black text-opacity-70 pr-60 py-[15px] text-base font-bold font-'dm' px-4 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-teal-600 duration-700 cursor-pointer hover:px-[42px] hover:pe-[200px] ">Teal</li>
      <li className="text-black text-opacity-70 pr-40 py-[15px] text-base font-bold font-'dm' px-4  border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-lime-600 duration-700 cursor-pointer hover:px-[40px] hover:pe-[150px] ">Lime</li>
     </ul>
     </div>
    </div> */}
   
            </Flex>
            <div className="w-full">
                <Footer/>
            </div>
            </div>
        </Container>
    </secion>
  )
}

export default Shop
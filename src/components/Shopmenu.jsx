import React from 'react'
import  { useRef, useState,useEffect } from 'react';
import Flex from './Flex';
import Bar from './icons/Bar';
import Paragraph from './Paragraph';





const Shopmenu = () => {
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


//  let dropRef = useRef(null);
//  let handleDrop = () => {
//   if(dropRef.current.style.display == "block") {
//     dropRef.current.style.display = "none"
//   }
//   else{
//     dropRef.current.style.display = "block"
//   }
//  };

 
  return (
    <>
   
      <div >
    <button>
    
    <div onClick={() => {
                  handleClick(dropRef, btnRef);
                }}
                ref={btnRef}
              >
    <Flex className="items-center gap-4 pl-6">
      <Bar/>
      
      <Paragraph className="text-sm text-primaryColor" text="Shop by Category"/>
      </Flex>
      </div>
    
    </button>
    </div>
    <div className="hidden " ref={dropRef}>
     <ul className=" absolute top-44 z-50 w-[330px] h-auto bg-black p-4 left-[80px] text-listColor pb-[30px] opacity:1; transform:none;dropdown-menu">
      <li className="text-gray-400 text-opacity-70 pb-[15px] pr-72 text-sm font-normal font-'dm' px-4 py-1 hover:px-[42px] hover:pe-[200px] hover:drop-shadow-lg border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-700 cursor-pointer" >Accesories</li>
      <li className="text-gray-400 text-opacity-70 py-[15px] pr-72 text-sm font-normal font-'dm' px-4  border-b-[1px] border-b-gray-400 hover:border-b-white  hover:text-white duration-700 cursor-pointer hover:px-[42px] hover:pe-[200px]">Furniture</li>
      <li className="text-gray-400 text-opacity-70 pr-60 py-[15px] text-sm font-normal font-'dm' px-4 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-700 cursor-pointer hover:px-[42px] hover:pe-[200px] ">Electronics</li>
      <li className="text-gray-400 text-opacity-70 pr-60 py-[15px] text-sm font-normal font-'dm' px-4  border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-700 cursor-pointer hover:px-[42px] hover:pe-[200px] ">Clothes</li>
      <li className="text-gray-400 text-opacity-70 pr-60 py-[15px] text-sm font-normal font-'dm' px-4 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-700 cursor-pointer hover:px-[42px] hover:pe-[200px] ">Bags</li>
      <li className="text-gray-400 text-opacity-70 pr-40 py-[15px] text-sm font-normal font-'dm' px-4  border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-700 cursor-pointer hover:px-[40px] hover:pe-[150px] ">Home appliances</li>
     </ul>
     </div>

    </>
  )
}


export default Shopmenu
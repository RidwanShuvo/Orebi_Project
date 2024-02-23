import React from 'react'
import { useRef ,useEffect} from "react"
import {FaUser, FaCaretDown}  from "react-icons/fa"
import Flex from './Flex';

const User = () => {
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
    <>
    <button onClick={() => {
                  handleClick(dropRef, btnRef);
                }}
                ref={btnRef}>
    <Flex>
    <FaUser />
     <FaCaretDown />
    </Flex>
    </button>
    <div className=" hidden" ref={dropRef}>
      <ul className=" absolute top-44 z-50 w-[130px] h-auto bg-black  right-[114px] text-listColor pb-[10px] opacity:1; transform:none;">
      <li className="text-gray-400 text-opacity-70 pb-[15px] pr-48 text-sm font-normal font-'dm' px-1 py-2 hover:drop-shadow-lg  hover:text-white duration-700 cursor-pointer ml-[38px]"><a href="signup">Signup</a></li>
        
      <li className="text-gray-400 text-opacity-70 pb-[15px] pr-48 text-sm font-normal font-'dm' px-1   hover:drop-shadow-lg  hover:text-white duration-700 cursor-pointer ml-[43px]"><a href="login">Login</a></li>
        
      </ul>
    </div>
    </>
  )
}

export default User
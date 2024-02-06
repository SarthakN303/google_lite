import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import Logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { Context } from "../utils/Context";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {
    const [selectedMenu, setSelectedMenu] = useState("All")

    const {setImageSearch} = useContext(Context);

    useEffect(()=>{
        return()=> setImageSearch(false)
    },[])

    const clickHandler =(menuItem)=>{
        let isTypeImage = menuItem.name === "Images"
        setImageSearch(isTypeImage ? true : false)
        setSelectedMenu(menuItem.name)
    }
  return (
    <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 flex md:block flex-col items-center sticky top-0 bg-slate-900">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center grow">
          <Link to="/">
            <img src={Logo} className="hidden md:block w-[92px] mr-10" alt="" />
          </Link>
          <SearchInput />
        </div>
        <div className="hidden md:block">
          <ProfileIcon />
        </div>
      </div>

      <div className="flex ml-[-12px] mt-3">
        {menu.map((menu,index)=>(
            <span onClick={()=>clickHandler(menu)} key={index} className={`flex items-center p-3 text-white cursor-pointer relative ${selectedMenu === menu.name ? "text-[#1a73e8]" : ""}`}>
                <span className="hidden md:block mr-2">
                    {menu.icon}
                </span>
                <span className="text-sm">
                    {menu.name}
                </span>
                {selectedMenu === menu.name && (
                    <span className="h-[3px] w-[calc(100%-20px)] absolute bg-[#1a73e8] bottom-0 left-[10px]"/>
                )}
            </span>
        ))}
      </div>
    </div>
  );
};

export default SearchResultHeader;

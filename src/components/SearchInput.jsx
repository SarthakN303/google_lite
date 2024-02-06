import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
  const {query} = useParams()
  const [searchQuery, setSearchQuery] = useState(query || "");

  const navigate = useNavigate()
  const searchQueryHandler = (event)=>{
      if(event.key === "Enter" && searchQuery.length > 0){
        navigate(`/${searchQuery}/${1}`)
      }
  }
  return (
    <div
      id="searchBox"
      className="flex h-[46px] w-full md:w-[584px] items-center gap-3 px-4 border border-slate-400 rounded-3xl hover:bg-white bg-white
      focus-within:shadow-sm focus-within:border-0"
    >
      <AiOutlineSearch size={19} color="black" />
      <input
        type="text"
        onChange={(e) => {
          setSearchQuery(e.target.value)
        }}
        onKeyUp={searchQueryHandler}
        value={searchQuery}
        className="grow  outline-0 text-black/[0.82]"
        autoFocus
      />
      <div className="flex items-center gap-3">
        {searchQuery && <div>
          <IoMdClose size={23} color="#70757a" className="cursor-pointer" onClick={()=>setSearchQuery("")}/>
          </div>}
        <img className="h-6 w-6 cursor-pointer" src={MicIcon} alt="" />
        <img className="h-6 w-6 cursor-pointer" src={ImageIcon} alt="" />
      </div>
    </div>
  );
};

export default SearchInput;

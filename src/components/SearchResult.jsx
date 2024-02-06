import { useState,useEffect,useContext } from "react"
import {useParams} from "react-router-dom"
import SearchResultHeader from "./SearchResultHeader"
import { fetchDataFromApi } from "../utils/api"
import { Context } from "../utils/Context"
import SearchedResultTemplate from "./SearchedResultTemplate"
import SearchedImageItemTemplate from "./SearchedImageItemTemplate"
import Pagination from "./Pagination"

const SearchResult = () => {
   const [result,setResult] = useState()
   const {query,startIndex} = useParams()
   const {imageSearch} = useContext(Context);

   useEffect(()=>{
      fetchedSearchResult()
   },[query,startIndex,imageSearch])

   const fetchedSearchResult = ()=>{
       let payload = {q:query, start:startIndex}
       if(imageSearch){
        payload.searchType = "image"
       }
       fetchDataFromApi(payload).then((res)=>{
         setResult(res)
       })
   }

   if(!result) return;
   const {items,queries,searchInformation} = result
  return (
    <div className="flex flex-col min-h-[100vh] bg-slate-900">
     <SearchResultHeader/>
     <main className="grow p-[12px] pb-0 md:pr-5 md:pl-20">
      <div className="flex text-sm text-white mb-3">
         {`About ${searchInformation.formattedTotalResults} results in (${searchInformation.formattedSearchTime})`}
      </div>
      {!imageSearch ? (
          <>
            {items.map((item, index) => (
              <SearchedResultTemplate key={index} data={item} />
            ))}
          </>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
            {items.map((item, index) => (
              <SearchedImageItemTemplate key={index} data={item} />
            ))}
          </div>
        )}
        <Pagination queries={queries}/>
     </main>
    </div>
  )
}

export default SearchResult
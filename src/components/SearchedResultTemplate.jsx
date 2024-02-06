

const SearchedResultTemplate = ({data}) => {
    function createMarkup(html){
        return {__html:html}
    }
  return (
    <div className="flex flex-col py-3 max-w-[700px]">
        <div className="grow cursor-pointer" onClick={()=> window.open(data.link)}>
            <div className="text-sm truncate text-grey-600">
                {data.formattedUrl}
            </div>
            <div className="hover:underline text-xl text-blue-400 pt-2">{data.title}</div>
        </div>
        <div className="text-sm text-[#4d5156] leading-6 pt-1" dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)}/>
    </div>
  )
}

export default SearchedResultTemplate
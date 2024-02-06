import ProfileIcon from "./ProfileIcon"


const HomeHeader = () => {
  return (
    <header className="flex h-16 justify-between md:justify-end px-5 items-center gap-4">
        <div className="flex gap-4">
            <span className="cursor-pointer line-height text-[15px] hover:underline">Gmail</span>
            <span className=" cursor-pointer line-height text-[15px] hover:underline">Images</span>
        </div>
        <ProfileIcon/>
    </header>
  )
}

export default HomeHeader
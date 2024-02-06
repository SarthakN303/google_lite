import HomeHeader from "./HomeHeader";
import Logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";


const Home = () => {
  return (
    <div className="flex h-[100vh] flex-col bg-slate-900">
      <HomeHeader />
      <main className="grow flex justify-center-center ">
        <div className="w-full mt-44 flex flex-col items-center px-5">
          <img className="w-[172px] md:w-[272px] mb-8" src={Logo} alt="" />
          <SearchInput />
          <div className="flex gap-2 text-[#3c4043] mt-8">
            <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] ">
              Google Search
            </button>

            <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] ">
              How are you ?
            </button>
          </div>
        </div>
      </main>
  
    </div>
  );
};

export default Home;

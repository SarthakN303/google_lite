import { TbGridDots } from "react-icons/tb";

const ProfileIcon = () => {
  return (
    <div className="flex gap-2">
      <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-white/[0.15]">
        <TbGridDots size={20} />
      </span>
      <span className="h-10 w-10 flex items-center justify-center cursor-pointer">
        <h3 className="bg-slate-700 text-white text-2xl px-2 rounded-full">
          S
        </h3>
      </span>
    </div>
  );
};

export default ProfileIcon;

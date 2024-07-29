import Logo from "./MetaBlog.svg";
// import TextField from "@mui/material/TextField"
import SearchLogo from "./search-outline.svg";

export const Navbar = () => {
  return (
    <div className=" flex justify-between items-start gap-[10px] max-[1917px] py-8 ">
      <img src={Logo} className="min-w-[158px] min-h-[36px]"></img>
      <div className="flex items-center gap-[21px]">
        <div className="flex w-[667px] justify-center items-center gap-10">
          <p>Home</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="flex w-[166px] p-2 items-center gap-3 rounded-md bg-[#F4F4F5]">
          <input className="text-[#A1A1AA] text-sm font-mono font-normal"></input>
          <img src={SearchLogo} className="w-4 h-4"></img>
        </div>
      </div>
    </div>
  );
};

import Facebook from "./Facebook.svg"
import Twitter from "./Twitter.svg"
import Instagram from "./Ig.svg"
import LinkedIn from "./LinkedIn.svg"
import BLogo from "./BLogo.svg"


export const Footer = () => {
  return (
    <div className="flex h-[495px] pt-[64px] px-[352px] pb-[0px] flex-col items-start gap-[25px] shrink-0 bg-[#F6F6F7]">
      <div className="flex w-[1215px] items-start gap-5">
        <div className="flex w-[289px] flex-col items-start gap-6 shrink-0">
          <div className="flex flex-col items-start gap-4">
            <p className="text-[#181A2A] font-sans text-lg font-semibold">
              About
            </p>
            <p className="text-[#696A75] font-sans text-base font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-[#181A2A] font-serif text-base not-italic font-normal">
            Email : info@jstemplate.net
            </p>
            <p className="text-[#181A2A] font-serif text-base not-italic font-normal">
            Phone : 880 123 456 789
            </p>
          </div>
        </div>
        <div className="flex w-[521px] justify-center items-start gap-[80px] shrink-0">
          <div className="flex flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-2">
          <p className="text-[#181A2A] font-serif text-base not-italic font-normal">
          Home
          </p>
          <p className="text-[#181A2A] font-serif text-base not-italic font-normal">
          Blog
          </p>
          <p className="text-[#181A2A] font-serif text-base not-italic font-normal">
          Contact
          </p>

          </div>

          </div>
        </div>
        <div className="flex w-[144px] h-[16px] shrink-0 gap-[26.6px]">
          <img src={Facebook}></img>
          <img src={Instagram}></img>
          <img src={Twitter}></img>
          <img src={LinkedIn}></img>
        </div>
      </div>
      <div className="flex w-[1216px] h-[95px] px-8 items-center gap-16 shrink-0 justify-between">
        <div className="flex items-center gap-[10px]">
          
          <img src={BLogo} className="w-12 h-12"></img>
          <div className="flex flex-col items-start gap-[2px]">
            <p className="text-[#141624] font-sans text-xl not-italic font-normal">Meta<span className="text-[#141624] font-sans text-xl not-italic font-extrabold">
              
            Blog
            </span>
            </p>
            <p className="text-[#3B3C4A] font-sans not-italic text-base font-normal">© All Rights Reserved.</p>
          </div>


        </div>
        <div className="flex justify-end items-center gap-4 ">
          <p className="text-[#3B3C4A] font-sans text-base not-italic font-normal">Terms of Use</p> 
          <div className="w-[1px] h-6 bg-[#E8E8EA]"></div>
          <p className="text-[#3B3C4A] font-sans text-base not-italic font-normal">Privacy Policy</p> 
          <div className="w-[1px] h-6 bg-[#E8E8EA]"></div>
          <p className="text-[#3B3C4A] font-sans text-base not-italic font-normal">Cookie Policy</p> 

        </div>
      </div>
    </div>
  );
};

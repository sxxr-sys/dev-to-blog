import { CarouselTendingCardCreator } from "./CarouselTrendingContent";

export const AllBlogPosts = (props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center gap-20">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-start gap-8 self-stretch">
            <p className="w-[184px] text-[#181A2A] font-sans not-italic text-xl font-bold">
              All Blog Post
            </p>
            <div className="flex min-w-[1216px] items-center gap-[30px]">
              <div className="flex items-center gap-5">
                <p className="text-[#D4A373] font-sans not-italic font-bold leading-[25px]">
                  All
                </p>
                <p className="text-[#495057] font-sans not-italic font-bold leading-[25px]">
                  Design
                </p>
                <p className="text-[#495057] font-sans not-italic font-bold leading-[25px]">
                  Travel
                </p>
                <p className="text-[#495057] font-sans not-italic font-bold leading-[25px]">
                  Fashion
                </p>
                <p className="text-[#495057] font-sans not-italic font-bold leading-[25px]">
                  Technology
                </p>
                <p className="text-[#495057] font-sans not-italic font-bold leading-[25px]">
                  Branding
                </p>
              </div>
              <p className="text-[#495057] text-right font-sans text-xs leading-[25px] not-italic font-bold">
                View All
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5">
            <div className="flex items-start gap-5">
              <div className="flex min-w-[392px] p-4 flex-col justify-center items-center gap-4 rounded-xl border-[#E8E8EA] border-solid bg-[#FFF]">
                <img src={props.image} alt="img" className=""></img>
                <CarouselTendingCardCreator />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

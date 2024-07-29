import { Tag } from "./tag";

export const CarouselTendingCardCreator = ({ image, title }) => {
  return (
    <div className="flex items-start gap-5">
      <div className="relative flex justify-end flex-col bg-black bg-opacity-40 h-[320px] rounded-xl w-[289px] border-2">
        <img
          className="absolute -z-10 object-center object-cover flex w-[289px] h-[320px] flex-col items-start rounded-xl "
          src={image}
          alt="img"
        />
        <div className="absolute flex flex-col w-[230px] h-[120px] items-start gap-4 left-[28.5px] bottom-7">
          <div className="">
            <Tag />
          </div>
          <p className="max-w-[230px] h-[76px] shrink-0 text-[#FFF] font-sans  text-lg not-italic">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

import { Tag } from "./tag";

export const CarouselCardCreator = (props) => {
  return (
    <div className="">
      <div className="relative">
        <img className="object-center object-cover w-[100%] h-[60vh] rounded-xl" src={props.image} alt="ds"/>
        <div className="absolute flex flex-col bottom-[0px] left-[0px] bg-white p-10 gap-4 rounded-xl">
          <Tag/>
          <h2 className="max-w-[360px] text-3xl font-semibold">{props.title}</h2>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
};


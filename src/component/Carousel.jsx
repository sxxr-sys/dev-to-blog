import { useState } from "react";
import { CarouselCardCreator } from "./CarouselContent";
import IconLeft from "./back.svg";
import IconRight from "./forward.svg";
import { Navbar } from "./Navbar";

const object = [
  {
    ImageUrl:
      "https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fCLy5GghCAPtYF~~U28~GaAdAp88xIeWT8FSkxHLq4JKnZuK1Ax07wga4n6pArK3wCb0p3KuijpLEmUvLcVvF5JxOkJWk9AU1rXxAtZd4woX~Gpb6eSSvDZZqMcP8h-3zhg9ut2mf4VzWiIiDHKoa9NFXk8w0G04hXxZ2xt~73IMrGSXvFTz~kv0Vk4MPJFtZHNiElyvYHEdlUlU9HVpQZdHPzvhc2XEN6DiTGUzQFh~QgwOE1h-gKcycyMG3CwVSq-PGcJpBzOKf20idyHPjhXZtUuuqxXW56q6b~~6JJETVtLbxz~ERtCcjXI3euAOxRmG8ebg83eq01thZq~zEg__",
    title: "Grid system for better Design User Interface",
    date: "August 20, 2022",
  },
  {
    ImageUrl:
      "https://s3-alpha-sig.figma.com/img/7465/4a8f/67369b797c8fb2e96a533fd515fb2939?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eR9T678lH5NmwfDTe6yRWXlAe8zperPTHPCLwvB0HPZmNh3Lbkjj2Al9VbL9mZfDu5X2wQ-cESdyMqgtxd4tB~NoTvKnp~Wwk52Rjr5CiSeUX0bjJgI3VUcdFId1tkegx~Kid47O9763PMH~VfZXlISb2D37iLEWPWy-PmVEVONQBkdXWisXeidu7wjWNV3hkH4shYudzDQsM-73RaMiULbU3uVg0rHLKTYFtEx~0GG-os405KBI0U6J8yqlIka7EOHthEqwl07Te-DF9-gaS9B7XhbGBGszLwmRQO5M9fGYFBgZH8h1-zoaOKna53UZOWTzzgyL6ML~F~a4HjUUdg__",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    date: "September 20, 2023",
  },
];

export const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [random, setRandom] = useState(object);

  const handleLeftClick = () => {
    if (current > 0) {
      setCurrent(current - 1);
    } else if (current === 0) {
      setCurrent(random.length - 1);
    }
  };

  const handleRightClick = () => {
    if (current < random.length - 1) {
      setCurrent(current + 1);
    } else if (current === random.length - 1) {
      setCurrent(0);
    }
  };

  return (
    <div className="flex flex-col px-[500px] pt-[100px] pb-[11px] min-h-[600px] min-w-[1216px]">
      <CarouselCardCreator
        image={object[current].ImageUrl}
        title={object[current].title}
        date={object[current].date}
      />
      <div className="flex gap-[9px] justify-end mt-2">
        <button onClick={handleLeftClick}>
          <img src={IconLeft} />
        </button>
        <button onClick={handleRightClick}>
          <img src={IconRight} />
        </button>
      </div>
    </div>
  );
};

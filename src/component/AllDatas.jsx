import { Tag } from "./tag";

const Allimage =[
    {
        image: "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kjp9eAj2oxrH5qNeGOl0m95PEXix407MYB29i6rs7PjZP6i1Iig9b3peSsktRJsFz7ODPMUMgTq7TXT94NiGIqgv2oXWIMqVkxwpyAfRng-RhwmRKRokEN5E69LnCDv5-20y7nykOfBEQNtHcayQqKkMFKrBz~gIgbOEwW4JJO~3dvIWbtoL7JW10sprr8J8FDHK29IWp2Eaj8nn2aGJalnNwPWXCWjjZxVQUOd8mXTf7n2-ib3I~IBzjXhzdRvQyQes~LBNu7jRABuOI6iQlZJ77JkK66HvknyPFKTDvp-yWE~ZYgJRJwe56UiCa9tH~u4suX2jTkGUioq~v21Yuw__",
        title: "The Impact of Technology on the Workplace: How Technology is Changing"
    },
    {
        image: "https://s3-alpha-sig.figma.com/img/7465/4a8f/67369b797c8fb2e96a533fd515fb2939?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SDaDwzoavXkqDyczRDIGTiTDrlYMj9ppUnLJmHcKz-JQdc89W~JVB0gzuPceOiHildq~2IeqHonF2E3uGUEck3uVXuKjWl3N12vBklxNALg45qkPYFS4TSLHuvzoKITpJLITJw2PjibYxzw~WKr3LZzZBix-Ptv~fSjq1TjJUWzrMLyCiprGyNHyNC2GxBTtRSftD-K46lwZFEavAaGKbYbwlWp0JZPoajWbLat0mSQILGx31jCYMi8FymoSAuROEckkVVgHrB64p3sbSxpQsup7Is~7PbPJ~RMC6TVSGnQXB3jIRTZdTEN5ozj~za8rUhVUgpLqJVBDeG1zAKGikQ__",
        title: "The Impact of Technology on the Workplace: How Technology is Changing"
    }]
export const AllData = (props) => {
    return (
        <div className="flex min-w-[392px] p-4 flex-col justify-center items-center gap-4 rounded-xl border-[#E8E8EA] bg-[#FFF]">
            <img src={props.image} alt="PostPicture"/>5
            <div className="flex p-2 flex-col items-start gap-5 self-stretch">
            <div className="flex flex-col gap-4 self-stretch">
            <Tag/>
            <p className="text-[#181A2A] font-sans "></p>
            </div>
            <div className="flex items-center gap-5"></div>

            </div>
        </div>
    )
}

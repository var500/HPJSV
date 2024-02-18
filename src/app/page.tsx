import { CarouselDefault } from "@/components/Home-Components/Carousel";
import Heading from "@/components/Home-Components/Heading";
import TextTicker from "@/components/Home-Components/ticker";

const data = [
  "Water is Precious! Be Wise in Using It!!",
  "Don't Waste Water or the World won't get any Better",
  "See Mother Nature's Face Turn Sour when You take a Long-Long Shower",
  "You have some Nerve if you don't Conserve",
  "Save Water, Save Life",
];

export default function Home() {
  return (
    <>
      <CarouselDefault />
      <div className="px-10 md:px-28 py-8 ">
        <TextTicker messages={data} />
        <Heading />
      </div>
    </>
  );
}

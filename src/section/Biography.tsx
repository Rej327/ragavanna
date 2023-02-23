import Donut from "@/app/styleDiv/Donut";
import Largecircle from "@/app/styleDiv/Largecircle";
import Stripecircle from "@/app/styleDiv/Stripecircle";
import Bio from "@/components/Bio";
import BioImage from "@/components/BioImage";

export default function Biography() {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-2 w-full overflow-hidden">
        <div className="pl-2 -z-10 mt-10 ml-22 md:mt-15 md:ml-27 lg:mt-20 lg:ml-32">
          <Stripecircle />
        </div>
        <div className="w-fit ml-auto mt-[38rem] md:pr-2">
          <Largecircle />
        </div>
      </div>
      <div className="-mt-28 w-fit ml-10 sm:mx-auto lg:ml-[67%]">
        <Donut />
      </div>
      <div className="mx-auto my-[-45rem] md:my-[-50rem] p-5 lg:mt-[-48rem] lg:ml-96">
        <BioImage />
      </div>
      <div className="absolute mt-[40rem] px-10 sm:mt-[43rem] lg:w-[40rem] lg:mt-[30rem] ">
        <Bio />
      </div>
    </div>
  );
}

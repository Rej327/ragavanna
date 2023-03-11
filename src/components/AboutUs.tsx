import Largecircle from "@/app/styleDiv/Largecircle";
import Stripecircle from "@/app/styleDiv/Stripecircle";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="w-full mx-auto flex flex-col-reverse mt-[25%] md:mt-[10%] lg:mt-20">
      <div className="mt-[-4rem] w-[80%] bg-stone-200 p-5 ml-auto mb-16 md:w-[50%] lg:w-[30%] lg:mt-[-20rem]">
        <h1 className="text-5xl py-5 text-black">About Us</h1>
        <p className="text-3xl">
          Our music band provides high-energy, entertaining performances for a
          variety of events and occasions. With a repertoire spanning multiple
          genres, we are dedicated to getting the party started and keeping it
          going all night long.
        </p>
      </div>
      <div className="p-5 md:px-32 lg:px-80 lg:mt-14">
        <Image
          src="/about-us.jpg"
          width={700}
          height={700}
          alt="Us"
          className="mx-auto lg:mt-10"
        />
      </div>
      <div className="absolute -z-10 h-[50rem] lg:h-[46rem] lg:w-[29rem]">
        <div className="w-fit lg:ml-auto">
          <Largecircle />
        </div>
        <div className="mx-auto mt-[30rem] lg:mt-[13rem] md:mt-[18rem] w-fit lg:mx-10">
          <Stripecircle />
        </div>
      </div>
    </div>
  );
}

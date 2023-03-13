import Smallcircle from "@/app/styleDiv/Smallcircle";
import { heroData } from "../data/data";
import { TbBrandMessenger } from "react-icons/tb";
import Link from "next/link";

export default function HeroContext() {
  return (
    <div className="w-full px-5 my-auto">
      <div className="w-full text-gray-900">
        <h1 className="mt-8 md:mt-0 text-[4rem] md:text-[5rem] lg:text-[7rem] leading-none">
          REGAVANA <br />
          BAND
        </h1>
        <p className="text-2xl md:text-3xl">
          <i>We have everything to make your event bright!</i>
        </p>
      </div>
      {heroData.map((herodata, index) => (
        <div key={index} className="mt-10">
          <Link href={herodata.link} target="_blank" rel="noreferrer">
            <div className="flex">
              <p className="text-2xl font-extrabold text-gray-900 tracking-wider my-2 hover:underline">
                {herodata.name}
              </p>
              <TbBrandMessenger className="text-gray-700 text-xl" />
            </div>
          </Link>
          <p className="text-2xl font-bold text-red-500 tracking-wider my-2">
            {herodata.email}
          </p>
          <p className="text-2xl font-bold text-red-500 tracking-wider my-2">
            {herodata.number}
          </p>
        </div>
      ))}
      <div className="my-10">
        <Smallcircle />
      </div>
    </div>
  );
}

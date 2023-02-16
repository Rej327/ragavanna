import { heroData } from "../data/data";

export default function HeroContext() {
  return (
    <div className="w-full px-5 my-auto">
      <div className="w-full text-gray-900">
        <h1 className="text-[7rem] leading-none">
          SAMPLENAME <br />
          CATEGORY
        </h1>
        <p className="text-3xl">
          <i>We have everything to make your event bright!</i>
        </p>
      </div>
      {heroData.map((herodata) => (
        <div className="my-10">
          <p className="text-2xl font-extrabold text-gray-900 tracking-wider my-2">
            {herodata.name}
          </p>
          <p className="text-2xl font-bold text-red-500 tracking-wider my-2">
            {herodata.email}
          </p>
          <p className="text-2xl font-bold text-red-500 tracking-wider my-2">
            {herodata.number}
          </p>
        </div>
      ))}
    </div>
  );
}

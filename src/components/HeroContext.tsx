import { heroData } from "../data/data";

export default function HeroContext() {
  return (
    <div className="w-full px-4 my-auto">
      <div className="w-full">
        <h1 className="text-7xl py-4">
          SAMPLENAME <br />
          CATEGORY
        </h1>
        <p className="text-2xl">
          <i>We have everything to make your event bright!</i>
        </p>
      </div>
      {heroData.map((herodata) => (
        <div className="my-10">
          <p className="text-2xl font-bold my-2">{herodata.name}</p>
          <p className="text-2xl text-red-600 my-2">{herodata.email}</p>
          <p className="text-2xl text-red-600 my-2">{herodata.number}</p>
        </div>
      ))}
    </div>
  );
}

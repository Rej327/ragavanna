import { latestEvent } from "@/data/data";

export default function LatestEvents() {
  return (
    <div className="w-full bg-gray-900 px-4 py-8">
      <h1 className=" text-white text-4xl md:text-7xl">Category Section</h1>
      {latestEvent.map((ltsEvent) => (
        <div className="md:flex px-2 my-4 py-8">
          <img
            src={ltsEvent.image}
            alt="/"
            className="w-full h-56 md:w-[235px] md:h-[235px] border-2"
          />
          <div className="text-white md:px-8 my-auto">
            <p className="text-5xl lg:text-7xl mt-2 sm:pt-0 tracking-wide">
              {ltsEvent.event}
            </p>
            <p className="text-3xl lg:text-5xl tracking-wide py-4">
              {ltsEvent.date}
            </p>
            <button className="text-2xl tracking-wider border-2 py-2 px-6 cursor-pointer font-semibold hover:text-gray-900 hover:bg-white">
              {ltsEvent.btntxt}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

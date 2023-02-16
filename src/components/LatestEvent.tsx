import { latestEvent } from "@/data/data";

export default function LatestEvents() {
  return (
    <div className="w-full bg-gray-900 px-4 py-8">
      <h1 className=" text-white text-7xl">Category Section</h1>
      {latestEvent.map((ltsEvent) => (
        <div className="flex px-2 my-4 py-8">
          <img
            src={ltsEvent.image}
            alt="/"
            className="w-[235px] h-[235px] border-2"
          />
          <div className="text-white px-8 my-auto">
            <p className="text-7xl tracking-wide">{ltsEvent.event}</p>
            <p className="text-5xl tracking-wide py-4">{ltsEvent.date}</p>
            <button className="text-2xl tracking-wider border-2 py-2 px-6 cursor-pointer font-semibold hover:text-gray-900 hover:bg-white">
              {ltsEvent.btntxt}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

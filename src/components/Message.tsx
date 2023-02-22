import Smallcircle from "@/app/styleDiv/Smallcircle";

export default function Message() {
  return (
    <div className="w-full bg-[#292e33]">
      <div className="w-fit mx-auto py-10">
        <Smallcircle />
      </div>
      <h1 className="text-7xl text-white text-center max-w-[42rem] tracking-wide mx-auto">
        DJ Night is Your Best Choice For Luxury Destination Weddings, Private,
        and Corporate Events
      </h1>
      <div className="w-fit mx-auto py-10">
        <button className="text-2xl text-white tracking-wider border-2 py-2 px-6 cursor-pointer font-semibold hover:text-gray-900 hover:bg-white">
          LEARN MORE
        </button>
      </div>
    </div>
  );
}

import Loader from "@/app/styleDiv/Loader";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

async function getPosts() {
  const res = await fetch("/api/getPosts");
  if (res.ok) {
    console.log();
  }
  return res.json();
}

export default function LatestEvents() {
  const [dataState, setDataState] = useState<any[]>([]);

  const dta = async () => {
    const data: {
      event: string;
      date: string;
      image: string;
    }[] = await getPosts();
    setDataState(data);
  };
  useEffect(() => {
    dta();
  }, []);

  return (
    <div id="event" className="w-full bg-[#292e33] px-4 py-8">
      <h1 className=" text-white text-4xl md:text-7xl">Latest Events</h1>
      {dataState.length <= 0 && <Loader />}
      {dataState.map((ltsEvent) => (
        <div key={ltsEvent.id} className="md:flex px-2 my-4 py-8">
          <Image
            key={ltsEvent.id}
            src={ltsEvent.image}
            alt="/"
            width={235}
            style={{ objectFit: "cover" }}
            height={235}
            className=" w-[235px] h-[235px] mx-auto sm:mx-0 border-2"
          />
          <div className="text-white md:px-8 my-auto">
            <p
              key={ltsEvent.id}
              className="text-5xl lg:text-7xl mt-2 sm:pt-0 tracking-wide"
            >
              {ltsEvent.event}
            </p>
            <p
              key={ltsEvent.id}
              className="text-3xl lg:text-5xl tracking-wide py-4"
            >
              {ltsEvent.date}
            </p>
            <Link href="/allEvents">
              <button className="text-2xl tracking-wider border-2 py-2 px-6 cursor-pointer font-semibold hover:text-gray-900 hover:bg-white">
                MORE
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

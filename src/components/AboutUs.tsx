import Largecircle from "@/app/styleDiv/Largecircle";
import Stripecircle from "@/app/styleDiv/Stripecircle";

export default function AboutUs() {
  return (
    <div className="w-full mx-auto flex flex-col-reverse mt-[25%] md:mt-[10%] lg:mt-20">
      <div className="mt-[-4rem] w-[80%] bg-stone-200 p-5 ml-auto mb-16 md:w-[50%] lg:w-[30%] lg:mt-[-20rem]">
        <h1 className="text-5xl py-5 text-black">About Us</h1>
        <p className="text-3xl">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <button className="text-2xl tracking-wider border-2 border-black py-2 my-2 px-16 cursor-pointer font-semibold hover:text-white hover:bg-black">
          LEARN MORE
        </button>
      </div>
      <div className="p-5 md:px-32 lg:px-80 lg:mt-14">
        <img
          src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/4a12be53a0455a7d90f6ac21/xccccc.jpg"
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

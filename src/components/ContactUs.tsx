export default function ContactUs() {
  return (
    <div className="w-full text-center bg-red-500 py-20">
      <h1 className="text-7xl text-white">Contact Us</h1>
      <div className="py-4 sm:flex gap-10 max-w-[25rem] mx-auto">
        <p className="underline underline-offset-8 text-4xl py-5 text-white hover:no-underline hover:text-stone-200 w-fit mx-auto">
          <a href="https://www.facebook.com/" target="_blank">
            Facebook
          </a>
        </p>
        <p className="underline underline-offset-8 text-4xl py-5 text-white hover:no-underline hover:text-stone-200 w-fit mx-auto">
          <a href="https://www.instagram.com/" target="_blank">
            Instagram
          </a>
        </p>
        <p className="underline underline-offset-8 text-4xl py-5 text-white hover:no-underline hover:text-stone-200 w-fit mx-auto">
          <a href="https://www.twitter.com/" target="_blank">
            Twitter
          </a>
        </p>
      </div>
      <div className="px-10 mx-auto max-w-[30rem] md:flex gap-2   ">
        <input
          name="text"
          placeholder="Email"
          className="w-full text-lg font-sans p-2 my-2 text-stone-500 outline-red-500"
        />
        <button className="my-2 w-full sm:w-fit text-lg text-white tracking-wider border-2 border-white py-2 p-4 cursor-pointer font-semibold hover:text-red-500 hover:bg-white">
          MORE
        </button>
      </div>
    </div>
  );
}

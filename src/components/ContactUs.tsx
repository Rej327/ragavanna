export default function ContactUs() {
  return (
    <div className="w-full text-center bg-red-500 py-20">
      <h1 className="text-5xl text-white">Reach Out To Us</h1>
      <div className="py-4 sm:flex gap-10 max-w-[25rem] mx-auto">
        <p className="underline underline-offset-8 text-4xl py-5 text-white hover:no-underline hover:text-stone-200 w-fit mx-auto">
          <a
            href="https://www.facebook.com/Regavanacoustic"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </p>
        <p className="underline underline-offset-8 text-4xl py-5 text-white hover:no-underline hover:text-stone-200 w-fit mx-auto">
          <a href="tel:09456622099" target="_blank" rel="noreferrer">
            Phone
          </a>
        </p>
        <p className="underline underline-offset-8 text-4xl py-5 text-white hover:no-underline hover:text-stone-200 w-fit mx-auto">
          <a
            href="https://www.tiktok.com/@regavana"
            target="_blank"
            rel="noreferrer"
          >
            TikTok
          </a>
        </p>
      </div>
    </div>
  );
}

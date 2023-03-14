import Image from "next/image";

export default function HeroImg() {
  return (
    <div className="w-full">
      <Image
        src="/hero-image.jpg"
        width={500}
        height={500}
        alt="Band Image"
        className="w-full"
      />
    </div>
  );
}

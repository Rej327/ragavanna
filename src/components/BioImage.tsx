import Image from "next/image";

export default function BioImage() {
  return (
    <div className="w-full">
      <Image
        src="/bio-image.jpg"
        alt="Bio Image"
        width={500}
        height={500}
        className="w-[55rem]"
      />
    </div>
  );
}

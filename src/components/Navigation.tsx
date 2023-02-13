import { GiHamburgerMenu } from "react-icons/gi";

export default function Navigation() {
  return (
    <div className="w-full flex justify-between py-4">
      <h1 className="text-2xl">Name</h1>
      <GiHamburgerMenu className="text-3xl cursor-pointer" />
    </div>
  );
}

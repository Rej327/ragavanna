import { useState } from "react";

export default function Toogle() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return <div className={nav ? "" : ""}></div>;
}

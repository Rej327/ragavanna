import AddEvent from "@/components/Form";
import { useState } from "react";

export default function Auth() {
  const [keyPass, setKeyPass] = useState("");

  const hiddenKey = "ReGavannA";
  if (hiddenKey === keyPass) {
    return <AddEvent />;
  }

  return (
    <form className="">
      <input
        type="password"
        onChange={(e) => setKeyPass(e.target.value)}
        value={keyPass}
      />
      <p className="text-2xl text-orange-500">asdiyyuyujasdsad</p>
    </form>
  );
}

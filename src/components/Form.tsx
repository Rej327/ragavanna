"use client";

import Smallcircle from "@/app/styleDiv/Smallcircle";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

export default function AddEvent() {
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();
  //submit form
  async function submitPost(e: React.FormEvent) {
    e.preventDefault();
    const data = await fetch("/api/createPost", {
      method: "POST",
      body: JSON.stringify({ event, date, image }),
    });
    const res = await data.json();
    if (!res.ok) console.log(res.message);
    //show live post
    router.refresh();
  }

  const [auth, setAuth] = useState(false);
  const handleAuth = () => {
    setAuth(!auth);
  };

  const [keyPass, setKeyPass] = useState("");

  const hiddenKey = "123456";
  if (hiddenKey === keyPass) {
    return (
      <form onSubmit={submitPost}>
        <input
          type="text"
          onChange={(e) => setEvent(e.target.value)}
          value={event}
        />
        <input
          type="text"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <input
          type="text"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
        <button type="submit" className="text-orange-600">
          Add Event
        </button>
      </form>
    );
  }

  return (
    <div
      className={
        auth
          ? "absolute z-[1] w-[30rem] bg-[#292e33] h-[16rem] top-[30%] left-[30%] p-4"
          : "hidden z-[-1] w-[30rem] bg-[#292e33] h-[16rem] top-[30%] left-[30%] p-4"
      }
    >
      <MdOutlineClose
        onClick={handleAuth}
        className="text-white text-3xl cursor-pointer ml-auto"
      />
      <div className="w-fit mx-auto text-center">
        <div className="w-fit mx-auto">
          <Smallcircle />
        </div>
        <p className="text-white text-2xl tracking-widest py-2">
          PLEASE ENTER THE PASSWORD
        </p>
        <input
          type="password"
          onChange={(e) => setKeyPass(e.target.value)}
          value={keyPass}
          className="w-64 h-9 text-center outline-[#292e33]"
        />
      </div>
    </div>
  );
}

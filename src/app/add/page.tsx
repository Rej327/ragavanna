"use client";

import Smallcircle from "../styleDiv/Smallcircle";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const metadata = {
  title: "Add Event",
};

export default function Add() {
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
    router.push("/");
  }

  const [keyPass, setKeyPass] = useState("");

  const hiddenKey = "ReGavanA";
  if (hiddenKey === keyPass) {
    return (
      <form
        onSubmit={submitPost}
        className="h-[85vh] w-full bg-[#292e33] grid grid-flow-row px-10 py-32 md:p-32 gap-5"
      >
        <h1 className="text-5xl text-red-500 text-center pb-3">Add Event</h1>
        <input
          type="text"
          onChange={(e) => setEvent(e.target.value)}
          placeholder="Event Name"
          className="p-1 text-center tracking-wider text-lg"
          value={event}
        />
        <input
          type="text"
          onChange={(e) => setDate(e.target.value)}
          placeholder="Month / Day / Year | Place"
          className="p-1 text-center tracking-wider text-lg"
          value={date}
        />
        <input
          type="text"
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image Link"
          className="p-1 text-center tracking-wider text-lg"
          value={image}
        />
        <button
          type="submit"
          className="w-36 p-1 bg-red-500 mx-auto text-white text-2xl hover:bg-opacity-70"
        >
          Add Event
        </button>
      </form>
    );
  }

  return (
    <div className="w-full flex items-center h-[85vh] bg-[#292e33]">
      <div className="w-fit mx-auto text-center">
        <div className="w-fit mx-auto py-4">
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
        <div className="my-5">
          <button className="w-36 p-1 bg-red-500 text-white text-2xl hover:bg-opacity-70">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

import { useRouter } from "next/navigation";
import { useState } from "react";

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
      <button type="submit">Add Event</button>
    </form>
  );
}

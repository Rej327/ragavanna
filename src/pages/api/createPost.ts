// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "prisma/client";

type postProps = {
  event: string;
  date: string;
  image: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const post: postProps = JSON.parse(req.body);
    console.log(post);
    if (req.method === "POST") {
      //Check for props
      if (!post.event.length && !post.image.length && !post.date.length) {
        return res
          .status(400)
          .json({ message: "Please do not leave this empty!" });
      }
      try {
        const data = await prisma.post.create({
          data: {
            event: post.event,
            date: post.date,
            image: post.image,
          },
        });
        res.status(200).json(data);
      } catch (err) {
        return res.status(500).json({ message: "Error creating a new post!" });
      }
    }
  } catch (err) {
    return res.status(500).json(err);
  }
}

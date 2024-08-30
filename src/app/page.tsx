import React from "react";

import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Học lập trình nextjs",
  description: "code đơn giản",
};

export default function page() {
  return (
    <div>
      page
      <img
        style={{ width: "500px", height: "500px" }}
        src="https://ik.imagekit.io/tvlk/blog/2021/09/du-lich-anh-2.jpg?tr=dpr-2,w-675"
        alt=""
      />
      <Image
        src="https://ik.imagekit.io/tvlk/blog/2021/09/du-lich-anh-2.jpg?tr=dpr-2,w-675"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
}

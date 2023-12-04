"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function TestPage() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then((res) => setData(res.time));
  }, []);
  return (
    <>
      <div>
        <Image
          src={
            "https://ahtty.s3.ap-northeast-2.amazonaws.com/image/desktop.png"
          }
          alt=""
        ></Image>
      </div>
      {data}
    </>
  );
}

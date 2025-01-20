"use client";

import dynamic from "next/dynamic";

const DataInputExample = dynamic(
  () => import("../components/data-input-example"),
  {
    ssr: false,
  }
);

export default function Home() {
  return <DataInputExample />;
}

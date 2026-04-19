import ScrollPanel from "./components/ScrollPanel";
import React from "react";

export default function Home() {
  return (
      <section className="fixed inset-0 bg-black flex items-center justify-center p-7 cursor-auto select-none">
          <ScrollPanel/>
      </section>
  );
}

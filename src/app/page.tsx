import Image from "next/image";
import Hero from "../app/components/Home"

import PrelineScript from "./components/PrelineScript";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    <Hero/>
    <PrelineScript />
    </main>
  );
}

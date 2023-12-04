import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <img src="/Image/blur.png" className="absolute top-0 right-0" />

      <div className="items-center justify-center flex">
        <Header />
      </div>
    </main>
  );
}

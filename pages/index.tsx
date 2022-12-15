/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import SectionHeader from "../components/sectionHeader";
import Header from "./header";

export default function Home() {
  return (
    <div>
      <SectionHeader />
      <Header />
      <div className="h-90 w-full bg-cover bg-center p-24 ">
        {/* <div className="p-8 flex flex-auto justify-center "> */}
        <div className=" justify-center ">
          <img src="./img/cover1.png" alt="cover1" />
          <div className="grid grid-cols-10 gap-4 mt-2">
          </div>
        </div>
      </div>
    </div>



  );
}

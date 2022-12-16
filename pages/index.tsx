/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import SectionHeader from "../components/sectionHeader";
import Header from "./header";

export default function Home() {
  return (
    <div>
      <SectionHeader />
      <div className="flex flex-col justify-center items-center p-10">
        <Header />
          <div>
            <img src="./img/cover1.png" alt="cover1" />
            <div className="grid grid-cols-10 gap-4 mt-2">
            </div>
        </div>
      </div>
    </div>



  );
}

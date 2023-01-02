import Link from "next/link";

export default function Home() {

  return (
    <div className='flex justify-center items-center flex-col h-screen'>
      <img src="./img/KHIRkhalid.svg" />

      <Link href={'/home'}>
        <p className="mt-10">ENTER</p>
      </Link>
    </div>
  );
}

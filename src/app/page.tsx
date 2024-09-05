import Image, { StaticImageData } from "next/image";
import img from '../assests/lakeView.jpg'
import Navbar from "./components/Navbar";
import logo from "./favicon.png"
import Head from "next/head";

export default function Home() {

  return (
    <>
    <Head>
    <link rel='icon' href='/favicon.ico' />
    </Head>
    <div className="bg-no-repeat bg-cover h-screen flex flex-col items-center justify-center" style={{ backgroundImage: `url(${img.src})` }}>
      <p className="font-extrabold text-red-300 text-7xl">Self Labeler Coming Soon</p>
      <Image
      src={logo} 
      alt="icon"
      />
    </div>
    </>
  );
}

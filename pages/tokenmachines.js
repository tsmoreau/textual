import Head from "next/head";
import Nav from "../components/Nav/Nav";
import Swiper from "../components/SwiperMain";

import Footer from "../components/Nav/Footer";

export default function Machines() {
  return (
    <div className="text-black">
      <Head>
        <title>token machines</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="mt-0 lg:pt-24 pt-24 lg:pt-2 w-full bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 z-0">
        <Swiper />
      </div>

      <Footer />
    </div>
  );
}

import Banner from "@/components/Banner";
import NavBar from "@/components/NavBar";
import Habilidades from "@/components/Habilidades";
import Trailer from "@/components/Trailer";
import Historia from "@/components/Historia";
import Footer from "@/components/Footer"
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <Banner/>
      <Habilidades/>
      <Trailer/>
      <Historia/>
      <Footer/>
    </main>
  );
}

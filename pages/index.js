import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import About from "../components/UI/About";
import Catalog from "../components/UI/Catalog";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Catalog/>
      <About />
      <Footer />
    </Fragment>
  );
}

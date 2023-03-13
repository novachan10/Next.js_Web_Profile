import { Component, Fragment } from "react";
import Hero from "../components/UI/Hero";
import About from "../components/UI/About";
import Catalog from "../components/UI/Catalog";
import Footer from "../components/footer/Footer";
import Contact from "../components/UI/Contact";
import { renderToHTML } from "next/dist/server/render";

export async function getStaticProps() {
  const response = await fetch('/data.json');
  const data = await response.json();
  return { props: { menuItems: data.menuItems } };
}

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Catalog/>
      <About />
      <Contact />
      <Footer />
    </Fragment>
  );
}

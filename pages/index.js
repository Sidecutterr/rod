import Head from "next/head";
import Image from "next/image";
import React from 'react';
import ReactDOM from 'react-dom/client';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import FAQ from "../components/FAQ";
import Gallery from "../components/Gallery";
import Roadmap from "../components/Roadmap";
import Rodowners from "../components/Rodowners";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <Hero />
      <Rodowners />
      <Gallery />
      <Roadmap />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
}

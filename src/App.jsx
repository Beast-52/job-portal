import JobCards from "./components/Cards";
import JobPortalFooter from "./components/Footer";
import Hero from "./components/Hero";
import JobSearchBar from "./components/JobSearchbar";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <JobSearchBar />
      <JobCards />
      <JobPortalFooter />
    </div>
  );
}

export default App;

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
  const [locations, setLocations] = useState(null);
  const [cat, setCat] = useState(null);
  const [filter, setFilter] = useState([]);
  return (
    <div className="w-full min-h-screen bg-zinc-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <JobSearchBar locations={locations} cat={cat} />
      <JobCards setLocations={setLocations} setCat={setCat} />
      <JobPortalFooter />
    </div>
  );
}

export default App;

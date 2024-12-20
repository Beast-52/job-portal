import JobCards from "./components/Cards";
import JobPortalFooter from "./components/Footer";
import Hero from "./components/Hero";
import JobSearchBar from "./components/JobSearchbar";
import Navbar from "./components/Navbar";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  const [locations, setLocations] = useState(null);
  const [cat, setCat] = useState(null);
  const [pos, setPos] = useState(null);
  const [jobCards, setJobCards] = useState([
    // 6 Mid-Level Jobs
    {
      company: "Apple Corporation",
      location: "New York, US",
      position: "Designer",
      type: "Full Time",
      workMode: "On-site",
      salary: "$130K - $240K per year",
      level: "Mid Level",
      logo: "🍎",
    },
    {
      company: "Amazon Inc.",
      location: "Seattle, US",
      position: "Developer",
      type: "Full Time",
      workMode: "Remote",
      salary: "$120K - $180K per year",
      level: "Mid Level",
      logo: "🛒",
    },
    {
      company: "Tesla",
      location: "Austin, US",
      position: "Designer",
      type: "Full Time",
      workMode: "Hybrid",
      salary: "$110K - $150K per year",
      level: "Mid Level",
      logo: "🚗",
    },
    {
      company: "Spotify",
      location: "Stockholm, Sweden",
      position: "Engineer",
      type: "Full Time",
      workMode: "On-site",
      salary: "$95K - $140K per year",
      level: "Mid Level",
      logo: "🎵",
    },
    {
      company: "Twitter",
      location: "San Francisco, US",
      position: "Developer",
      type: "Full Time",
      workMode: "Hybrid",
      salary: "$130K - $190K per year",
      level: "Mid Level",
      logo: "🐦",
    },
    {
      company: "Dropbox",
      location: "San Francisco, US",
      position: "Engineer",
      type: "Full Time",
      workMode: "Remote",
      salary: "$115K - $160K per year",
      level: "Mid Level",
      logo: "📦",
    },

    // 7 Senior-Level Jobs
    {
      company: "Google Corporation",
      location: "London, UK",
      position: "Designer",
      type: "Full Time",
      workMode: "Hybrid",
      salary: "$145K - $200K per year",
      level: "Senior Level",
      logo: "🌐",
    },
    {
      company: "Microsoft",
      location: "Redmond, US",
      position: "Engineer",
      type: "Full Time",
      workMode: "Hybrid",
      salary: "$140K - $220K per year",
      level: "Senior Level",
      logo: "💻",
    },
    {
      company: "Netflix",
      location: "Los Angeles, US",
      position: "Researcher",
      type: "Full Time",
      workMode: "Remote",
      salary: "$125K - $190K per year",
      level: "Senior Level",
      logo: "🎬",
    },
    {
      company: "Airbnb",
      location: "San Francisco, US",
      position: "Manager",
      type: "Full Time",
      workMode: "Remote",
      salary: "$150K - $230K per year",
      level: "Senior Level",
      logo: "🏠",
    },
    {
      company: "Adobe",
      location: "San Jose, US",
      position: "Designer",
      type: "Part Time",
      workMode: "Hybrid",
      salary: "$110K - $150K per year",
      level: "Senior Level",
      logo: "🖌️",
    },
    {
      company: "Salesforce",
      location: "San Francisco, US",
      position: "Engineer",
      type: "Full Time",
      workMode: "Hybrid",
      salary: "$160K - $220K per year",
      level: "Senior Level",
      logo: "☁️",
    },
    {
      company: "Oracle",
      location: "Austin, US",
      position: "Scientist",
      type: "Full Time",
      workMode: "Hybrid",
      salary: "$150K - $210K per year",
      level: "Senior Level",
      logo: "🔶",
    },

    // 8 Entry-Level Jobs
    {
      company: "Meta Platforms",
      location: "San Francisco, US",
      position: "Designer",
      type: "Part Time",
      workMode: "On-site",
      salary: "$90K - $120K per year",
      level: "Entry Level",
      logo: "📱",
    },
    {
      company: "Adobe",
      location: "San Jose, US",
      position: "Designer",
      type: "Part Time",
      workMode: "Hybrid",
      salary: "$85K - $110K per year",
      level: "Entry Level",
      logo: "🖌️",
    },
    {
      company: "LinkedIn",
      location: "Sunnyvale, US",
      position: "Developer",
      type: "Full Time",
      workMode: "Remote",
      salary: "$80K - $120K per year",
      level: "Entry Level",
      logo: "🔗",
    },
    {
      company: "Slack",
      location: "San Francisco, US",
      position: "Developer",
      type: "Full Time",
      workMode: "Hybrid",
      salary: "$85K - $120K per year",
      level: "Entry Level",
      logo: "💬",
    },
    {
      company: "Spotify",
      location: "Stockholm, Sweden",
      position: "Designer",
      type: "Part Time",
      workMode: "Remote",
      salary: "$75K - $100K per year",
      level: "Entry Level",
      logo: "🎵",
    },
    {
      company: "Snap Inc.",
      location: "Los Angeles, US",
      position: "Designer",
      type: "Full Time",
      workMode: "Hybrid",
      salary: "$70K - $90K per year",
      level: "Entry Level",
      logo: "👻",
    },
    {
      company: "Pinterest",
      location: "San Francisco, US",
      position: "Analyst",
      type: "Part Time",
      workMode: "Hybrid",
      salary: "$70K - $90K per year",
      level: "Entry Level",
      logo: "📍",
    },
    {
      company: "Zendesk",
      location: "San Francisco, US",
      position: "Engineer",
      type: "Full Time",
      workMode: "Remote",
      salary: "$80K - $100K per year",
      level: "Entry Level",
      logo: "💬",
    },
  ]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(""); // Debounced search term
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`w-full h-screen ${
        isMenuOpen && "overflow-hidden " 
      } bg-zinc-900 overflow-x-hidden`}
    >
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <JobSearchBar
        locations={locations}
        cat={cat}
        filteredCards={filteredCards}
        setFilteredCards={setFilteredCards}
        jobCards={jobCards}
        debouncedSearchTerm={debouncedSearchTerm}
        pos={pos}
        setDebouncedSearchTerm={setDebouncedSearchTerm}
      />
      <JobCards
        setLocations={setLocations}
        filteredCards={filteredCards}
        setCat={setCat}
        debouncedSearchTerm={debouncedSearchTerm}
        jobCards={jobCards}
        setPos={setPos}
      />
      <JobPortalFooter />
    </div>
  );
}

export default App;

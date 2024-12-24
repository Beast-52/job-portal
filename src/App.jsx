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
import FeaturedSection from "./components/FeaturedCards";
import Button from "./components/partials/Button";
import { ToastContainer } from "react-toastify";
import JobCardsComponent from "./components/Cards";

function App() {
  const [locations, setLocations] = useState(null);
  const [cat, setCat] = useState(null);
  const [pos, setPos] = useState(null);
  var featuredImg = [
    "https://www.jobringer.com/images/content/company-logo/hjp57b2d9a1b3ff03e0abcafccdc097db29.png",
    "https://www.jobringer.com/images/content/company-logo/hjp865ef4233d489190ee7a602824b6392b.png",
    "https://www.jobringer.com/images/content/company-logo/hjp82a3f90e0b7310f33f4a6bbe468af0f6.png",
    "https://www.jobringer.com/images/content/company-logo/hjp013ee6944a356dbdd4bfed0bc21092bf.png",
    "https://www.jobringer.com/images/content/company-logo/hjpdd20cfbca685549a0db3aa6065310fe0.png",
    "https://www.jobringer.com/images/content/company-logo/hjpa2f7d2ddb7bc3563adc760df78a79d6a.png",
    "https://www.jobringer.com/images/content/company-logo/hjpf11616fdc9308a376d61b3ccfdf401df.png",
    "https://www.jobringer.com/images/content/company-logo/hjp008b48b03e61b91cb07f8f394023d584.png",
    "https://www.jobringer.com/images/content/company-logo/hjp4dcf93284f5f232b81e49fd2ca8458f2.png",
    "https://www.jobringer.com/images/content/company-logo/hjp54c04ce1432eac46e9893361d3f4ec48.png",
    "https://www.jobringer.com/images/content/company-logo/hjp171a8d362acbfd4a02fe467818eb87e1.png",

    "https://www.jobringer.com/images/content/company-logo/hjp77cab2e415ed18323a70fd7622e1f919.png",
    "https://www.jobringer.com/images/content/company-logo/hjpc4d40a4fae87d3070f77c4bd58de9ecb.png",
    "https://www.jobringer.com/images/content/company-logo/hjp900cad56691ea8f3e1af71a2dc906276.png",
    "https://www.jobringer.com/images/content/company-logo/hjpcb99a2c978ee137fae0ee8938a86299f.png",
    "https://www.jobringer.com/images/content/company-logo/hjpde0325910dc79892a78e0d492d2cae89.png",
    "https://www.jobringer.com/images/content/company-logo/hjp447885f2519ded51a1d8da2b71184d00.png",
    "https://www.jobringer.com/images/content/company-logo/hjp152270965262471c66d37dd662917cc3.png",
    "https://www.jobringer.com/images/content/company-logo/hjpa38e6289f43c488f3c80d24bf3f76b7c.png",
    "https://www.jobringer.com/images/content/company-logo/hjp82a3f90e0b7310f33f4a6bbe468af0f6.png",
    "https://www.jobringer.com/images/content/company-logo/hjp013ee6944a356dbdd4bfed0bc21092bf.png",
    "https://www.jobringer.com/images/content/company-logo/hjpdd20cfbca685549a0db3aa6065310fe0.png",
    "https://www.jobringer.com/images/content/company-logo/hjpa2f7d2ddb7bc3563adc760df78a79d6a.png",
    "https://www.jobringer.com/images/content/company-logo/hjpf11616fdc9308a376d61b3ccfdf401df.png",
    "https://www.jobringer.com/images/content/company-logo/hjp008b48b03e61b91cb07f8f394023d584.png",
    "https://www.jobringer.com/images/content/company-logo/hjp4dcf93284f5f232b81e49fd2ca8458f2.png",
    "https://www.jobringer.com/images/content/company-logo/hjp54c04ce1432eac46e9893361d3f4ec48.png",
    "https://www.jobringer.com/images/content/company-logo/hjp171a8d362acbfd4a02fe467818eb87e1.png",
    "https://www.jobringer.com/images/content/company-logo/hjp77cab2e415ed18323a70fd7622e1f919.png",
    "https://www.jobringer.com/images/content/company-logo/hjpc4d40a4fae87d3070f77c4bd58de9ecb.png",
    "https://www.jobringer.com/images/content/company-logo/hjp900cad56691ea8f3e1af71a2dc906276.png",
    "https://www.jobringer.com/images/content/company-logo/hjpcb99a2c978ee137fae0ee8938a86299f.png",
    "https://www.jobringer.com/images/content/company-logo/hjpde0325910dc79892a78e0d492d2cae89.png",
    "https://www.jobringer.com/images/content/company-logo/hjp447885f2519ded51a1d8da2b71184d00.png",
    "https://www.jobringer.com/images/content/company-logo/hjp152270965262471c66d37dd662917cc3.png",
    "https://www.jobringer.com/images/content/company-logo/hjpa38e6289f43c488f3c80d24bf3f76b7c.png",
  ];

  const [jobCards, setJobCards] = useState([
    // 6 Mid-Level Jobs
    {
      company: "Apple ",
      location: "New York, US",
      position: "Designer",
      type: "Full Time",
      workMode: "On-site",
      salary: "$130K - $240K per year",
      level: "Mid Level",
      logo: "🍎",
    },
    {
      company: "Amazon ",
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
      company: "Google",
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
  const [location, setLocation] = useState("Select Location");
  const [category, setCategory] = useState("Select Category");

  return (
    <div
      className={`w-full  bg-zinc-900 ${
        isMenuOpen ? "overflow-hidden " : "overflow-x-hidden"
      }`}
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
        location={location}
        setLocation={setLocation}
        setCategory={setCategory}
        category={category}
        setDebouncedSearchTerm={setDebouncedSearchTerm}
      />
      <JobCardsComponent
        setLocations={setLocations}
        filteredCards={filteredCards}
        setCat={setCat}
        debouncedSearchTerm={debouncedSearchTerm}
        jobCards={jobCards}
        setPos={setPos}
        location={location}
        category={category}
      />
      <FeaturedSection featuredImg={featuredImg} />
      <JobPortalFooter />
      <ToastContainer />
    </div>
  );
}

export default App;

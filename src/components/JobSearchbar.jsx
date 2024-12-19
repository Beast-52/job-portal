import React, { useState, useEffect } from "react";
import { Search, MapPin, Layers, Zap } from "lucide-react";

const JobSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(""); // State to store debounced value
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const trendingKeywords = [
    { text: "DESIGNER", color: "from-green-400 to-green-600" },
    { text: "PHP", color: "from-yellow-400 to-yellow-600" },
    { text: "DEVELOPER", color: "from-red-400 to-red-600" },
    { text: "WEB DEVELOPER", color: "from-blue-400 to-blue-600" },
    { text: "WEB", color: "from-green-500 to-green-700" },
    { text: "NEXT LONDON", color: "from-purple-400 to-purple-600" },
    { text: "ENGINEER", color: "from-orange-500 to-orange-700" },
    { text: "LINUX", color: "from-gray-300 to-gray-500" },
    { text: "IOS", color: "from-blue-300 to-blue-500" },
  ];

  // Debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm); // Update the debounced value
    }, 300); // 300ms delay

    return () => {
      clearTimeout(handler); // Cleanup the timeout on every render
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Perform the search or API call with the debouncedSearchTerm
      console.log("Searching for:", debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-12">
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#121212] via-[#1e1e1e] to-[#121212] opacity-90 rounded-3xl blur-2xl"></div>

      <div className="relative z-10 bg-black/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Input */}
          <div className="md:col-span-4 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl opacity-30 group-hover:opacity-50 blur-lg transition duration-300"></div>
            <div className="relative flex items-center">
              <Search className="absolute left-4 text-zinc-400 group-hover:text-white transition" />
              <input
                type="text"
                placeholder="Job title or Company name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-zinc-900/50 text-white placeholder-zinc-500 rounded-xl border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>
          </div>

          {/* Location */}
          <div className="md:col-span-2 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl opacity-30 group-hover:opacity-50 blur-lg transition duration-300"></div>
            <div className="relative flex items-center">
              <MapPin className="absolute left-4 text-zinc-400 group-hover:text-white transition" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-zinc-900/50 text-white rounded-xl border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              >
                <option value="">Location</option>
                <option value="new-york">New York</option>
                <option value="san-francisco">San Francisco</option>
                <option value="london">London</option>
              </select>
            </div>
          </div>

          {/* Category */}
          <div className="md:col-span-2 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl opacity-30 group-hover:opacity-50 blur-lg transition duration-300"></div>
            <div className="relative flex items-center">
              <Layers className="absolute left-4 text-zinc-400 group-hover:text-white transition" />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-zinc-900/50 text-white rounded-xl border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              >
                <option value="">Category</option>
                <option value="design">Design</option>
                <option value="development">Development</option>
                <option value="marketing">Marketing</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="md:col-span-4 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl opacity-75 group-hover:opacity-100 animate-pulse"></div>
            <button className="relative w-full py-3 bg-black text-white rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 transition duration-300 flex items-center justify-center space-x-2">
              <Zap className="w-5 h-5" />
              <span>Search Jobs</span>
            </button>
          </div>
        </div>

        {/* Trending Keywords */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          {trendingKeywords.map((keyword, index) => (
            <span
              key={index}
              className={`
                inline-block 
                text-xs 
                px-3 
                py-1 
                rounded-full 
                bg-gradient-to-r 
                ${keyword.color}
                text-white 
                cursor-pointer 
                hover:scale-105 
                transition 
                duration-300
              `}
            >
              {keyword.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobSearchBar;

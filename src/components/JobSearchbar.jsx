import React, { useState, useEffect } from "react";
import { Search, MapPin, Layers, Zap, Plus } from "lucide-react";

const JobSearchBar = ({
  locations,
  cat,
  jobCards,
  filteredCards,
  debouncedSearchTerm,
  setDebouncedSearchTerm,
  setFilteredCards,
  pos,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("Select Location");
  const [category, setCategory] = useState("Select Category");

  // Immediately update debounced search term
  useEffect(() => {
    setDebouncedSearchTerm(searchTerm);
  }, [searchTerm, setDebouncedSearchTerm]);

  // Filter job cards based on all criteria
  useEffect(() => {
    const filtered = jobCards.filter((job) => {
      const searchTermLower = searchTerm.toLowerCase();
      const locationLower = location.toLowerCase();
      const categoryLower = category.toLowerCase();

      // Search term matching
      const searchMatch = 
        job?.position?.toLowerCase().includes(searchTermLower) ||
        job?.company?.toLowerCase().includes(searchTermLower) ||
        job?.location?.toLowerCase().includes(searchTermLower) ||
        job?.level?.toLowerCase().includes(searchTermLower);

      // Location matching
      const locationMatch = 
        location === "Select Location" ||
        job?.location?.toLowerCase() === locationLower;

      // Category matching
      const categoryMatch = 
        category === "Select Category" ||
        job?.level?.toLowerCase() === categoryLower;

      // If search is empty, use only location and category filters
      if (searchTerm === "") {
        return locationMatch && categoryMatch;
      }
      
      // If search has content, use all filters
      return searchMatch && locationMatch && categoryMatch;
    });

    setFilteredCards(filtered);
  }, [searchTerm, location, category, jobCards, setFilteredCards]);

  // Reset filters
  const resetFilters = () => {
    setSearchTerm("");
    setLocation("Select Location");
    setCategory("Select Category");
    setDebouncedSearchTerm("");
  };

  // Handle location change
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-12">
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#121212] via-[#1e1e1e] to-[#121212] opacity-90 rounded-3xl blur-2xl"></div>

      <div className="relative z-10 bg-black/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Input */}
          <div className="md:col-span-4 relative group w-full">
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
              {searchTerm.length > 0 && (
                <Plus
                  onClick={() => setSearchTerm("")}
                  className="absolute cursor-pointer top-1/2 -translate-y-1/2 text-red-600 right-3 rotate-45"
                />
              )}
            </div>
          </div>

          {/* Location */}
          <div className="md:col-span-2 relative group w-full">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl opacity-30 group-hover:opacity-50 blur-lg transition duration-300"></div>
            <div className="relative flex items-center">
              <MapPin className="absolute left-4 text-zinc-400 group-hover:text-white transition" />
              <select
                value={location}
                onChange={handleLocationChange}
                className="w-full pl-12 pr-4 py-3 bg-zinc-900/50 text-white rounded-xl border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition appearance-none"
              >
                <option>Select Location</option>
                {locations?.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category */}
          <div className="md:col-span-2 relative group w-full">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl opacity-30 group-hover:opacity-50 blur-lg transition duration-300"></div>
            <div className="relative flex items-center">
              <Layers className="absolute left-4 text-zinc-400 group-hover:text-white transition" />
              <select
                value={category}
                onChange={handleCategoryChange}
                className="w-full pl-12 pr-4 py-3 bg-zinc-900/50 text-white rounded-xl border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition appearance-none"
              >
                <option>Select Category</option>
                {cat?.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Reset Button */}
          <div className="md:col-span-4 relative group w-full">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl opacity-75 group-hover:opacity-100 animate-pulse"></div>
            <button 
              onClick={resetFilters}
              className="relative w-full py-3 bg-black text-white rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 transition duration-300 flex items-center justify-center space-x-2"
            >
              <Zap className="w-5 h-5" />
              <span>Reset Filters</span>
            </button>
          </div>
        </div>

        {/* Trending Keywords */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          {pos?.map((keyword, index) => (
            <span
              key={index}
              onClick={() => setSearchTerm(keyword)}
              className="inline-block text-xs px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white cursor-pointer hover:scale-105 transition duration-300"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobSearchBar;
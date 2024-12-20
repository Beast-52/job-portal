import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles

const JobCards = ({
  setLocations,
  setCat,
  jobCards,
  filteredCards,
  debouncedSearchTerm,
  setPos
}) => {
  const levels = ["Senior Level", "Mid Level", "Entry Level"];
  const levelColors = {
    "Senior Level": "from-purple-600 to-pink-600",
    "Mid Level": "from-blue-600 to-green-600",
    "Entry Level": "from-yellow-600 to-orange-600",
  };

  // Extract unique locations into a new array
  const uniqueLocations = [...new Set(jobCards.map((job) => job.location))];

  useEffect(() => {
    setLocations(uniqueLocations);
    setCat(levels);
    setPos(()=>[...new Set(jobCards.map((job) => job.position))])
  }, [jobCards, setLocations, setCat]);

  // Determine which cards to render: filtered or all
  const cardsToRender =
    debouncedSearchTerm?.length > 0 ? filteredCards : jobCards;

  return (
    <div className="bg-[#121212] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-[90%] md:max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-12">
          Explore Exciting Opportunities
        </h1>

        {cardsToRender.length > 0 ? (
          levels.map((level) => (
            <div key={level} className="mb-16">
              <h2
                className={`text-2xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r ${levelColors[level]}`}
              >
                {level} Jobs
              </h2>

              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                breakpoints={{
                  600: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {cardsToRender
                  .filter((job) => job.level === level)
                  .map((job, index) => (
                    <SwiperSlide
                      key={index}
                      className="relative p-1 group transform transition-all duration-300 "
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>

                      <div className="relative bg-zinc-900 p-6 rounded-2xl h-full border border-zinc-800 shadow-2xl">
                        <div className="flex justify-between items-start mb-6">
                          <div className="flex items-center space-x-4">
                            <div className="text-5xl">{job.logo}</div>
                            <div>
                              <h3 className="text-xl font-semibold text-white">
                                {job.company}
                              </h3>
                              <p className="text-zinc-400 text-sm">
                                {job.location}
                              </p>
                            </div>
                          </div>
                          <div className="text-zinc-500 hover:text-red-500 cursor-pointer transition">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h2 className="text-2xl font-bold text-white">
                            {job.position}
                          </h2>

                          <div className="flex flex-wrap gap-2">
                            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">
                              {job.level}
                            </span>
                            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs">
                              {job.type}
                            </span>
                            <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs">
                              {job.workMode}
                            </span>
                          </div>

                          <div className="text-zinc-300 font-medium">
                            {job.salary}
                          </div>
                        </div>

                        <div className="mt-6">
                          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition duration-300 transform hover:scale-[1.02]">
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          ))
        ) : (
          <div className="text-center text-white mt-8">
            <p>No jobs found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCards;

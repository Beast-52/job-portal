import React, { useEffect } from "react";
import { Pagination, Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const JobCards = ({
  setLocations,
  setCat,
  jobCards,
  filteredCards,
  debouncedSearchTerm,
  location,
  category,
  setPos,
}) => {
  const levels = ["Senior Level", "Mid Level", "Entry Level"];
  const levelColors = {
    "Senior Level": "from-purple-600 to-pink-600",
    "Mid Level": "from-blue-600 to-green-600",
    "Entry Level": "from-yellow-600 to-orange-600",
  };

  const uniqueLocations = [...new Set(jobCards.map((job) => job.location))];

  useEffect(() => {
    setLocations(uniqueLocations);
    setCat(levels);
    setPos(() => [...new Set(jobCards.map((job) => job.position))]);
  }, [jobCards, setLocations, setCat, setPos]);

  const cardsToRender = filteredCards?.length > 0 ? filteredCards : jobCards;

  // Filter job cards by location and category
  const filteredJobs = cardsToRender.filter((job) => {
    const locationMatch =
      location === "Select Location" || job.location === location;
    const categoryMatch =
      category === "Select Category" || job.level === category;
    return locationMatch && categoryMatch;
  });

  // Filter jobs by level after location and category are applied
  const levelsToRender = levels.filter((level) =>
    filteredJobs.some((job) => job.level === level)
  );

  return (
    <div className="min-h-screen bg-[#121212] py-8 sm:py-12 md:py-16">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:max-w-7xl">
        <h1 className="mb-8 md:mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Explore Exciting Opportunities
        </h1>

        {filteredJobs.length === 0 ? (
          <div className="text-center text-white mt-8">
            <p>No jobs found matching your search criteria.</p>
          </div>
        ) : (
          levelsToRender.map((level) => {
            const levelJobs = filteredJobs.filter((job) => job.level === level);
            const shouldShowNavigation = levelJobs.length > 3;
            return (
              <div key={level} className="mb-8 sm:mb-12 md:mb-16">
                <h2
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r ${levelColors[level]}`}
                >
                  {level} Jobs
                </h2>

                <div className="relative group">
                  <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={16}
                    slidesPerView={1}
                    navigation={shouldShowNavigation}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                        spaceBetween: 12,
                      },
                      540: {
                        slidesPerView: 1,
                        spaceBetween: 16,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                      },
                      1280: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                      },
                    }}
                    className={`job-swiper-container ${
                      !shouldShowNavigation ? "no-navigation" : ""
                    }`}
                  >
                    {levelJobs.map((job, jobIndex) => (
                      <SwiperSlide key={jobIndex} className="px-1 py-2">
                        <div className="relative p-1 h-full">
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
                          <div className="relative h-full bg-zinc-900 p-4 sm:p-6 rounded-xl border border-zinc-800 shadow-2xl">
                            {/* Card Header */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-4">
                              <div className="flex items-center gap-3 sm:gap-4">
                                <div className="text-3xl sm:text-4xl lg:text-5xl">
                                  {job.logo}
                                </div>
                                <div>
                                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                                    {job.company}
                                  </h3>
                                  <p className="text-zinc-400 text-xs sm:text-sm">
                                    {job.location}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Card Body */}
                            <div className="space-y-3 sm:space-y-4">
                              <h2 className="text-xl sm:text-2xl font-bold text-white">
                                {job.position}
                              </h2>
                              <div className="flex overflow-hidden md:gap-5 lg:gap-2">
                                <span className="bg-green-500/20 shrink-0 text-green-400 px-2 sm:px-3 py-1 rounded-full text-xs">
                                  {job.level}
                                </span>
                                <span className="bg-blue-500/20 shrink-0 text-blue-400 px-2 sm:px-3 py-1 rounded-full text-xs">
                                  {job.type}
                                </span>
                                <span className="bg-purple-500/20 shrink-0 text-purple-400 px-2 sm:px-3 py-1 rounded-full text-xs">
                                  {job.workMode}
                                </span>
                              </div>
                              <div className="text-zinc-300 text-sm sm:text-base font-medium">
                                {job.salary}
                              </div>
                            </div>

                            {/* Card Footer */}
                            <div className="mt-4 sm:mt-6">
                              <a
                                href="#"
                                className="block w-full text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 sm:py-3 px-4 rounded-lg text-sm sm:text-base font-medium hover:from-purple-700 hover:to-pink-700 transition duration-300 transform hover:scale-[1.02]"
                              >
                                Apply Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            );
          })
        )}
      </div>
      <style>
        {`
        .job-swiper-container {
          position: relative;
          padding: 2rem 3rem !important;
        }

        @media (max-width: 640px) {
          .job-swiper-container {
            padding: 2rem 0 !important;
          }
        }

        .job-swiper-container .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        .job-swiper-container .swiper-pagination-bullet-active {
          width: 20px;
          background: linear-gradient(90deg, #9333ea, #db2777);
        }

        .job-swiper-container .swiper-button-next,
        .job-swiper-container .swiper-button-prev {
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
          position: absolute;
          top: 50%;
          z-index: 10;
          width: 40px;
          height: 40px;
          background: rgba(18, 18, 18, 0.8);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(4px);
          padding: 0;
          cursor: pointer;
        }

        .job-swiper-container .swiper-button-next {
          right: 0;
        }

        .job-swiper-container .swiper-button-prev {
          left: 0;
        }

        .job-swiper-container .swiper-button-next::after,
        .job-swiper-container .swiper-button-prev::after {
          font-size: 1.25rem;
          font-weight: bold;
        }

        .job-swiper-container .swiper-button-next:hover,
        .job-swiper-container .swiper-button-prev:hover {
          color: rgba(255, 255, 255, 1);
          background: rgba(18, 18, 18, 1);
          transform: scale(1.1);
        }

        .job-swiper-container .swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        @media (max-width: 640px) {
          .job-swiper-container .swiper-button-next,
          .job-swiper-container .swiper-button-prev {
            display: none;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .job-swiper-container {
            padding: 1.5rem 2.5rem !important;
          }
        }
      `}
      </style>
    </div>
  );
};

export default JobCards;

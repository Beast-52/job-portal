import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const jobCards = [
  // 6 Mid-Level Jobs
  {
    company: "Apple Corporation",
    location: "New York, US",
    position: "Product Designer",
    type: "Full Time",
    workMode: "On-site",
    salary: "$130K - $240K per year",
    level: "Mid Level",
    logo: "🍎",
  },
  {
    company: "Amazon Inc.",
    location: "Seattle, US",
    position: "Front-end Developer",
    type: "Full Time",
    workMode: "Remote",
    salary: "$120K - $180K per year",
    level: "Mid Level",
    logo: "🛒",
  },
  {
    company: "Tesla",
    location: "Austin, US",
    position: "Motion Designer",
    type: "Full Time",
    workMode: "Hybrid",
    salary: "$110K - $150K per year",
    level: "Mid Level",
    logo: "🚗",
  },
  {
    company: "Spotify",
    location: "Stockholm, Sweden",
    position: "Sound Engineer",
    type: "Full Time",
    workMode: "On-site",
    salary: "$95K - $140K per year",
    level: "Mid Level",
    logo: "🎵",
  },
  {
    company: "Twitter",
    location: "San Francisco, US",
    position: "Backend Developer",
    type: "Full Time",
    workMode: "Hybrid",
    salary: "$130K - $190K per year",
    level: "Mid Level",
    logo: "🐦",
  },
  {
    company: "Dropbox",
    location: "San Francisco, US",
    position: "DevOps Engineer",
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
    position: "Senior UX/UI Designer",
    type: "Full Time",
    workMode: "Hybrid",
    salary: "$145K - $200K per year",
    level: "Senior Level",
    logo: "🌐",
  },
  {
    company: "Microsoft",
    location: "Redmond, US",
    position: "Software Engineer",
    type: "Full Time",
    workMode: "Hybrid",
    salary: "$140K - $220K per year",
    level: "Senior Level",
    logo: "💻",
  },
  {
    company: "Netflix",
    location: "Los Angeles, US",
    position: "UI/UX Researcher",
    type: "Full Time",
    workMode: "Remote",
    salary: "$125K - $190K per year",
    level: "Senior Level",
    logo: "🎬",
  },
  {
    company: "Airbnb",
    location: "San Francisco, US",
    position: "Product Manager",
    type: "Full Time",
    workMode: "Remote",
    salary: "$150K - $230K per year",
    level: "Senior Level",
    logo: "🏠",
  },
  {
    company: "Adobe",
    location: "San Jose, US",
    position: "Senior Graphic Designer",
    type: "Part Time",
    workMode: "Hybrid",
    salary: "$110K - $150K per year",
    level: "Senior Level",
    logo: "🖌️",
  },
  {
    company: "Salesforce",
    location: "San Francisco, US",
    position: "Senior Frontend Engineer",
    type: "Full Time",
    workMode: "Hybrid",
    salary: "$160K - $220K per year",
    level: "Senior Level",
    logo: "☁️",
  },
  {
    company: "Oracle",
    location: "Austin, US",
    position: "Senior Data Scientist",
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
    position: "Interaction Designer",
    type: "Part Time",
    workMode: "On-site",
    salary: "$90K - $120K per year",
    level: "Entry Level",
    logo: "📱",
  },
  {
    company: "Adobe",
    location: "San Jose, US",
    position: "Graphic Designer",
    type: "Part Time",
    workMode: "Hybrid",
    salary: "$85K - $110K per year",
    level: "Entry Level",
    logo: "🖌️",
  },
  {
    company: "LinkedIn",
    location: "Sunnyvale, US",
    position: "Junior Frontend Developer",
    type: "Full Time",
    workMode: "Remote",
    salary: "$80K - $120K per year",
    level: "Entry Level",
    logo: "🔗",
  },
  {
    company: "Slack",
    location: "San Francisco, US",
    position: "Junior Backend Developer",
    type: "Full Time",
    workMode: "Hybrid",
    salary: "$85K - $120K per year",
    level: "Entry Level",
    logo: "💬",
  },
  {
    company: "Spotify",
    location: "Stockholm, Sweden",
    position: "Junior Designer",
    type: "Part Time",
    workMode: "Remote",
    salary: "$75K - $100K per year",
    level: "Entry Level",
    logo: "🎵",
  },
  {
    company: "Snap Inc.",
    location: "Los Angeles, US",
    position: "Junior Motion Designer",
    type: "Full Time",
    workMode: "Hybrid",
    salary: "$70K - $90K per year",
    level: "Entry Level",
    logo: "👻",
  },
  {
    company: "Pinterest",
    location: "San Francisco, US",
    position: "Junior Data Analyst",
    type: "Part Time",
    workMode: "Hybrid",
    salary: "$70K - $90K per year",
    level: "Entry Level",
    logo: "📍",
  },
  {
    company: "Zendesk",
    location: "San Francisco, US",
    position: "Junior Software Engineer",
    type: "Full Time",
    workMode: "Remote",
    salary: "$80K - $100K per year",
    level: "Entry Level",
    logo: "💬",
  },
];

const JobCards = () => {
  return (
    <div className="bg-[#121212] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-[90%] md:max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-12">
          Explore Exciting Opportunities
        </h1>

        {/* Job Cards Grid */}
        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 "
          >
            {jobCards
              .filter((item) => item.level == "Senior Level")
              .map((job, index) => (
                <SwiperSlide
                  key={index}
                  className="relative group transform transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Gradient Border Animation */}
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
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-10"
          >
            {jobCards
              .filter((item) => item.level == "Mid Level")
              .map((job, index) => (
                <SwiperSlide
                  key={index}
                  className="relative group transform transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Gradient Border Animation */}
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
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {jobCards
              .filter((item) => item.level == "Entry Level")
              .map((job, index) => (
                <SwiperSlide
                  key={index}
                  className="relative group transform transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Gradient Border Animation */}
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
      </div>
    </div>
  );
};

export default JobCards;

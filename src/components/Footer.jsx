import React from "react";
import { ArrowUpRight, Briefcase, Users, Building2, Mail } from "lucide-react";
import Button from "./partials/Button";

const JobPortalFooter = () => {
  const stats = [
    { label: "Active Jobs", value: "2.4k+", icon: Briefcase },
    { label: "Companies", value: "1.8k+", icon: Building2 },
    { label: "Job Seekers", value: "12k+", icon: Users },
  ];

  const categories = [
    "Technology",
    "Marketing",
    "Design",
    "Sales",
    "Finance",
    "Healthcare",
  ];

  const locations = [
    "New York",
    "San Francisco",
    "London",
    "Toronto",
    "Singapore",
    "Berlin",
  ];

  return (
    <footer className="relative w-full text-zinc-100">
      {/* Background gradient matching navbar exactly */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#1e1e1e] to-[#121212] opacity-95 backdrop-blur-xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative group flex items-center space-x-4 bg-black/20 rounded-lg p-6"
            >
              <stat.icon className="h-8 w-8 text-zinc-400 group-hover:text-white transition-colors duration-300" />
              <div>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-zinc-400 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
              {/* Gradient hover effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg opacity-0 group-hover:opacity-10 transition duration-300 blur-lg"></div>
            </div>
          ))}
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-white">JobPortal</h3>
            <p className="text-zinc-400">
              Connecting talent with opportunities worldwide
            </p>
            <button className="relative group px-4 py-2 rounded-lg overflow-hidden">
              <Button item="Post a Job" />
            </button>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Job Categories
            </h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category} className="relative group cursor-pointer w-fit">
                  <span className="text-zinc-300 group-hover:text-white transition-colors duration-300">
                    {category}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Locations</h4>
            <ul className="space-y-2">
              {locations.map((location) => (
                <li
                  key={location}
                  className="relative group cursor-pointer w-fit"
                >
                  <span className="text-zinc-300 group-hover:text-white transition-colors duration-300">
                    {location}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Stay Updated
            </h4>
            <div className="relative group">
              <div className="flex items-center space-x-2 bg-black/20 rounded-lg p-3">
                <Mail className="h-5 w-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent border-none outline-none placeholder-zinc-500 text-zinc-300 flex-1"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg opacity-0 group-hover:opacity-10 transition duration-300 blur-lg"></div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-zinc-500">
            © 2024 JobPortal. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Contact Us"].map(
              (item) => (
                <a key={item} href="#" className="relative group">
                  <span className="text-sm text-zinc-400 group-hover:text-white transition-colors duration-300">
                    {item}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default JobPortalFooter;

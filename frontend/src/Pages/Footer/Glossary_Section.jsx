/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import search from "../../assets/searchIcon.svg";
import Product_Compliance from "./Product_Compliance.jsx";
import Customer_Stories from "./Customer_Stories.jsx";
import Section_Explore_More from "./Section_Explore_More.jsx";
import { glossaryData } from "../../data/data.js";

const Glossary_Section = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="text-base">
      <div className="min-[1380px]:max-w-[1380px] w-full mx-auto px-3 text-center sm:text-left">
        <h1 className="mt-[2.188rem] text-3xl font-medium text-center sm:text-left">
          Search other terms
        </h1>
        <p className="mt-3 text-[1.0625rem] font-light text-center sm:text-left w-[20.6875rem] sm:w-full mx-auto">
          Check out our glossary of common human resource terms and definitions.
        </p>

        {/* search bar  */}
        <div className="mt-[1.813rem] inline-flex items-center gap-[0.813rem] bg-[#00000008] w-[16.125rem] sm:w-[34rem] rounded-[2.5rem] relative">
          <img
            src={search}
            alt="search"
            className="absolute top-1/2 transform -translate-y-1/2 left-4"
          />
          <input
            type="text"
            placeholder="Search by keyword"
            className="border-none outline-none rounded-[2.5rem] py-[0.925rem] pr-4 pl-11 w-full h-full text-base font-normal bg-transparent"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>

        <p
          className={`mt-6 text-[#6c6c6c] text-base font-light text-left ${
            glossaryData.filter((profile) =>
              profile.title.toLowerCase().includes(searchTerm.toLowerCase())
            ).length === 0
              ? "block"
              : "hidden"
          }`}
        >
          Sorry :( No matching results found for "{searchTerm}" keyword
        </p>

        {/* glossary  */}
        <div className="mt-8 flex flex-wrap gap-4 justify-start w-full">
          <div className="w-full">
            <div className="flex flex-wrap justify-center sm:justify-normal">
              {glossaryData
                .filter((profile) => {
                  if (searchTerm === "") {
                    return profile;
                  } else if (
                    profile.title
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return profile;
                  }
                })
                .map((profile) => (
                  <div
                    key={profile.id}
                    className="w-4/5 mb-4 sm:w-full sm:max-w-full min-[992px]:w-1/4 min-[768px]:w-1/3 px-3"
                  >
                    <a
                      href={`/glossary/${profile.title
                        .toLowerCase()
                        .split(" ")
                        .join("-")
                        .replace(/\(.+?\)/g, "")}`}
                      className="hover:text-white hover:bg-[#1d68bd] w-full h-11 leading-[2.75rem] text-center px-[0.68rem] cursor-pointer rounded-[0.313rem] bg-[#1d68bd1a] block truncate"
                    >
                      {profile.title}
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Product_Compliance />
      <Customer_Stories />
      <Section_Explore_More />
    </section>
  );
};
export default Glossary_Section;

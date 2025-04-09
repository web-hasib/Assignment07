import React from "react";

const Hero = () => {
  return (
    <div className="">
      <div
        className="hero place-items-start"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/zT6S8nr7/Banner-min.jpg)",
        }}
      >
        <div className="hero-content text-neutral-content h-lvh ml-12">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">
              Bid on Unique Items from Around the World
            </h1>
            <p className="mb-5 text-sm text-gray-50 font-light">
              Discover rare collectibles, luxury goods, and vintage treasures in
              our curated auctions
            </p>
            <button className="btn rounded-full text-xs bg-gray-200 hover:bg-yellow-300 px-6">
              Explore Auctions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

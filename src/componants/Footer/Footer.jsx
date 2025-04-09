import React from "react";

const Footer = () => {
  return (
    <div>
     
      <footer className="footer footer-horizontal footer-center bg-white p-10">
        <aside>
        <a className=" text-2xl text-[#003EA4] font-bold">
            Auction <span className="text-yellow-600 text-3xl">Gallery</span>
          </a>
          <div className="text-neutral-700 font-semibold text-lg flex gap-4 mt-2">
            <a href="#">Bid.</a>
            <a href="#">Win.</a>
            <a href="#">Own</a>
          </div>
          <div>
          <div className="flex gap-5 text-sm font-semibold text-neutral-700 ">
             <a className="hover:text-yellow-600" href="#">Home </a>
             <a className="hover:text-yellow-600" href="#">Auctions</a>
             <a className="hover:text-yellow-600" href="#">Categories</a>
             <a className="hover:text-yellow-600" href="#">How to works</a>
        </div>
          </div>
          <p className="text-xs pt-3 text-gray-600"> © {new Date().getFullYear()} -AuctionHub. All rights reserved.</p>
        </aside>
      
      </footer>
    </div>
  );
};

export default Footer;

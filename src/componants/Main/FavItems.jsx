// import React, { useState } from 'react';

import { FaHeart } from "react-icons/fa6";

const FavItems = ({favData, bidPrice, handleRemove,handleRemoveBidPrice}) => {
    // const [bidPrice, setBidPrice] = useState(0);
    const handleAlert = (data) => {
        alert(`You have been removed ${data.title} from your favorites`);
    }

    return (
        <div>

{/* 
bidsCount
: 
12
currentBidPrice
: 
85.5
description
: 
"Handcrafted vintage leather bag with premium quality."
id
: 
1
image
: 
"https://images-cdn.ubuy.ae/6368124f0a547006b811d1aa-newhey-mens-laptop-shoulder-canvas.jpg"
timeLeft
: 
"2d 5h"
title
: 
"Vintage Leather Bag" */}

            <h1 className='text-center flex items-center gap-2 justify-center pb-3'>  <FaHeart size={20} color='gray' /> Favorite Items</h1>
            <h1 className='border-b border-dashed text-gray-200'></h1>
            {
                favData.map(i=>
                        <div className='border-b border-dashed text-gray-100' key={i.id}>
                    <div className="flex justify-between  p-3 w-auto ">
                    
                    <img
                      src={i.image}
                      alt="Guitar"
                      className="w-16 h-16 object-cover rounded-md"
                    />
              
                  {/* <h1>skljd</h1> */}
                    <div className="ml-3 flex-1">
                      <h3 className="text-sm font-medium text-gray-800 leading-tight">
                       {i.title}
                      </h3>
                      <div className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">${i.currentBidPrice}</span>
                        <span className="ml-4">Bids: {i.bidsCount}</span>
                      </div>
                    </div>
              
                    <button onClick={()=> {
                        handleRemove(i.id);
                        handleRemoveBidPrice(i.currentBidPrice);
                        handleAlert(i);
                        
                    }} className=" text-gray-400 hover:text-gray-600 text-2xl">
                  
                      x
                    </button>
                  </div>
                  </div>

             
            )
            }

            <h2 className="flex justify-around">Total bid amount  <span> $ {bidPrice}</span>    </h2>
        </div>
    );
};

export default FavItems;
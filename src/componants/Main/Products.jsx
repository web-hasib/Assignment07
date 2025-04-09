import React, { useEffect, useState } from "react";
// import { Toaster } from "react-hot-toast";

import { FaHeart } from "react-icons/fa6";
import {  toast } from 'react-toastify';




const Products = ({handleFavData, handleBidPrice}) => {

  // const showToastMessage = () => {
  //   toast.success('You have added to your favorites!', {
  //     position: 'top-right',
  //     className: 'toast-message',
  //   });
  // };

 

  const [data, setData] = useState([]);
  // const [color, setColor] = useState("");
  
  const [clickedItems, setClickedItems] = useState([]); 
  
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const handleAlert =(data)=>{
    // alert(`You have added ${data.title} to your favorites`);
    // toast.success(`Successfully toasted! `);
    console.log(data);
    
  };
  const notify = () => toast.success("Wow so easy !");
  

  
  const handleClick = (item) => {
    const isClicked = clickedItems.find(clickedItem => clickedItem.id === item.id);

    if (!isClicked) {
      setClickedItems([...clickedItems, item]); 
    }

    handleFavData(item);
    handleBidPrice(item.currentBidPrice);
    handleAlert(item);
  };

  // console.log(data);
  return (
    <>
  

      <div className="mt-10 bg-white rounded-xl shadow-lg p-6">
        <table className="w-full text-left ">
          <thead>
            <tr className="text-gray-200 border-b border-dashed text-sm">
              <th className="text-gray-600 pb-3">Items</th>
              <th className="text-gray-600 pb-3">Current Bid</th>
              <th className="text-gray-600 pb-3">Time Left</th>
              <th className="text-gray-600 pb-3">Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className=" hover:bg-gray-50">
                <td className="flex items-center gap-4 py-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 rounded-md"
                  />
                  <span className="font-medium text-gray-800">
                    {item.title}
                  </span>
                </td>
                <td className="text-gray-700">$ {item.currentBidPrice
                }</td>
                <td className="text-gray-700">{item.timeLeft}</td>
                <td>
                  <button style={{}} onClick={() => {
                    handleClick(item)
                    notify()
                    
                      
                  
                  }} className= "hover text-gray-400 hover:text-red-500"   disabled={clickedItems.find(clickedItem => clickedItem.id === item.id)}>
                 
                  <FaHeart size={20}  color= {
                      clickedItems.find(clickedItem => clickedItem.id === item.id)
                        ? "red"
                        : ""
                    } />
                
                 
                    
                  </button>
                  {/* <ToastContainer/> */}
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Products;
// export { Products };
// export { ToastContainer };

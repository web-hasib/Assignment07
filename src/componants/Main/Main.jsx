
import FavItems from './FavItems';
import { useState } from 'react';
import Products from './Products';
import EmptyFav from './EmptyFav';


const Main = () => {
   
    // console.log(data);
    const [favData, setFavData] = useState([]);
    const [bidPrice, setBidPrice] = useState(0);
    const handleFavData = (Data) => {
      setFavData([...favData,Data]);
     
      // console.log(Data);
    };
    const handleBidPrice = (amount)=>{
      setBidPrice(bidPrice+amount);
    };
    console.log(favData);
    // console.log(bidPrice);
    const handleRemove = (id) => {
      const updatedData = favData.filter((item) => item.id !== id);
      setFavData(updatedData);
    }
    const handleRemoveBidPrice = (amount) => {
      setBidPrice(bidPrice-amount);
    }

    
    
    return (
        
       <div className='bg-blue-50'>
        <div className='w-11/12 mx-auto my-10'>
        <div className='pl-4'>
          <h1 className='text-2xl font-bold text-blue-900 '>Active Auctions</h1>
          <p className='font-thin py-2 text-sm'>Discover and bid on extraordinary items</p>
        </div>
         <div className='flex justify-between items-center  gap-3'>
           <div className='w-[70%]'>
          <Products handleFavData={handleFavData}  handleBidPrice={handleBidPrice} />
           </div>
           <div className='w-[30%]'>
               <div className="mt-10 bg-white rounded-xl shadow-lg p-6">
               
              
              
                {
                  favData.length===0 ? <EmptyFav/> :  <FavItems favData={favData} bidPrice={bidPrice} handleRemove={handleRemove} handleRemoveBidPrice={handleRemoveBidPrice}/>
                }
               </div>
           </div>
           
        </div>
        </div>
       </div>
    );
};

export default Main;
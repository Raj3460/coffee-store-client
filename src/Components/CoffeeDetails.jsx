import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
       const singleCoffee = useLoaderData();
       console.log(singleCoffee);








       const {name , photo, chef ,supplier , taste , details} = singleCoffee;
       return (
              <div className='px-14'>
                     <div className=' flex justify-around border-2 p-5 '>
                            <div>
                                   <img src={photo} alt="" />
                            </div>
                            <div>
                                   <h1 className='text-2xl py-3.5'>NiceTies</h1>
                                   <p className='text-xl'><span className='font-semibold'>Name : </span>{name}</p>
                                   <p className='text-xl'><span className='font-semibold'>Chef : </span>{chef}</p>
                                   <p className='text-xl'><span className='font-semibold'>Supplier : </span>{supplier}</p>
                                   <p className='text-xl'><span className='font-semibold'>Taste : </span>{taste}</p>
                                   <p className='text-xl'><span className='font-semibold'>Details : </span>{details}</p>

                            </div>
                     </div>
              </div>
       );
};

export default CoffeeDetails;
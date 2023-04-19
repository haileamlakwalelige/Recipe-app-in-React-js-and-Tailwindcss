import React from 'react';

import image1 from './img/food-one.jpg'
import image2 from './img/food-two.jpg'
import image3 from './img/food-three.jpg'
import image4 from './img/food-four.jpg'
import image5 from './img/food-five.jpg'
import image6 from './img/food-six.jpg'
import image7 from './img/food-seven.jpg'
import image31 from './img/food-31.jpg'
import image32 from './img/food-32.jpg'

const items=[
    {
        id:1,
        image:image31,
        text:'your something food',
        auto:'Recipe by Kingo',
    },
    {
        id:2,
        image:image32,
        text:'your number one food',
        auto:'Recipe by Kingo',
    },
    {
        id:8,
        image:image1,
        text:'your first food',
        auto:'Recipe by Kingo',
    },
    {
        id:9,
        image:image2,
        text:'your super-star food',
        auto:'Recipe by Kingo',
    },
    {
        id:3,
        image:image3,
        text:'your thrusted food',
        auto:'Recipe by Kingo',
    },
    {
        id:4,
        image:image4,
        text:'your forever food',
        auto:'Recipe by Kingo',
    },
    {
        id:5,
        image:image5,
        text:'your familiar food',
        auto:'Recipe by Kingo',
    },
    {
        id:6,
        image:image6,
        text:'your smart food',
        auto:'Recipe by Kingo',
    },
    {
        id:7,
        image:image7,
        text:'your and your food',
        auto:'Recipe by Kingo',
    },
    
    ];

    const Load=()=>{
        return(
            <div  className="grid grid-cols-3 gap-10">
            {items.map(item =>
                (
    
       <div className="card" key={item.id}>
           <img src={item.image} alt=" first food" className="w-full h-48" />
           <div>
               <span className="block font-bold justify-center pl-5 uppercase"> {item.text}</span>
               <span className="block font-bold opacity-50 pl-5">{item.auto}</span>
           </div>
           <div className='flex font-bold absolute bg-gray-200  rounded-lg p-1 ml-1 mt-[-115%]'>
       <svg className="w-5 mr-2 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
       </svg>
       <span>25 min</span>
       </div>
       </div>
    
                ))} 
                </div>
        ); 
    }
    export default Load;
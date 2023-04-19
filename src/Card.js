import React from 'react';

import image1 from './img/food-one.jpg'
import image2 from './img/food-two.jpg'
import image3 from './img/food-three.jpg'
import image4 from './img/food-four.jpg'
import image5 from './img/food-five.jpg'
import image6 from './img/food-six.jpg'
import image7 from './img/food-seven.jpg'
import image8 from './img/food-eight.jpg'
import image9 from './img/food-nine.jpg'
import image10 from './img/food-21.jpg'
import image11 from './img/food-ten.jpg'
import image12 from './img/food-11.jpg'
import image13 from './img/food-12.jpg'
import image14 from './img/food-13.jpg'
import image15 from './img/food-14.jpg'
import image16 from './img/food-15.jpg'
import image17 from './img/food-16.jpg'
import image18 from './img/food-17.jpg'
import image19 from './img/food-18.jpg'
import image20 from './img/food-19.jpg'
import image21 from './img/food-20.jpg'

// const image ={image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21};

const items=[
    {
        id:1,
        image:image1,
        text:'your first food',
        auto:'Recipe by Kingo',
    },
    {
        id:2,
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
    {
        id:8,
        image:image8,
        text:'your something food',
        auto:'Recipe by Kingo',
    },
    {
        id:9,
        image:image9,
        text:'your number one food',
        auto:'Recipe by Kingo',
    },
    {
        id:10,
        image:image10,
        text:'your favorite food',
        auto:'Recipe by Kingo',
    },
   
    {
        id:11,
        image:image11,
        text:'your first-love food',
        auto:'Recipe by Kingo',
    },
    {
        id:12,
        image:image12,
        text:'your romantic food',
        auto:'Recipe by Kingo',
    },
    {
        id:13,
        image:image13,
        text:'your unforgettable food',
        auto:'Recipe by Kingo',
    },
    {
        id:14,
        image:image14,
        text:'your star food',
        auto:'Recipe by Kingo',
    },
    {
        id:15,
        image:image15,
        text:'your supper food',
        auto:'Recipe by Kingo',
    },
    {
        id:16,
        image:image16,
        text:'your first food',
        auto:'Recipe by Kingo',
    },
    {
        id:17,
        image:image17,
        text:'your different food',
        auto:'Recipe by Kingo',
    },
    {
        id:19,
        image:image19,
        text:'your simple food',
        auto:'Recipe by Kingo',
    },
    {
        id:18,
        image:image18,
        text:'your delicious food',
        auto:'Recipe by Kingo',
    },
    {
        id:20,
        image:image20,
        text:'your fantasy food',
        auto:'Recipe by Kingo',
    },
    {
        id:21,
        image:image21,
        text:'your amazing food',
        auto:'Recipe by Kingo',
    },
]
const Card=()=>{
    return(
        <div  className="grid sm:grid-cols-3 xs:grid-cols-2 gap-5 relative">
        {items.map(item =>
            (

   <div className="card relative sm:h-90" key={item.id}>
       <img src={item.image} alt=" first food" className="w-full h-48 sm:h-90" />
       <div className='relative'>
           <span className="block font-bold justify-center pl-1 uppercase relative"> {item.text}</span>
           <span className="block font-bold opacity-50 pl-5 relative">{item.auto}</span>
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
export default Card;
    
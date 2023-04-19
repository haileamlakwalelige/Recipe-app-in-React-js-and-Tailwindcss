import React from 'react';

import image22 from './img/food-23.jpg'
import image23 from './img/food-24.jpg'
import image24 from './img/food-25.jpg'
import image25 from './img/food-26.jpg'
import image26 from './img/food-27.jpg'
import image27 from './img/food-22.jpg'
import image28 from './img/food-28.jpg'
import image29 from './img/food-29.jpg'
import image30 from './img/food-30.jpg'

const items=[
{
    id:1,
    image:image22,
    text:'your star food',
    auto:'Recipe by Kingo',
},
{
    id:2,
    image:image23,
    text:'your supper food',
    auto:'Recipe by Kingo',
},
{
    id:3,
    image:image24,
    text:'your first food',
    auto:'Recipe by Kingo',
},
{
    id:4,
    image:image25,
    text:'your different food',
    auto:'Recipe by Kingo',
},
{
    id:5,
    image:image26,
    text:'your simple food',
    auto:'Recipe by Kingo',
},
{
    id:6,
    image:image27,
    text:'your delicious food',
    auto:'Recipe by Kingo',
},
{
    id:7,
    image:image28,
    text:'your fantasy food',
    auto:'Recipe by Kingo',
},
{
    id:8,
    image:image29,
    text:'your amazing food',
    auto:'Recipe by Kingo',
},
{
    id:9,
    image:image30,
    text:'your amazing food',
    auto:'Recipe by Kingo',
},
]
const Popular=()=>{
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
export default Popular;
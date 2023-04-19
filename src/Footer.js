import React from 'react';

const Footer=()=>{
    return(
        <div className="bg-gray-700">
            <div className="py-4">
                <h1 className="text-white font-bold text-3xl pl-3 font-serif">Haileamlak Waleligne </h1>
            </div>
            <div >
            <ul className="flex justify-end p-4">
                <li className="text-green-500 flex border-green-500 border-r-4 hover:border-red-500  border-t-none w-30 hover:text-red-500 ">
                    <a href="/" className="px-2 py-2">
                        <span className="font-bold">Home</span>
                    </a>
                    <svg className=" mr-2 w-5 pr-0" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                </li>
                <li className=" hover:text-red-500 border-r-4  border-green-500 hover:border-red-500 flex">
                    <a href="/" className="px-4 py-2"><span className="font-bold ">About</span></a>
                    <svg class="mr-2 w-5 pr-0" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                </li>
                <li className="  hover:text-red-500  border-r-4  border-green-500 hover:border-red-500 flex">
                    <a href="/" className="px-4 py-2 font-bold"><span>Contact</span></a>
                    <svg class="mr-2 w-5 pr-0" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </li>
            </ul>
            </div>
        </div>
    );
}

export default Footer;
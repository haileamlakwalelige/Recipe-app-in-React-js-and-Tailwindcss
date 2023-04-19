/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState, useEffect} from 'react';
import Card from "./Card";
import Popular from "./Popular";
import Load from "./Load";
import Footer from './Footer';



/* eslint-disable jsx-a11y/anchor-is-valid */
function App() {
    const [show, setShow]=useState(false);
    const [menu, setMenu]=useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        if(windowWidth < 768){
            setMenu(true);
        }else{
            setMenu(false);
        }
        // Remove event listener on cleanup
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    //   const handleMenu=()=>{
    //     if(windowWidth < 768){
    //         setMenu(true);
    //     }else{
    //         setMenu(false);
    //     }
    //   }
   
  return (
    <div className="grid md:grid-cols-3 cursor-pointer sms:grid-cols-1">
     {/* <!--content Wrapper--> */}
    <div  className="col-span-1 md:flex md:justify-end mr-10">
        <nav>
            <div className="flex justify-between items-center">
                <h1 className="font-bold uppercase p-4">
                    <a href="#" >Food Recipe</a>
                </h1>
                <div className="md:hidden">
                {menu ? (
                    <svg onClick={()=>setMenu(!menu)} className="w-5 md:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                ):(
                    <svg onClick={()=>setMenu(!menu)} className="w-5 md:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                )}
                </div>
            </div>
            {menu ? (null) :(
                <ul  className="navlist flex flex-col justify-end">
                <li className="text-red-700 flex border-4 border-r-red-500  border-t-none w-40">
                    <a href="#" className="px-4 py-2">
                        <span className="font-bold">Home</span>
                    </a>
                    <svg class="w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                </li>
                <li className="flex">
                    <a href="#" className="px-4 py-2"><span className="font-bold ">About</span></a>
                    <svg class="w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                </li>
                <li className="flex">
                    <a href="#" className="px-4 py-2 font-bold"><span>Contact</span></a>
                    <svg class="w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </li>
            </ul>
            ) }
           
        </nav>
    </div>
    {/* <!--Nav End--> */}
    <main className="col-span-2 bg-gray-100 shadow-lg">
        <div className="text-red flex justify-end mr-10 mt-10">
            <a href="#" className="btn mr-2 " >Log in</a>
            <a href="#" className="btn">Sign Up</a>
        </div>
        <header className="flex flex-col justify-center pl-50">
            <h2 className="text-grey-700 text-6xl font-semibold justify-center  py-4">Recipes</h2>
            <h3 className="text-grey-700 text-2xl font-semibold justify-center py-3">Food Recipe</h3>
        </header>
            <div>
                <h4 className="text-grey-700 text-2xl font-semibold pl-10">Latest Recipes</h4>
                <div>
                <Card />
                </div>
                <h4 className="popular"> Most Popular Recipes</h4>
                <div>
                <Popular />
                </div>
                <div>
                    <div>
                        <button className="load" onClick={()=>setShow(!show)}>{show ? "Load Less":"Load More"}</button>
                    </div>
                    <div className="transition duration-500 ease-linear">
                        {show ? <Load /> :null}
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>  
    </main>
</div>
  )
}

export default App;
 import React from 'react';
 import Link from 'next/link';  

 const Herobanner = ({ herobanner }) => {  
   return ( 

    <> 
     

    <div className="bg-gray-100 dark:bg-transparent">
    <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 dark:text-white font-black leading-7 md:leading-10">
            {herobanner.largeText1}
                <span className="text-indigo-700">{herobanner.midText} </span>
                to August (45% discount) 
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
              {herobanner.desc}  
            </p>
        </div>
        <div className="flex justify-center items-center">

          <Link href='/'>
            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">{herobanner.buttonText}</button> 

            </Link>  


           <Link href="/Payments">
            <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">
              {herobanner.smallText}</button>
              </Link>
        </div>
    </div>
</div> 


</>
   )
 }
 
 export default Herobanner; 
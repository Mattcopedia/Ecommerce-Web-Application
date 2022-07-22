




import React from 'react'
import { client } from '../lib/client'; 
import { useUser } from '@auth0/nextjs-auth0';


import { Product,  HeroBanner } from '../components'; 



const Home = ({ products, bannerData }) => {  

   const { user } = useUser();

   if(user) { 
    return (
      <>
      <p className="mt-5 sm:mt-10 lg:w-10/12 font-bold text-black-400  text-left text-lg sm:text-lg px-30">Welcome {user.name} <span><a className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-md lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 text-right py-2 sm:py-4 text-sm mt-5 ml-6'  href='/api/auth/logout'>Logout</a> </span>  </p>       
    
      <>
   
   <HeroBanner herobanner={bannerData.length && bannerData[0]} />

   <div className='products-heading'>    
     <h2>Best Selling Products</h2>  
     <p>Speakers of many variations </p> 
   </div> 

   <div className='products-container'>

 {products?.map((product) => <Product key={product._id} product={product} />  )}   

   </div>



 </>

      </>

    )
   }  
 


  return ( 
    
    <>
        <div>
      <a className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-md lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 text-right py-2 sm:py-4 text-sm mt-5'  href='/api/auth/login'>Login</a> 
    </div>
     
      <HeroBanner herobanner={bannerData.length && bannerData[0]} /> 

      <div className='products-heading'>    
        <h2>Best Selling Products</h2>   
        <p>Speakers of many variations </p> 
      </div> 

      <div className='products-container'>

    {products?.map((product) => <Product key={product._id} product={product} />  )}   

      </div>


   
    </>
  )
}

export const getServerSideProps = async () => { 
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }  
  } 
  
}
  
export default Home;    

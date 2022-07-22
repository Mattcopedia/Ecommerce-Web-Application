
import React from 'react'

import Image from 'next/image'
import Link from 'next/link'



const PaymentMediaObjects = () => {

  return ( 
    <>
    <div className='Downloadheader'><h1>Click Any Book Below to Buy and link you to Download Page </h1></div>  

      <div className='general-layout'> 

      <div className='firstflex'> 
      <div className='child1'>
      <Image src="/UNILAG Past Question2.jpg" alt="Post UTME Past Question" width={120} height={120} /> 
      </div>  
     <div className='child2'>
     <Link href={"/Payments/UnilagForm"}>  
           <a className='display'>UNILAG Past  Questions  and Answers </a>   
       </Link>
     </div>
        
      </div>

      <div className='firstflex'> 
      <div className='child1'>
      <Image src="/UI Past Question3.jpg" alt="Post UTME Past Question" width={120} height={120} /> 
      </div>
     <div className='child2'>
     <Link href={"/Payments/PaystackFormUIPQ/PaystackFormUIPQ"}>   
           <a className='display'>UI Past  Questions  and Answers </a>   
       </Link>
     </div>
        
      </div>

      <div className='firstflex'> 
      <div className='child1'>
      <Image src="/UNIBEN Past Question2.jpg" alt="Post UTME Past Question" width={120} height={120} /> 
      </div>
     <div className='child2'>
     <Link href={"/Payments/UnibenForm"}>  
           <a className='display'>UNIBEN Past  Questions  and Answers </a>   
       </Link>
     </div>
        
      </div>

      <div className='firstflex'> 
      <div className='child1'>
      <Image src="/UNICAL Past Question 2.jpg" alt="Post UTME Past Question" width={120} height={120} /> 
      </div>
     <div className='child2'>
     <Link href={"/Payments/UnicalForm"}>  
           <a className='display'>UNICAL Past  Questions  and Answers </a>   
       </Link>
     </div>
         
      </div>

      <div className='firstflex'> 
      <div className='child1'>
      <Image src="/UNILORIN Past Question2.jpg" alt="Post UTME Past Question" width={120} height={120} /> 
      </div>
     <div className='child2'>
     <Link href={"/Payments/UnilorinForm"}>   
           <a className='display'>UNILORIN Past  Questions  and Answers </a>   
       </Link>
     </div>
        
      </div>

      <div className='firstflex'> 
      <div className='child1'>
      <Image src="/UNN Past Question3.jpg" alt="Post UTME Past Question" width={120} height={120} /> 
      </div>
     <div className='child2'>
     <Link href={"/Payments/UnnForm"}>   
           <a className='display'>UNN Past  Questions  and Answers </a>   
       </Link>
     </div>
        
      </div>

      <div className='firstflex'> 
      <div className='child1'>
      <Image src="/FUTA Past Question.jpg" alt="Post UTME Past Question" width={120} height={120} /> 
      </div>
     <div className='child2'>
     <Link href={"/Payments/FutaForm"}>   
           <a className='display'>FUTA Past  Questions  and Answers </a>   
       </Link>
     </div>
        
      </div> 
      </div>

    </>
  )
}

export default PaymentMediaObjects; 
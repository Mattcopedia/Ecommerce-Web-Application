
import React, { useState } from "react"
import { PaystackButton } from "react-paystack"
import { useRouter } from 'next/router'



import styles from  './UIForm.module.css';    
  
const PaystackFormUIPQ = () => {
  const router = useRouter()

  const publicKey = "pk_test_e4ca9713aef7420b80f67606f2d88bac54e68a43" 
  const amount = 50000
  const UIamount = amount/100  
  const [email, setEmail] = useState("")  
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const componentProps = {   
    email,
    amount, 
    metadata: { 
      name, 
      phone, 
    },
    publicKey,
    text: "Buy Now",
    onSuccess: () => {
      alert("Thanks for doing business with us! Come back soon!!"); 

      router.push('/Downloads/ui')  
     
    },

    onClose: () => {
      alert("You are just one steP away from completing your purchase");  
    },    
    
  } 
   
  return (

       <div className="newlayout">    
      <div className={styles.nice}>
      <div className={styles.container}>   
        <div className="item">
        
          <div className={styles.desc}>
           
            <p> Buy the Past Question Now for {UIamount}</p>  
          </div>  
        </div>

          <div className={styles.checkoutform}>
          <form>
            <label>Name</label>
            <input
             className={styles.inputfield}
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              placeholder='Name' 
            />
            <label>Email</label>
            <input
            className={styles.inputfield}
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
            />
            <label>Phone</label>
            <input
            className={styles.inputfield}
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number" 
            />
          </form>

          <div className={styles.paynow }>  
          <PaystackButton {...componentProps} className={styles.paynow} />  
          </div>  

        </div>
      </div>
    </div>
    </div>
 
  )
} 
export default PaystackFormUIPQ;  
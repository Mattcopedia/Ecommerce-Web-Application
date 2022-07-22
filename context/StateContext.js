import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);
    
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    
    if(checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if(cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
      })

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      
      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${qty} ${product.name} added to the cart.`);
  } 

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
  }

  const toggleCartItemQuanitity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id)
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id)

    if(value === 'inc') {
      setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
    } else if(value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
      }
    }
  }

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }

  const decQty = () => {
    setQty((prevQty) => {
      if(prevQty - 1 < 1) return 1;
     
      return prevQty - 1;
    });
  }

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities 
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context); 




// import React, { createContext, useContext, useState, useEffect} from 'react';

// import { toast } from 'react-hot-toast';
 
// const Context = createContext(); 

// export const  StateContext = ({ children }) => {

//     const [showCart, setShowCart] = useState(false);
//     const [cartItems, setCartItems] = useState([]);
//     const [totalPrice, setTotalPrice] = useState(0); 
//     const [totalQuantities, setTotalQuantities] = useState(0); 
//     const [qty, setQty] = useState(1); 

//     let foundProduct;
//     let index;

//     const onAdd = (product, quantity) => {
//         // this is to check if the product already exists in the cart 
//         const checkProductInCart = cartItems.find((item) => item._id === product._id);

//          // this is to update the quantity and price to the total price and quantity entered by the user. 
          

//          setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
//          setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity); 
          
//         //  if there is already an item in the cart do thiss
//         if(checkProductInCart) {

//             const updatedCartItems = cartItems.map((cartProduct) => {
//                 if(cartProduct._id === product._id) return {
//                     ...cartProduct,
//                     quantity: cartProduct.quantity + quantity 
//                 }
//             })

//             setCartItems(updatedCartItems);
            
//             // if there is no item do this. 
//         } else {
//             product.quantity = quantity; 

//             setCartItems([...cartItems, { ...product }]);  
//         }

//         toast.success(`${qty} ${product.name} added to the cart.`);   

//     }

//     const onRemove = (product) => {
//         foundProduct = cartItems.find((item) => item._id === product._id)  

//         const newCartItems = cartItems.filter((item) => item._id !== product._id) 
         
//         setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity); 

//         setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);  

//         setCartItems(newCartItems);   

//     }


//     const toggleCartItemQuantity = (id, value ) => { 

//          foundProduct = cartItems.find((item) => item._id === id)

//         //  this gives us the index of the product or item in the cartItems Array. 

//          index = cartItems.findIndex((product) => product._id === id );
         
//          // this is saying keep and dont update the value of the other ones where the id is not equal to item.id but only filter out and update the inc and dec value of the ones where the item id is = product id 



//          const newCartItems = cartItems.filter((item) => item._id !== id) 

//          if(value === 'inc') {
             
          
//                 setCartItems([...newCartItems, {...foundProduct, quantity: foundProduct.quantity + 1 }])

//                 setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price )   
 
//                 setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1); 

//             // foundProduct.quantity += 1; 
//             // // in react never mutate or update the state with an equal sign but only with hooks and class set /// States

//             // cartItems[index] = foundProduct; 

//          } else if (value === 'dec') {
                   
//             if (foundProduct.quantity > 1) {
//             setCartItems([...newCartItems, {...foundproduct, quantity: foundProduct.quantity - 1 }]) 

//             setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price )    

//             setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);    

//             }
            

//          }
//     }

//     const incQty = () => {
//         setQty((prevQty) => prevQty + 1);
//     }

//     const decQty = () => {
//         setQty((prevQty) => {
//             if(prevQty -1 < 1) return 1;

//             return prevQty - 1;
//         });
//     }
//     return (
//         <Context.Provider value={{
//             showCart,
//             cartItems,
//             totalPrice,
//             totalQuantities,
//             qty,
//             decQty,
//             incQty,  
//             onAdd, 
//             toggleCartItemQuantity,
//             onRemove
//         }}> 
//              {children}
//         </Context.Provider> 
//     )
     
// }

// export const useStateContext = () => useContext(Context);   
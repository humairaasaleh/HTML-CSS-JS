import { useState } from "react";
import Basket from "./Basket";
import Product from "./Product";

const Manager = () => {
    const[productName,setProductName] =useState("");
    const [quantity,setQuantity]=useState(0);
    const[basket,setBasket]=useState([]);
    const addToBasket=(data)=>{
        setBasket((basket)=>{
            return[...basket,data]
        });
    };
    return (  
        <div>
        <h3>Manager</h3>
        <Product setProductName={setProductName} setQuantity={setQuantity} addToBasket={addToBasket} productName={productName} quantity={quantity}/>
        <Basket basket={basket}/>
        </div>
    );
}
 
export default Manager;
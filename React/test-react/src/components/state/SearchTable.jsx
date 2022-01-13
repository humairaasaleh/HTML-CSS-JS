import { useState } from 'react';
import Product from './Product';

const SearchTable = () => {

    const [query, setQuery] = useState("");
    const listOfProducts=[
        {
            name:"bouncy ball",
            quantity:3,
            price:9
        },
        {
            name:"football",
            quantity:6,
            price:3
        },
        {
            name:"basketball",
            quantity:1,
            price:5
        }
    ]
    return ( 
        <div>
            <input type="text" name="product" onChange={(event)=>{
                setQuery(event.target.value)
            }}/>
            {listOfProducts.map((product,i)=>{
                if(product.name===query){
                    return<Product product={product}/>
                }
            })}
        </div>
     );
}
 
export default SearchTable;
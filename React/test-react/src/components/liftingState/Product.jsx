const Product = ({setProductName, setQuantity, addToBasket, productName, quantity}) => {
    
    const add=()=>{
        const order={
            productName: productName,
            quantity : quantity
        }
        addToBasket(order);
        console.log(order);
    }
    return(
    <div>
        <h2>Product</h2>
        <h3>Product Name</h3>
        <input type="text" name="product" onChange={(e) =>{
            setProductName(e.target.value)}}/>
        <h3>Quantity</h3>
        <input type="number" name="quantity" onChange={(e) =>{
            setQuantity(e.target.value)}}/>
        <button type="button" onClick={add}> Add to Basket</button>
    </div>
    )
        }
 
export default Product;
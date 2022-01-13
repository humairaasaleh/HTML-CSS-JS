const Basket = ({basket}) => {
    return (  
        <div>
            <h2>Basket</h2>
            {basket.map((product)=>{
                console.log(product);
                return<h3>Product: {product.productName} Quantity: {product.quantity}</h3>
            })}
        </div>
    );
}
 
export default Basket;
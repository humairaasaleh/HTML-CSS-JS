const Product = ({product}) => {
    const{name,quantity,price} = product
    return ( 
        <div>
            <h2>Name:{name}</h2>
            <h2>Quantity{quantity}</h2>
            <h2>Price{price}</h2>
        </div>
     );
}
 
export default Product;
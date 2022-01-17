import { useParams } from "react-router-dom";

const Shop = () => {

    const{id} =useParams();
    return ( 
        <div>
            <h2>Shop page of id: {id} </h2>
        </div>
     );
}
 
export default Shop;
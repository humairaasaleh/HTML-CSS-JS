import {Link} from 'react-router-dom';

const Nav = () => {
    return (
      <div>
        <h2>Nav</h2>
        <Link to="/about">
          <h4>About</h4>
        </Link>
        <Link to="/shop">
          <button type="button" name="shop">Shop</button>
        </Link>
        <Link to="/">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcO3D8RCAO_oSv5LS0twSOrcIccJOiv40RKg&usqp=CAU" 
          alt='home' width="30px" height="30px"/>
        </Link>
        </div>
        
      );
}
 
export default Nav;
const Beer = ({name,image,abv,foodPairing}) => {
    return ( 
        <div>
            <h3>{name}</h3>
            <img src={image} alt={`beer ${name}`} width="50px" height="50px"/>
            <h4>Alcohol content of beer: {abv}</h4>
            <ul>
            {foodPairing.map((food)=>{
                return<li>{food}</li>
            })}
            </ul>
        </div>
     );
}
 
export default Beer;
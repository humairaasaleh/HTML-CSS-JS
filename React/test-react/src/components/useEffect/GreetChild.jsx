const GreetChild = ({setName,name}) => {
    return ( 
        <div>
                <input type="text" name="name" onChange={(event) => {
                    setName(event.target.value)
                }}/>
                <h2>Name: {name}</h2>
        </div>
     );
}
 
export default GreetChild;
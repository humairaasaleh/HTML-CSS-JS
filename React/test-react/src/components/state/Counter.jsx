const Counter = ({setCount}) => {

    let start =false;
    if(!start){
        setCount(4);
        start=true;
    }
    return (
        <div>
            <h2>Counter</h2>
        </div>
      );
}
 
export default Counter;
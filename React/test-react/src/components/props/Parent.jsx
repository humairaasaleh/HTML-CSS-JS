import Child from "./Child";

const Parent = () => {

    const arrayFruits =["raspberries", "kiwi", "mango", "banana", "grapes"]
    return (  
        <Child array={arrayFruits}/>
    );
}
 
export default Parent;
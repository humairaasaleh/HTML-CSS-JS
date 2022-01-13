import{useState} from 'react';
import Counter from './Counter';
import Display from './Display';

const Manager = () => {
    //count is getCount and setCount lets us set the value
    //referred to as a hook
    const[count, setCount] =useState(2);

    return(
        <div>
            <h2>Managers number:{count}</h2>
            <Counter setCount={setCount}/>
            <Display count={count}/>
        </div>
     );
}
 
export default Manager;
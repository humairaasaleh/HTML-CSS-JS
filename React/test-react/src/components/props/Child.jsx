import SubChild from "./SubChild";

const Child = (props) => {

    const fruitArray = props.array;
    console.log(fruitArray);
    return (
        //Render a SubChild for every item in the array
        <div>
            {fruitArray.map((fruit,i)=> <SubChild key={i} fruit={fruit}/>)}
        </div>
    );
}

export default Child;
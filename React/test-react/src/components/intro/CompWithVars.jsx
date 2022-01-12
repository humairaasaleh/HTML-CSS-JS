const CompWithVars=()=>{

    // anything outside return in js
    let me= {
        fname:"Humairaa",
        sname:"Saleh",
        age:19
    };
    
    return(
        // Use a div to return more elements
        //when in return if you surround anything with {} it will be js
        <div>
        <h3>Hello {me.fname} {me.sname}</h3>
        <h4>You are {me.age} years old</h4>
        </div>
    )

}
export default CompWithVars;
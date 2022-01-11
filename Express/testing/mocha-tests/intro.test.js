
//describe('message of what the groups is', whatyouaretesting())
describe('My first group of tests', function(){

//it('message of the test, whatyouaretesting())
it('Should print the word hello', function(){
    console.log("Hello");
});
it ('will print the number 5', function(){
    console.log(5);
})
});

describe('second group of tests', function(){
    it('will print Hello World', function(){
        console.log("Hello World");
    })
})

// to run mocha tests
//`mocha <name of test folder>
// `mocha mocha-tests`
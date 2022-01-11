
describe('hooks', function(){

    let string;
    //setup function
    before(function(){
        console.log("Run once before first test in this describe");
        string="test-string";
    });

    it('will print hello world',function(){
        console.log("hello world");
    });

    after(function(){
        console.log("print after tests");
    });

    beforeEach(function(){
        console.log("runs before each test");
    });

    afterEach(function(){
        console.log("runs after each test");
    });

    it.only('only this test will run',function(){
        console.log("Only this test will run");
    });

    it.skip('This test will skip', function(){
        console.log("Skip this test");
    })

});
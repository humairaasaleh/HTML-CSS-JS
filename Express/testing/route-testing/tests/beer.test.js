const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { Beer } = require('../models/beer.js');
const server = require('../index.js')
chai.use(chaiHttp);

describe('route testing', function () {

    const testBeer={
        beerName: "test name",
        description: "test description",
        abv:3
    }
    it('should respond with"Test path successful', function (done) {
        //arrange
        //telling chai to use index.js
        chai.request(server)
        //act
            //use server to make a get request with /test
            .get('/beer/test')
            //.end is used for async
            .end((err, res) => {
                if (err) {
                    console.log("Error occurred");
                    done(err);
                };

            //assert
            expect(res).to.have.status(201);
            expect(res).to.not.be.null;
            expect(res).to.have.property('text','Test path successful');
            done();
            });
    });

    it('should post data to the db and return <name> added' ,function(done){
        chai.request(server)
        .post('/beer/create')
        .send(testBeer)
        .end((err, res) => {
            if (err) {
                console.log("Error occurred");
                done(err);
            };
            expect(res).to.have.status(201);
            expect(res).to.not.be.null;
            expect(res).to.have.property('text',`${testBeer.beerName} has been added to the database`);
            done();
        });
    });

    it('should return all beer from the db',function(done){
        chai.request(server)
        .get('/beer/readAll')
        .end((err, res) => {
            if (err) {
                console.log("Error occurred");
                done(err);
            };
            const resBody= res.body;
            expect(res).to.have.status(200);
            expect(resBody).to.not.be.null;

            resBody.map((beer)=>{
                expect(beer).to.be.a("Object");
                expect(beer).to.contain.keys("beerName");
            });
            done();
        });  
    });

    it('should return by id beer from the db',function(done){
        chai.request(server)
        .get('/beer/read/61dd4daca43ddd701744a11d')
        .end((err, res) => {
            if (err) {
                console.log("Error occurred");
                done(err);
            };
            const resBody= res.body;
            expect(res).to.have.status(200);
            expect(resBody).to.not.be.null;

            resBody.map((beer)=>{
                expect(beer).to.be.a("Object");
                expect(beer).to.contain.keys("beerName");
            });
            done();
        });  
    });

    it('should delete beer by id from the db', function(done){
        chai.request(server)
        .delete('/beer/delete/:id')
        .end((err, res) => {
            if (err) {
                console.log("Error occurred");
                done(err);
            };
            expect(res).to.have.status(202);
            expect(res).to.not.be.null;
            expect(res).to.have.property('text',`deleted`);
            done();
        });

    });

    it('should update the beer db by id', function(done){
        chai.request(server)
        .put('/beer/update/:id')
        .send(testBeer)
        .end((err, res) => {
            if (err) {
                console.log("Error occurred");
                done(err);
            };
            expect(res).to.have.status(201);
            expect(res).to.not.be.null;
            expect(res).to.have.property('text',`has been updated`);
            done();
        });
    });
});
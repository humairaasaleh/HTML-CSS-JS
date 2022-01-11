//import in chai
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

//when testing use framework: arrange,act,assert

describe('Basic testing process', function () {
    it('should return 2 when 1+1', function () {
        //arrange-declaring variables
        let num1 = 1;
        let num2 = 1;
        let sum;
        //act-what im testing
        sum = num1 + num2;
        //assert-uses expect from our chai
        expect(sum).to.equal(2);
    });

    it('the string should be "Red"', function () {
        //arrange
        let testString;
        //act
        testString = "Red";
        //assert
        expect(testString).to.equal("Red");
        expect(testString).to.be.a('string');
    });

    it('should return 20 when 4x5', function () {
        let num1 = 4;
        let num2 = 5;
        let product;
        product = num1 * num2;
        expect(product).to.equal(20);
    });

    it('should print"Hello<name>"', function () {
        let name = "Bob";
        let hello = "Hello ";
        let sentence;
        sentence = hello + name;
        expect(sentence).to.equal("Hello Bob");
    });

    it('should return the value of 1+2+3+4', function () {
        let num1 = 1;
        let num2 = 2;
        let num3 = 3;
        let num4 = 4;
        let sum;
        sum = num1 + num2 + num3 + num4;
        expect(sum).to.equal(10);
    });

    it('the text "hello" should be a string', function () {
        let testString;
        testString = "hello";
        expect(testString).to.be.a('string');
    });

    it('the number 12 should not be undefined', function () {
        let num;
        num = 12;
        expect(num).to.be.not.undefined;
    })

    it('the object should have a property of "name"', function () {
        let testObject={
            name: "test Object"
        };
        testObject.name="new Data"
        expect(testObject.name).exist;
        //expect(testObject).to.contain.keys('name)
    })

    it('should be null', function () {
        let text;
        text = null;
        expect(text).to.be.null;
    })

    it('should be odd', function () {
        let num;
        num = 5;
        expect(num).to.satisfy((num) => num % 2 != 0);
    })

    it('the string "Hello Reece" should include "Reece"', function () {
        let testString;
        testString = "Hello Reece";
        expect(testString).to.include("Reece");
    });

    it('array should include apple',function(){
        let arrayOfFruits;
        arrayOfFruits = Array("banana","apple","orange");
        expect(arrayOfFruits).to.include("apple");
    })

});
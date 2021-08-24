const {returnTwo,greeting,add, mulitply, subtract,divide} = require('./functions')

describe('Math Functions', () => {
test('Should return the number 2', ()=> { 

expect(returnTwo(2)).toEqual("2")

})

test("Should return Hello, ${name}", ()=> { 
   
    expect(greeting('James')).toEqual("Hello, James")
    
    expect(greeting('Jill')).toEqual("Hello, Jill")
})

test("Should return num1 + num2", ()=> { 
    expect(add(1,2)).toEqual(3)
    expect(add(5,9)).toEqual(14)
})

test("Should return the num1 * num2", ()=> { 
    expect(mulitply(6,3)).toEqual(18)
    expect(mulitply(3,3)).toEqual(9)
})

test("Should return num1 /= num2", ()=>{
    expect(divide(16,2)).toEqual(8)
    expect(divide(18,9)).toEqual(2)
})

test("Should return num1 - num2", ()=> { 
    expect(subtract(4,2)).toEqual(2)
    expect(subtract(100,50)).toEqual(50)

})
})
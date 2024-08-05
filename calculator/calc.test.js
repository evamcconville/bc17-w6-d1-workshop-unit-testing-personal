import { test, expect } from 'vitest'
import { calculate } from './calculator'

// test addition
test('addition of 1 and 1 should be 2', () => {
    const result = calculate('+', 1, 1)
    expect(result).to.equal(2)
}); 

// test subtraction
test('subtraction of 8 and 4 should be 4', () => {
    const result = calculate('-', 8, 4)
    expect(result).to.equal(4)
});

// test multiplication
test('multiplication of 6 and 7 should be 42', () => {
    const result = calculate('*', 6, 7)
    expect(result).to.equal(42)
}); 

// test division 
test('division of 72 and 12 should be 6', () => {
    const result = calculate('/', 72, 12)
    expect(result).to.equal(6)
}); 

// test squaring number
test('squared number of 6 should be 36', () => {
    const result = calculate('sq', 6)
    expect(result).to.equal(36)
}); 

// test squaring number where there are 2 arguments
test('squared number of 6, 10 should be 36', () => {
    const result = calculate('sq', 6, 10)
    expect(result).to.equal(36)
}); 

// test with '%' operator returning error
test('using % operator', () => {
        expect(() => calculate('%', 4, 5)).toThrowError()
    })
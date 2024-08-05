// Import test and expect functions from vitest
import { test, expect } from 'vitest';

//Imports sum function from ./sum
import { sum } from './sum';

//Funstion test for sum
test('bareBonesTest', () => {
    const result = sum(5, 7)
    expect(result).to.equal(12)
});
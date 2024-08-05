import { test, expect } from 'vitest';

import { sum } from './sum';
//  import `test` and `expect` functions from Vitest DONE
//  import the `sum` function from sum.js DONE
//  create a bare bones test
//  run Vitest to check that it detects and passes the new test
//  inside the test:
//      call the sum function with arguments: 5 and 7
//      assert that the value returned is 12

test('bareBonesTest', () => {
    const result = sum(5, 7)
    expect(result).to.equal(12)
});
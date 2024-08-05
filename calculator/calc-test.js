import { test, expect } from 'vitest'
import calculate from './calculator'

test('calcTest', () => {
    const result = calculate('+', 1, 1)
    expect(result).to.equal(2)
})
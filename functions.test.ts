const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffleArray should return an array', () => {
        expect(shuffleArray([1,2,3])).not.toBe([1,2,3])
    })
    test('shuffleArray should return array that is the same length as the argument sent in', () =>{
        expect(shuffleArray([1,2,3]).length).toEqual([1,2,3].length)
    })
    
})
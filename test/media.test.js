const { average } = require("../utils/for_testing");

describe('avarage', () => {

    test ('of one value is the value itself', () => {
        expect(average ([1])).toBe(1)
    })
    
    test ('of one value is calculate correctly', () => {
        expect(average ([1, 2, 3, 4, 5, 6])).toBe(3.5)
    })

    test ('of empty array is zero', () => {
        expect(average ([])).toBe(0)
    })

})

const { succeed, fail, repair, get } = require('./enhancer');

describe('Enhancers', () => {

  describe('repair function testing', () => {
    it('should repair the item in need', () => {
      const item =  {
        name: 'gun',
        enhancement: 10,
        durability: 50
      }

      const superItem = {
        name: 'sword',
        enhancement: 10,
        durability: 80
      }

      const randomItem = {
        name: 'gun',
        enhancement: 10,
        durability: 100
      }

      const actual = repair(item);
      const repairSword = repair(superItem);

      expect(actual).toEqual(randomItem);
    })
  })
})
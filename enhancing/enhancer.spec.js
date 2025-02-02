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
    });
  });// end of repair testing function

  describe('succeed function testing', () => {
    it('should increase item\'s enhancement by 1', () => {
      const item = {
        name: 'weapon',
        enhancement: 10,
        durability: 50
      };

      const actualSucceed = succeed(item);

      expect(actualSucceed).toMatchObject({...item, enhancement: 11})

    });// end of it success test

    it('item enhancement should remain 20', () => {
      const maxedEnhancement = {
        name: 'wand',
        enhancement: 20,
        durability: 50
      }

      expect(succeed(maxedEnhancement)).toMatchObject({...maxedEnhancement, enhancement: 20})

    });
  });// end of success testing function

})
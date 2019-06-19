const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
  describe('repair()', () => {
    it('restores durability to 100', () => {
      const item = {name: 'item one', durability: 130, enhancement: 3};

      expect(enhancer.repair(item).durability).toBe(100);
    });
  });
});
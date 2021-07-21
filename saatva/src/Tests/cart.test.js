const addToCart = require('../App.js');

test('adding to cart', () => {
    expect(addToCart()).toBe(1);
});
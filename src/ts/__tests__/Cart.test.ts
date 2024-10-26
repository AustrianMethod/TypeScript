import Cart from '../service/Cart';

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('total cost of purchases with and without discount, delete position', () => {
  const cart = new Cart();
  cart.add({id: 100, name: 'book1', price: 300});
  cart.add({id: 200, name: 'book2', price: 600});

  expect(cart.items.length).toBe(2);
  expect(cart.sum()).toBe(900);
  expect(cart.sumDisc(0.1)).toBe(810);
  cart.delObj(100);
  expect(cart.items.length).toBe(1);
});

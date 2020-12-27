import Zombie from '../Zombie';

test("тестирование класса Zombie", () => {
  const sword = new Zombie("Zom");
  const expected = {
    name: "Zom",
    type: "Zombie",
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };
  expect(sword).toEqual(expected);
});

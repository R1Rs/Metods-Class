import Undead from '../Undead';

test("тестирование класса Undead", () => {
  const sword = new Undead("Und");
  const expected = {
    name: "Und",
    type: "Undead",
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };
  expect(sword).toEqual(expected);
});

import Swordsman from '../Swordsman';

test("тестирование класса Swordsman", () => {
  const sword = new Swordsman("Swo");
  const expected = {
    name: "Swo",
    type: "Swordsman",
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };
  expect(sword).toEqual(expected);
});

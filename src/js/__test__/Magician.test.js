import Magician from "../Magician";

test("тест класса Magician", () => {
  const person = new Magician("Mag");
  const expected = {
    name: "Mag",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(person).toEqual(expected);
});

import Daemon from "../Daemon";

test("тест класса Daemon", () => {
  const person = new Daemon("Dae");
  const expected = {
    name: "Dae",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(person).toEqual(expected);
});

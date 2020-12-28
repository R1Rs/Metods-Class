import Character from '../Character';

test('test level from class Character', () => {
  const person = new Character('Bow', 'Bowman');
  person.attack = 10;
  person.defence = 10;
  const expected = {
    name: "Bow",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 10,
    defence: 10,
  };

  expect(person).toEqual(expected);
});

test("test name from class Character", () => {
  const received = () => new Character("B", "Bowman");
  const expected = "имя от 2 до 10 символов";

  expect(received).toThrow(expected);
});

test("test name from class Character", () => {
  const received = () => new Character("B0w", "sadf");
  const expected = "тип должен быть в списке";

  expect(received).toThrow(expected);
});

test("test levelUp from class Character", () => {
  const pers = new Character("Char", "Bowman");
  pers.levelUp();
  const received = pers;
  const expected = {
    name: "Char",
    type: "Bowman",
    health: 100,
    level: 2,
    attack: 12,
    defence: 10,
  };

  expect(received).toEqual(expected);
});

test("test damage from class Character", () => {
  const pers = new Character("Char", "Bowman");
  pers.damage(1);
  const received = pers;
  const expected = {
    name: "Char",
    type: "Bowman",
    health: 99.1,
    level: 1,
    attack: 10,
    defence: 10,
  };

  expect(received).toEqual(expected);
});

test("test damage for health = 0", () => {
  const pers = new Character("Char", "Bowman");
  pers.damage(1000);
  const received = pers;
  const expected = {
    name: "Char",
    type: "Bowman",
    health: 0,
    level: 1,
    attack: 10,
    defence: 10,
  };

  expect(received).toEqual(expected);
});

test("test levelUp for level = 0", () => {
  const pers = new Character("Char", "Bowman");
  pers.level = 0;
  const received = () => pers.levelUp();

  const expected = "нельзя повысить левел умершего";

  expect(received).toThrow(expected);
});

export default class Character {
  constructor(name, type) {
    const persons = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (name.length < 2 || name.length > 10) {
      throw new Error('имя от 2 до 10 символов');
    }
    if (!persons.includes(type)) {
      throw new Error('тип должен быть в списке');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defence = null;
  }
}

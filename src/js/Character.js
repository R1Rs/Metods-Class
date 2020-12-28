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
    this.attack = 10;
    this.defence = 10;
  }

  levelUp() {
    if (this.level > 0) {
      this.level += 1;
      this.attack = (this.attack / 100) * 20 + this.attack;
      this.health = 100;
    } else {
      throw new Error("нельзя повысить левел умершего");
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

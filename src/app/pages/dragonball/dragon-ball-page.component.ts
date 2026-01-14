import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragon-ball-page.component.html',
})
export class DragonBallPageComponent {
  name = signal('Gohan');
  power = signal(34);

  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001,
    },
    { id: 2, name: 'Vegeta', power: 7000 },
    { id: 3, name: 'Piccolo', power: 4122 },
    { id: 4, name: 'Yamcha', power: 500 },
  ]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((list) => [...list, newCharacter]);
    this.resetField();
  }

  resetField() {
    this.name.set('');
    this.power.set(0);
  }
}

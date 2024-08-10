import { autorun, makeAutoObservable } from 'mobx';

class Animal {
  name;
  energyLevel;

  constructor(name: string) {
    this.name = name;
    this.energyLevel = 100;
    makeAutoObservable(this);
  }

  reduceEnergy() {
    this.energyLevel -= 10;
  }

  get isHungry() {
    return this.energyLevel < 50;
  }
}
export const giraffe = new Animal('Gary');
autorun(() => {
  console.log('Energy level:', giraffe.energyLevel);
});

autorun(() => {
  if (giraffe.isHungry) {
    console.log("Now I'm hungry!");
  } else {
    console.log("I'm not hungry!");
  }
});

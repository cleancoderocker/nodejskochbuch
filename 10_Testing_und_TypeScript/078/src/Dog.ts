import { Animal } from './Animal';
import { Food } from './Food';

export class Dog implements Animal {
  eat(food: Food) {
    console.log('Dog eats food');
  }
}

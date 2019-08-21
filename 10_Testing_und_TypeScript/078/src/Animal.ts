import { Food } from './Food';

export interface Animal {
  eat(food: Food): void;
}

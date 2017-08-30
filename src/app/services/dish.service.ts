import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

import { Observable } from 'rxjs/Rx';
import 'rxjs/operator/delay';

@Injectable()
export class DishService {

  constructor() { }

  getDishIds(): Observable<number[]> {
    return Observable.of(DISHES.map(dish => dish.id));
  }

  getDishes(): Observable<Dish[]> {
    return Observable.of(DISHES).delay(2000);
  }
  getDish(id: number): Observable<Dish> {
    return Observable.of(DISHES.filter((dish) => (dish.id === id))[0]).delay(2000);
  }

  getFeaturedDish(): Observable<Dish> {
    return Observable.of(DISHES.filter((dish) => dish.featured)[0]).delay(2000);
  }

}

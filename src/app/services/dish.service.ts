import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHItems } from '../shared/DISHItems';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';


@Injectable()
export class DishService {

  constructor() { }

  // returnDishes(): Promise<Dish[]> {
   // return new Promise(resolve => {
      // 2 second delay
     // setTimeout(() => resolve(DISHItems), 2000);

    //});
  //}

  returnDishes(): Observable<Dish[]> {
    return Observable
    .of(DISHItems)
    .delay(2000);
  }

  returnDishIds(): Observable<number[]> {
    return Observable
    .of(DISHItems
    .map(dish => dish.id ));
  }

 // returnDish(id: number): Promise<Dish> {
 //   return new Promise(resolve=> {
      //  3 second delay
 //       setTimeout(() => resolve(DISHItems.filter((dish) => (dish.id === id))[0]), 3000);
 //   });
 // }

  returnDish(id: number): Observable<Dish>{
    return Observable
    .of(DISHItems
    .filter((dish) => (dish.id === id))[0])
    .delay(3000);
  }

} 
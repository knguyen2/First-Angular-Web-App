import { Component, OnInit } from '@angular/core';
import { Dish } from './../shared/dish';
import { DishService } from '../services/dish.service';
// import { DISHItems } from './../shared/DISHItems'; now is replaced by the above import
// import { ItemdetailComponent } from './../itemdetail/itemdetail.component';

/*const DISHItems: Dish[] = [
  {
    name: 'Tandoori Pizza',
    image: '/assets/images/Tandoori-BBQ-chicken.jpeg',
    category: 'main',
    label: 'Hot',
    price: '8.99',
    description: 'Spicy Barbeque Sauce, Mozzarella Cheese, Red Onions & Tandoori Barbeque Chicken'},
 {
    name: 'Curry Veggie Delight',
    image: '/assets/images/Curry-veggie-delight.jpeg',
    category: 'main',
    label: '',
    price: '9.99',
    description: 'Organic Spicy ..'},
 {
    name: 'Chicken Wings',
    image: '/assets/images/chicken-wings-alla-spina.jpg',
    category: 'appetizer',
    label: 'New',
    price: '6.99',
    description: 'Chicken Wings (Hot or Barbeque)?' },
 {
    name: 'Mango Lassi',
    image: '/assets/images/mango-lassi.jpg',
    category: 'drinks',
    label: '',
    price: '3.99',
    description: 'A blend of yogurt, water, spices and mango'}
 ];
*/
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'] 
})
export class MenuComponent implements OnInit {

  dishes: Dish[]; // replaced from dishes = DISHItems;

  item: Dish; // the variable "dish" should be the same as in menu.component.html

  //selectedItem = this.dishes[0]; // [0] assigns the order of item in an array to be selected. In this case it's the THIRD item in the array

  onSelect(dish: Dish){
    this.item = dish;
  }
  constructor(private dishService: DishService ) { }

  ngOnInit() {
    this.dishService.returnDishes() 
      .subscribe(dishes => this.dishes = dishes);
    
  }

}

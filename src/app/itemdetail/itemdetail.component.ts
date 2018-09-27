import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { DISHItems } from '../shared/DISHItems';

/*const ITEM = {
  name: 'Tandoori BBQ chicken',
  image: '/assets/images/Tandoori-BBQ-chicken.jpeg',  
  category: 'main',
  label: 'hot',
  price: '8.99',
  description: 'Spicy Barbeque Sauce, Mozzarella Cheese, Red Onions & Tandoori Barbeque Chicken',
  reviews: [
    {
      rating: 5,
      comment: 'Best food!',
      author: 'David Lee',
      date: '2017-12-16T17:57:28.556094Z'
    },
    {
      rating: 5,
      comment: 'The best pizza I have ever tried!',
      author: 'Kim Nguyen',
      date: '2018-02-14T17:57:28.556094Z'
    },
    {
      rating: 5,
      comment: 'Too sweet!',
      author: 'Mike Tomas',
      date: '2018-10-05T17:57:28.556094Z'
    },
    {
      rating: 3,
      comment: 'Ok pizza!',
      author: 'Anita Thomas',
      date: '2017-11-13T17:57:28.556094Z'
    },    
    {
      rating: 1,
      comment: 'Bad pizza ever',
      author: 'Anonymous',
      date: '2017-09-02T17:57:28.556094Z'
    }
  ]
};
*/


@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.css']
})



export class ItemdetailComponent implements OnInit {
  selectedItem: Dish; 
  
  //@Input() selectedItem: Dish;
 
  //items = ITEM; 

  //selectedItem = this.items;

  dishIds: number[];
  prev: number;
  next: number;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }


    ngOnInit() {
      // let id = +this.route.snapshot.params['id'];
     // console.log('id-'); // for troubleshooting purposes
     // console.log(id); // for troubleshooting purposes
  
     // this.dishservice.returnDish(id) 
     // .subscribe(selectedItem => this.selectedItem = selectedItem);
     // console.log(this.selectedItem);

      this.dishservice.returnDishIds() 
      .subscribe(dishIds => this.dishIds = dishIds);
      this.route.params
      .switchMap((params: Params) => this.dishservice.returnDish(+params['id']))
      .subscribe(dish => {this.selectedItem = dish; this.setPrevNext(dish.id);});
    
    }
  
    setPrevNext (dishId: number) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds [(this.dishIds.length + index -1)
                      % this.dishIds.length];
    this.next = this.dishIds [(this.dishIds.length + index +1)
                      % this.dishIds.length];
    }

    goBack(): void {
      this.location.back();
    } 
  

  ReviewCount(count:number){
    return new Array(count);
    }
    

}



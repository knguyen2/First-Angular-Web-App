import { Dish } from './dish';

export const DISHItems: Dish[] = [
    {
      id:1,
      name: 'Tandoori Pizza',
      image: '/assets/images/Tandoori-BBQ-chicken.jpeg',
      category: 'main',
      label: 'Hot',
      price: '8.99',
      description: 'Spicy Barbeque Sauce, Mozzarella Cheese, Red Onions & Tandoori Barbeque Chicken',
      reviews: [
        {
          rating: 5,
          comment: 'Best drink!',
          author: 'David Lee',
          date: '2017-12-16T17:57:28.556094Z'
        },

        {
          rating: 5,
          comment: 'This is good!',
          author: 'Promod Sreedharan',
          date: '2018-02-06T17:57:28.556094Z'
        },

        {
          rating: 5,
          comment: 'Too sweet!',
          author: 'Mike Tomas',
          date: '2018-10-05T17:57:28.556094Z'
        },

        {
          rating: 3,
          comment: 'Ok Drink!',
          author: 'Anita Thomas',
          date: '2017-11-13T17:57:28.556094Z'
        },

        {
          rating: 1,
          comment: 'Bad Drink',
          author: 'Anonymous',
          date: '2017-09-02T17:57:28.556094Z'
        }
      ]
    },

   {
      id:2,
      name: 'Curry Veggie Delight',
      image: '/assets/images/Curry-veggie-delight.jpeg',
      category: 'main',
      label: '',
      price: '9.99',
      description: 'Organic Spicy ..',
      reviews: [
        {
          rating: 4,
          comment: 'Best drink!',
          author: 'Frank Lee',
          date: '2016-12-16T17:57:28.556094Z'
        },
      ]
    },

   {  
      id:3,
      name: 'Chicken Wings',
      image: '/assets/images/chicken-wings-alla-spina.jpg',
      category: 'appetizer',
      label: 'New',
      price: '6.99',
      description: 'Chicken Wings (Hot or Barbeque)?',
      reviews: [
        {
          rating: 1,
          comment: 'Worst chicken winger!',
          author: 'Lee K',
          date: '2016-12-16T17:57:28.556094Z'
        },
      ]
    },

   {  id:4,
      name: 'Mango Lassi',
      image: '/assets/images/mango-lassi.jpg',
      category: 'drinks',
      label: '',
      price: '3.99',
      description: 'A blend of yogurt, water, spices and mango',
      reviews: [
        {
          rating: 5,
          comment: 'Best drink ever!',
          author: 'Lee K',
          date: '2016-12-16T17:57:28.556094Z'
        }
      ]
    }
   ];

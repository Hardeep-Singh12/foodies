
import style from "./Feed.module.css"
import img2 from './img/im2.jpg'; 
import img3 from './img/img3.jpg'; 
import img4 from './img/img4.jpg'; 
import img5 from './img/img5.jpg'; 
import img6 from './img/img6.jpg'; 
import img8 from './img/img8.jpg'; 
import img9 from './img/img6.jpg'; 
import img10 from './img/img6.jpg'; 
import img7 from './img/img7.jpg'; 

import img1 from './img/img1.jpg'; 

const recipes = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    image: img1,
    description: 'A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.'
  },
  {
    id: 2,
    name: 'Chicken Curry',
    image: img2,
    description: 'A flavorful curry with chicken, coconut milk, and spices.'
  },
  {
    id: 3,
    name: 'Veggie Stir Fry',
    image: img3,
    description: 'A quick and healthy stir fry with a mix of vegetables.'
  },
  {
    id: 4,
    name: 'Tacos',
    image: img4,
    description: 'Delicious tacos filled with seasoned beef, lettuce, cheese, and salsa.'
  },
  {
    id: 5,
    name: 'Margherita Pizza',
    image: img5,
    description: 'A simple yet delicious pizza with tomatoes, mozzarella, and basil.'
  },
  {
    id: 6,
    name: 'Chicken Parmesan',
    image:img6 ,
    description: 'Breaded chicken topped with marinara sauce and melted mozzarella cheese.'
  },
  {
    id: 7,
    name: 'Sushi',
    image: img7,
    description: 'Japanese dish made with vinegared rice, vegetables, and raw seafood.'
  },
  {
    id: 8,
    name: 'Lasagna',
    image: img9,
    description: 'Layers of pasta, ricotta cheese, meat sauce, and melted mozzarella.'
  },
  {
    id: 9,
    name: 'Chicken Alfredo',
    image:img8 , 
    description: 'A creamy pasta dish with chicken, Alfredo sauce, and parmesan cheese.'
  },
  {
    id: 10,
    name: 'Caesar Salad',
    image: img10,
    description: 'A classic salad with romaine lettuce, croutons, and Caesar dressing.'
  }
];

const RecipeList = () => {
  return (
    <div className={style.recipeList}>
      <h1>Delicious Recipes</h1>
      <div className={style.recipes}>
        {recipes.map((recipe) => (
          <div className={style.recipeItem} key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} className={style.recipeImage} />
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;

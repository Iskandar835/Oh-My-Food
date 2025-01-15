import "./style.scss";
import { useParams } from "react-router";
import data from "../../data/restaurants.json";
import LikeButton from "../../components/LikeButton";
import DishCard from "../../components/DishCard";
import Button from "../../components/Button";

function Restaurants() {
   const { id } = useParams();
   const restaurant = data.find((restaurant) => restaurant.id === id);

   return (
      <main>
         <div className="restaurant-picture">
            <img src={restaurant.picture.path} alt={restaurant.picture.alt} />
         </div>
         <div className="responsive-container">
            <section className="menu">
               <div className="menu__title">
                  <h1>{restaurant.name}</h1>
                  <div className="menu__title--btn">
                     <LikeButton />
                  </div>
               </div>
               <section className="menu__first">
                  <h2>ENTRÉES</h2>
                  <div className="border-subtitle"></div>
                  <div className="menu__dish">
                     {restaurant.starters.map((starter) => (
                        <DishCard
                           key={starter.id}
                           title={starter.base}
                           subtitle={starter.garnish}
                           price={starter.price}
                        />
                     ))}
                  </div>
               </section>
               <section className="menu__second">
                  <h2>PLATS</h2>
                  <div className="border-subtitle"></div>
                  <div className="menu__dish">
                     {restaurant.dishes.map((dish) => (
                        <DishCard
                           key={dish.id}
                           title={dish.base}
                           subtitle={dish.garnish}
                           price={dish.price}
                        />
                     ))}
                  </div>
               </section>
               <section className="menu__third">
                  <h2>DESSERTS</h2>
                  <div className="border-subtitle"></div>
                  <div className="menu__dish">
                     {restaurant.desserts.map((dessert) => (
                        <DishCard
                           key={dessert.id}
                           title={dessert.base}
                           subtitle={dessert.garnish}
                           price={dessert.price}
                        />
                     ))}
                  </div>
               </section>
               <div className="menu__btn-container">
                  <Button className={"btn btn__order"} content={"Commander"} />
               </div>
            </section>
         </div>
      </main>
   );
}

export default Restaurants;

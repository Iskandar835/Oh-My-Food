import "./style.scss";
import Loader from "../../components/Loader";
import Location from "../../components/Location";
import Button from "../../components/Button";
import dataFriendly from "../../data/friendlyUse.json";
import ExplanationCard from "../../components/ExplanationCard";
import restaurantsData from "../../data/restaurants.json";
import RestaurantCard from "../../components/RestaurantCard";

function Homepage() {
   return (
      <main>
         <Loader />
         <div>
            <Location content={"Paris, Belleville"} />
         </div>
         <section className="explore">
            <h1>Réservez le menu qui vous convient</h1>
            <p>
               Découvrez des restaurants d&apos;exception, sélectionnés par nos
               soins.
            </p>
            <div className="explore__btn-container">
               <Button
                  content={"Explorer nos restaurants"}
                  className={"btn btn__explore"}
               />
            </div>
         </section>
         <section className="functioning">
            <h2>Fonctionnement</h2>
            <div className="functioning__explanation-cards">
               {dataFriendly.functioning.map((item) => (
                  <ExplanationCard
                     key={item.id}
                     pellet={item.id}
                     icon={item.icon}
                     content={item.title}
                  />
               ))}
            </div>
         </section>
         <section className="restaurants">
            <h2>Restaurants</h2>
            <div className="restaurants__cards">
               {restaurantsData.map((restaurant) => (
                  <RestaurantCard
                     key={restaurant.id}
                     to={`/restaurants/${restaurant.id}`}
                     isNew={restaurant.new}
                     source={restaurant.picture?.path}
                     alt={restaurant.picture?.alt}
                     title={restaurant.name}
                     subtitle={restaurant.location}
                     canLike={true}
                  />
               ))}
            </div>
         </section>
      </main>
   );
}

export default Homepage;

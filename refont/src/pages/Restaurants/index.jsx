import "./style.scss";
import { useParams } from "react-router";
import data from "../../data/restaurants.json";

function Restaurants() {
   const { id } = useParams();
   const restaurant = data.find((restaurant) => restaurant.id === id);

   return <></>;
}

export default Restaurants;

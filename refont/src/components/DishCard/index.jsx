import "./style.scss";
import { useState } from "react";
import PropTypes from "prop-types";

function DishCard({ title, subtitle, price }) {
   const [active, setActive] = useState(false);
   const toggleActive = () => {
      setActive(!active);
   };

   return (
      <article
         className={`dishCard__content ${active ? "active" : ""}`}
         onClick={toggleActive}
      >
         <div className="dishCard__content--text">
            <h3>{title}</h3>
            <p>{subtitle}</p>
         </div>
         <span className="dishCard__content--price">{price}€</span>
         <div className="dishCard__content--check">
            <i className="fas fa-check"></i>
         </div>
      </article>
   );
}

DishCard.propTypes = {
   title: PropTypes.string,
   subtitle: PropTypes.string,
   price: PropTypes.number,
};

export default DishCard;

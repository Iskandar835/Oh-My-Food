import "./style.scss";
import PropTypes from "prop-types";

function DishCard({ title, subtitle, price }) {
   return (
      <article className="dishCard__content">
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

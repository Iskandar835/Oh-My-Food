import "./style.scss";
import PropTypes from "prop-types";

function ExplanationCard({ pellet, icon, content }) {
   return (
      <div className="card">
         <span className="card__pellet">
            <p>{pellet}</p>
         </span>
         <div className="card__content">
            <div className="card__content--icon">
               <i className={icon}></i>
            </div>
            <p>{content}</p>
         </div>
      </div>
   );
}

ExplanationCard.propTypes = {
   pellet: PropTypes.string,
   icon: PropTypes.string,
   content: PropTypes.string,
};

export default ExplanationCard;

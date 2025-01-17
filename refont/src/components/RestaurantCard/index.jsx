import "./style.scss";
import { Link } from "react-router";
import NoveltyIndicator from "../NoveltyIndicator";
import LikeButton from "../LikeButton";
import PropTypes from "prop-types";

function RestaurantCard({ to, isNew, source, alt, title, subtitle, canLike }) {
   return (
      <>
         <Link to={to} className="restaurant-link">
            <article className="article">
               {isNew && (
                  <div className="article__new">
                     <NoveltyIndicator />
                  </div>
               )}
               <img src={`${import.meta.env.BASE_URL}` + source} alt={alt} />
               <div className="article__content">
                  <div className="article__text">
                     <h3>{title}</h3>
                     <p>{subtitle}</p>
                  </div>
                  {canLike && (
                     <div className="article__liked">
                        <LikeButton />
                     </div>
                  )}
               </div>
            </article>
         </Link>
      </>
   );
}

RestaurantCard.propTypes = {
   to: PropTypes.string,
   isNew: PropTypes.bool,
   source: PropTypes.string,
   alt: PropTypes.string,
   title: PropTypes.string,
   subtitle: PropTypes.string,
   canLike: PropTypes.bool,
};

export default RestaurantCard;

import "./style.scss";
import PropTypes from "prop-types";

function Location({ content }) {
   return (
      <div className="location-city">
         <i className="fa-solid fa-location-dot"></i>
         <p>{content}</p>
      </div>
   );
}

Location.propTypes = {
   content: PropTypes.string,
};

export default Location;

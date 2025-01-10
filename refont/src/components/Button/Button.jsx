import "./Button.scss";
import PropTypes from "prop-types";

function Button({ onclick, className, content }) {
   return (
      <>
         <button onClick={onclick} className={className}>
            {content}
         </button>
      </>
   );
}

Button.propTypes = {
   onclick: PropTypes.func,
   className: PropTypes.string,
   content: PropTypes.string,
};

export default Button;

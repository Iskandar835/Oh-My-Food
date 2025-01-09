/* eslint-disable react-refresh/only-export-components */
import "./Link.scss";
import PropTypes from "prop-types";

export const LINK_TYPES = {
   ICON: 1,
   NOICON: 2,
};

function Link({ type, icon, href, content }) {
   switch (type) {
      case LINK_TYPES.ICON:
         return (
            <span className="link__with-icon">
               <div className="link__icon">
                  <i className={icon}></i>
               </div>
               <a href={href}>{content}</a>
            </span>
         );
      case LINK_TYPES.NOICON:
         return <a href={href}>{content}</a>;
   }
}

Link.propTypes = {
   type: PropTypes.number,
   icon: PropTypes.string,
   href: PropTypes.string,
   content: PropTypes.string,
};

export default Link;

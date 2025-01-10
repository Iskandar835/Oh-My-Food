import { Link, useLocation } from "react-router";
import "./style.scss";

function Header() {
   const location = useLocation();
   const checkLocation = location.pathname === "/restaurants";

   return (
      <header className="header">
         {checkLocation && (
            <div className="header__icon-container">
               <Link to="/">
                  <i className="fa-solid fa-arrow-left"></i>
               </Link>
            </div>
         )}
         <img
            className="header__logo"
            src="./assets/ohmyfood@2x.svg"
            alt="logo de oh-my-food"
         />
      </header>
   );
}

export default Header;

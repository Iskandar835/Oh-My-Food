import { Link, useLocation } from "react-router";
import "./style.scss";

function Header() {
   const { pathname } = useLocation();
   const checkLocation = pathname.startsWith("/restaurants");

   return (
      <header className="header">
         {checkLocation && (
            <div className="header__icon-container">
               <Link to="/Oh-My-Food">
                  <i className="fa-solid fa-arrow-left"></i>
               </Link>
            </div>
         )}
         <img
            className="header__logo"
            src={`${import.meta.env.BASE_URL}/assets/ohmyfood@2x.svg`}
            alt="logo de oh-my-food"
         />
      </header>
   );
}

export default Header;

import "./style.scss";
import { useState } from "react";

function LikeButton() {
   const [liked, setLiked] = useState(false);
   const toggleLiked = (e) => {
      e.preventDefault();
      setLiked(!liked);
   };

   return (
      <span
         className={`container ${liked ? "liked" : ""}`}
         onClick={toggleLiked}
      >
         <i className="fa-regular fa-heart"></i>
         <i className="full-heart fa-solid fa-heart"></i>
      </span>
   );
}

export default LikeButton;

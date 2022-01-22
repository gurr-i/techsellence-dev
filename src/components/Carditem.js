import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cards";
import "./Cards.css";

function CardItems(props) {
  // Parallel Scroll components effects
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // -------------------

  return (
    //   <>
    //       <li className="cards__item">
    //       Adding props
    //             <li className="cards__item__link" to={props.path}>
    //                 <figure className="card__item__pic_wrap" data-category={props.label}>
    //                     <img src='./images/img1.jpg' alt="Travel_Image" className="cards__item__img" />
    //                 </figure>
    //                 <div className="cards__item__info">
    //                     <h5 className="cards__item__text">{props.text}

    //                     </h5>
    //                 </div>
    //             </li>
    //       </li>
    //   </>

    <>
      <li className="cards__item">
        <Link
          className="cards__item__link"
          style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
          to={props.path}
        >
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="TravelImage"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItems;

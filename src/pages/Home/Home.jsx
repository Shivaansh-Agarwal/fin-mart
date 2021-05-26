import React from "react";
import { CardOffer } from "../../components/Cards";
import "./home.css";

import dataHome from "./data.js";

export const Home = () => {
  return (
    <div className="home">
      <div className="home__wrapper">
        <h1>This is Home!</h1>
        <div className="home__adv__row">
          {dataHome.row1.map(
            ({ title, description, discount, imgURL }, index) => {
              return (
                <CardOffer
                  key={index}
                  title={title}
                  description={description}
                  discount={discount}
                  imgURL={imgURL}
                  prodURL=""
                  cardClassName="card-offer-type2"
                />
              );
            }
          )}
        </div>
        <div className="home__adv__row bg-white">
          <div className="home__row__title">All-time Bestsellers</div>
          {dataHome.row2.map(
            ({ title, description, discount, imgURL }, index) => {
              return (
                <CardOffer
                  key={index}
                  title={title}
                  description={description}
                  discount={discount}
                  imgURL={imgURL}
                  prodURL=""
                  cardClassName="card-offer-type1"
                />
              );
            }
          )}
        </div>
        <div className="home__adv__row">
          {dataHome.row3.map(
            ({ title, description, discount, imgURL }, index) => {
              return (
                <CardOffer
                  key={index}
                  title={title}
                  description={description}
                  discount={discount}
                  imgURL={imgURL}
                  prodURL=""
                  cardClassName="card-offer-type3"
                />
              );
            }
          )}
        </div>
        <div className="home__adv__row bg-white">
          <div className="home__row__title">Indian Bestsellers</div>
          {dataHome.row4.map(
            ({ title, description, discount, imgURL }, index) => {
              return (
                <CardOffer
                  key={index}
                  title={title}
                  description={description}
                  discount={discount}
                  imgURL={imgURL}
                  prodURL=""
                  cardClassName="card-offer-type1"
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { CardOffer } from "../../components/Cards";
import { nanoid } from "nanoid";
import "./home.css";
import { useProductsContext } from "../../contexts/products.context.js";
import { LoadingScreen } from "../../components";
import { toast } from "react-toastify";
import axios from "axios";

import dataHome from "./data.js";

export const Home = () => {
  const { productsState, productsDispatch } = useProductsContext();
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  const getCampaigns = async () => {
    try {
      setShowLoadingScreen(true);
      const { data } = await axios.get(
        "https://emart.shivaansh98.repl.co/api/v1/campaigns"
      );
      productsDispatch({
        type: "INITIALIZE_CAMPAIGNS",
        payload: data.campaigns,
      });
    } catch (error) {
      console.error("ERROR while fetching campaigns", error);
      toast.error(
        "Error while fetching campaigns. Please try later! " + error,
        {
          position: toast.POSITION.BOTTOM_CENTER,
        }
      );
    } finally {
      setShowLoadingScreen(false);
    }
  };

  useEffect(() => {
    getCampaigns();
  }, []);

  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="home__adv__row">
          {productsState.campaigns
            .slice(0, 2)
            .map(({ name, description, offer, imgURL }) => {
              return (
                <CardOffer
                  key={nanoid()}
                  title={name}
                  description={description}
                  discount={offer}
                  imgURL={imgURL}
                  prodURL=""
                  cardClassName="card-offer-type2"
                />
              );
            })}
        </div>
        <div className="home__adv__row bg-white">
          <div className="home__row__title">All-time Bestsellers</div>
          {dataHome.row2.map(({ title, description, discount, imgURL }) => {
            return (
              <CardOffer
                key={nanoid()}
                title={title}
                description={description}
                discount={discount}
                imgURL={imgURL}
                prodURL=""
                cardClassName="card-offer-type1"
              />
            );
          })}
        </div>
        <div className="home__adv__row">
          {productsState.campaigns
            .slice(2, 4)
            .map(({ name, description, offer, imgURL }) => {
              return (
                <CardOffer
                  key={nanoid()}
                  title={name}
                  description={description}
                  discount={offer}
                  imgURL={imgURL}
                  prodURL=""
                  cardClassName="card-offer-type3"
                />
              );
            })}
        </div>
        <div className="home__adv__row bg-white">
          <div className="home__row__title">Indian Bestsellers</div>
          {dataHome.row4.map(({ title, description, discount, imgURL }) => {
            return (
              <CardOffer
                key={nanoid()}
                title={title}
                description={description}
                discount={discount}
                imgURL={imgURL}
                prodURL=""
                cardClassName="card-offer-type1"
              />
            );
          })}
        </div>
      </div>
      <LoadingScreen showLoadingScreen={showLoadingScreen} />
    </div>
  );
};

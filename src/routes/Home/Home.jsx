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

  const getProductsAndCampaigns = async () => {
    try {
      setShowLoadingScreen(true);
      const campaignsResponse = await axios.get(
        "https://emart.shivaansh98.repl.co/api/v1/campaigns"
      );
      const productsResponse = await axios.get(
        "https://emart.shivaansh98.repl.co/api/v1/products"
      );
      const { campaigns } = campaignsResponse.data;
      const { products } = productsResponse.data;
      productsDispatch({
        type: "INITIALIZE_CAMPAIGNS",
        payload: campaigns,
      });
      productsDispatch({
        type: "INITIALIZE_PRODUCT_LIST",
        payload: products,
      });
    } catch (e) {
      toast.error(
        "Error while fetching products or campaigns. Please try later! " +
          error,
        {
          position: toast.POSITION.BOTTOM_CENTER,
        }
      );
    } finally {
      setShowLoadingScreen(false);
    }
  };

  useEffect(() => {
    getProductsAndCampaigns();
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

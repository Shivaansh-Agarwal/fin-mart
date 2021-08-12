import React, { useEffect, useState } from "react";
import styles from "./styles/Home.module.css";
import { useProductsContext } from "../../contexts/products.context.js";
import { CampaignsRow, BooksRow, LoadingScreen } from "../../components";
import { getProductsAndCampaignsData } from "../../api/api-response.js";
import { filterBooksByTag } from "../../utils/utility.js";

export const Home = () => {
  const { productsState, productsDispatch } = useProductsContext();
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    document.title = "Fin Mart";
    getProductsAndCampaignsData({ productsDispatch, setShowLoadingScreen });
  }, []);

  const productsListHome = filterBooksByTag(productsState);
  const campaignsList1 = productsState.campaigns.slice(0, 2);
  const campaignsList2 = productsState.campaigns.slice(2, 4);
  const booksList1 = productsListHome.worldWideBestSellers.slice(0, 5);
  const booksList2 = productsListHome.nationalBestSellers.slice(0, 5);

  return (
    <div className={styles.home}>
      <div className={styles.home__wrapper}>
        <CampaignsRow campaignsList={campaignsList1} />
        <BooksRow booksList={booksList1} rowHeading="All-time Bestsellers" />
        <CampaignsRow campaignsList={campaignsList2} />
        <BooksRow booksList={booksList2} rowHeading="National Bestsellers" />
      </div>
      <LoadingScreen showLoadingScreen={showLoadingScreen} />
    </div>
  );
};

import React from "react";
import { CardOffer } from "../Cards/CardOffer.jsx";
import styles from "./styles/CampaignsRow.module.css";

export const CampaignsRow = ({ campaignsList }) => {
  return (
    <div className={styles.campaigns_row}>
      {campaignsList.map(
        ({ _id, name, description, offer, imgURL, category }) => {
          return (
            <CardOffer
              key={_id}
              title={name}
              description={description}
              discount={offer}
              imgURL={imgURL}
              prodURL=""
              category={category}
              cardClassName="card-offer-type2"
            />
          );
        }
      )}
    </div>
  );
};

import React from "react";
import { CardOffer } from "../Cards/CardOffer.jsx";
import styles from "./styles/BooksRow.module.css";

export const BooksRow = ({ booksList, rowHeading }) => {
  return booksList?.length !== 0 ? (
    <div className={`${styles.campaigns_row} ${styles.bgWhite}`}>
      <div className={styles.booksRowTitle}>{rowHeading}</div>
      {booksList.map(
        ({ _id, name, description, price, images, additionalDetails }) => {
          const { discount, discountPercentage } = price;
          const { author } = additionalDetails;
          return (
            <CardOffer
              key={_id}
              id={_id}
              title={name}
              description={author}
              discount={discount !== 0 ? discountPercentage : ""}
              imgURL={images[1]}
              prodURL=""
              cardClassName="card-offer-type1"
            />
          );
        }
      )}
    </div>
  ) : (
    <></>
  );
};

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import styles from "./Product.module.css";
import { LoadingScreen } from "../../components";

export const Product = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  useEffect(() => {
    getProduct({ id, setShowLoadingScreen, setProductData });
  }, []);

  if (Object.keys(productData).length === 0) return null;

  const { name, description, images, price, ratings, additionalDetails } =
    productData;
  const { author } = additionalDetails;

  return (
    <div className={styles.product}>
      <ProductHeader name={name} description={description} author={author} />
      <ProductDetails
        image={images[0]}
        productOverview={productOverview}
        aboutTheAuthor={aboutTheAuthor}
        additionalDetails={additionalDetails}
        price={price}
        ratings={ratings}
      />
      <LoadingScreen showLoadingScreen={showLoadingScreen} />
    </div>
  );
};

async function getProduct({ id, setShowLoadingScreen, setProductData }) {
  try {
    setShowLoadingScreen(true);
    const { data } = await axios.get(
      `https://emart.shivaansh98.repl.co/api/v1/products/${id}`
    );
    setProductData(data.product);
    console.log(data);
  } catch (e) {
    toast.error(
      "Error while fetching product details. Please try later! " + error,
      {
        position: toast.POSITION.BOTTOM_CENTER,
      }
    );
  } finally {
    setShowLoadingScreen(false);
  }
}

const ProductHeader = ({ name, description, author }) => {
  return (
    <header className={styles.product__header}>
      <div className={styles.product__name}>
        {name}
        <span className={styles.product__bookbinding}>{description}</span>
      </div>
      <div className={styles.product__author}>{author}</div>
    </header>
  );
};

const ProductDetails = ({
  image,
  productOverview,
  aboutTheAuthor,
  additionalDetails,
  price,
  ratings,
}) => {
  return (
    <div className={styles.product__main}>
      <ProductImage image={image} />
      <ProductInformation
        productOverview={productOverview}
        aboutTheAuthor={aboutTheAuthor}
        additionalDetails={additionalDetails}
      />
      <ProductPrice price={price} ratings={ratings} />
    </div>
  );
};

const ProductImage = ({ image }) => {
  return (
    <div className={styles.product__image}>
      <img src={image} alt="product" />
    </div>
  );
};

const ProductInformation = ({
  productOverview,
  aboutTheAuthor,
  additionalDetails,
}) => {
  return (
    <div className={styles.product__information}>
      <ProductSectionPara
        sectionHeading="Product Overview"
        paraList={productOverview}
      />
      <ProductSectionPara
        sectionHeading="About The Author"
        paraList={aboutTheAuthor}
      />
      <ProductSectionList additionalDetails={additionalDetails} />
    </div>
  );
};

const ProductPrice = ({ price, ratings }) => {
  const { discount, discountPercentage, discountedPrice, originalPrice } =
    price;
  const { avgRatings, totalRatings } = ratings;
  return (
    <div className={styles.product__price}>
      <h1 className={styles["section--heading"]}>Price</h1>
      <div>Discount: {discount}</div>
      <div>Discount Percentage: {discountPercentage}</div>
      <div>Discounted Price: {discountedPrice}</div>
      <div>Original Price: {originalPrice}</div>
      <button>Buy Now</button>
      <button>Add To Cart</button>
      <button>Buy from Amazon</button>
    </div>
  );
};

const ProductSectionPara = ({ sectionHeading, paraList }) => {
  return (
    <section className={styles.product__overview}>
      <h1 className={styles["section--heading"]}>{sectionHeading}</h1>
      <div>
        {paraList.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </section>
  );
};

const ProductSectionList = ({ additionalDetails }) => {
  const {
    author,
    countryOfOrigin,
    dimensions,
    isbn10,
    isbn13,
    language,
    pages,
    publisher,
    weight,
  } = additionalDetails;
  return (
    <section className={styles.product__details}>
      <h1 className={styles["section--heading"]}>Product Details</h1>
      <ul>
        <ListItem title="Author: " value={author} />
        <ListItem title="Country of Origin: " value={countryOfOrigin} />
        <ListItem title="Dimensions: " value={dimensions} />
        <ListItem title="ISBN10: " value={isbn10} />
        <ListItem title="ISBN13: " value={isbn13} />
        <ListItem title="Lamguage: " value={language} />
        <ListItem title="Pages: " value={pages} />
        <ListItem title="Publisher: " value={publisher} />
        <ListItem title="Weight: " value={weight} />
      </ul>
    </section>
  );
};

const ListItem = ({ title, value }) => {
  return (
    <li className={styles["list-item-nobullet"]}>
      <span className={styles["text-bold"]}>{title}</span> {value}
    </li>
  );
};

const productOverview = [
  `From the award-winning author of The Friendship comes a
shattering, brilliantly inventive novel based on the volatile
true love story of literary icons Sylvia Plath and Ted Hughes.`,
  `In 1963 Sylvia Plath took her own life in her London flat. Her
death was the culmination of a brief, brilliant life lived in
the shadow of clinical depression&amp;;a condition exacerbated
by her tempestuous relationship with mercurial poet Ted Hughes.
The ensuing years saw Plath rise to martyr status while Hughes
was cast as the cause of her suicide, his infidelity at the
heart of her demise.`,
  `In 1963 Sylvia Plath took her own life in her London flat. Her
death was the culmination of a brief, brilliant life lived in
the shadow of clinical depression; a condition exacerbated
by her tempestuous relationship with mercurial poet Ted Hughes.
The ensuing years saw Plath rise to martyr status while Hughes
was cast as the cause of her suicide, his infidelity at the
heart of her demise.`,
  `For decades, Hughes never bore witness to the truth of their
marriage&amp;;one buried beneath a mudslide of apocryphal
stories, gossip, sensationalism, and myth. Until now.`,
  `In this mesmerizing fictional work, Connie Palmen tells his side
of the story, previously untold, delivered in Ted Hughes&amp;;s
own uncompromising voice. A brutal and lyrical confessional, 
<i>Your Story, My Story</i> paints an indelible picture of their
seven-year relationship&amp;the soaring highs and profound lows
of star-crossed soul mates bedeviled by their personal demons.
It will forever change the way we think about these two literary
icons.`,
];

const aboutTheAuthor = [
  `Connie Palmen was born in Sint Odiliënberg, the Netherlands, and
studied literature and philosophy at the University of
Amsterdam. She is the author of <i>The Laws</i>, voted the
European Novel of the Year and short-listed for the 1996
International IMPAC Dublin Literary Award; <i>The Friendship</i>
, winner of the AKO Literature Prize; <i> Lucifer</i>; and the
autobiographical novel <i>I.M.</i> Ms. Palmen currently lives in
Amsterdam. For more information, please visit
www.conniepalmen.nl.`,
];

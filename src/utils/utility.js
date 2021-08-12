export function filterBooksByTag(productsState) {
  const productsListHome = productsState.productsList.reduce(
    (booksHomeList, currItem) => {
      const { badge } = currItem;
      switch (badge.tagName) {
        case "NATIONAL BESTSELLER":
          return {
            ...booksHomeList,
            nationalBestSellers: [
              ...booksHomeList.nationalBestSellers,
              currItem,
            ],
          };
        case "WORLDWIDE BESTSELLER":
          return {
            ...booksHomeList,
            worldWideBestSellers: [
              ...booksHomeList.worldWideBestSellers,
              currItem,
            ],
          };
        default:
          return booksHomeList;
      }
    },
    {
      worldWideBestSellers: [],
      nationalBestSellers: [],
    }
  );
  return productsListHome;
}

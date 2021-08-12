import { toast } from "react-toastify";
import {
  getProductsData,
  getCampaignsData,
  getProduct,
} from "./api-serviceCalls";

/**
 * getProductsAndCampaignsData - Used to fetch & store Campaigns & Products data.
 * @param {function} productsDispatch - Dispatch Function to update the state using productsReducer.
 * @param {function} setShowLoadingScreen - setState Function for hiding/showing Loading Screen.
 */
export async function getProductsAndCampaignsData({
  productsDispatch,
  setShowLoadingScreen,
}) {
  const campaignsResponse = await getCampaignsData();
  const productsResponse = await getProductsData();
  if (campaignsResponse.success && productsResponse.success) {
    productsDispatch({
      type: "INITIALIZE_CAMPAIGNS",
      payload: campaignsResponse.data,
    });
    productsDispatch({
      type: "INITIALIZE_PRODUCT_LIST",
      payload: productsResponse.data,
    });
  } else {
    toast.error(productsResponse.message, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }
  setShowLoadingScreen(false);
}

/**
 * getProductData - Used to fetch and set the Product data.
 * @param {id} id - ProductId
 * @param {function} setProductData - Used to store product data after fetching.
 * @param {function} setShowLoadingScreen - setState Function for hiding/showing Loading Screen.
 */
export async function getProductData({
  id,
  setProductData,
  setShowLoadingScreen,
}) {
  const productResponse = await getProduct(id);
  if (productResponse.success) {
    setProductData(productResponse.data);
  } else {
    toast.error(productResponse.message, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }
  setShowLoadingScreen(false);
}

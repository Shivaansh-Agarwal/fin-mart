import { toast } from "react-toastify";
import { getProductsData, getCampaignsData } from "./api-serviceCalls";

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

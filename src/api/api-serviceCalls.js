import apiRequest from "./api-request.js";

export async function getProductsData() {
  return await apiRequest(
    "/api/v1/products/",
    "Error while fetching products or campaigns. Please try later!"
  );
}

export async function getCampaignsData() {
  return await apiRequest(
    "/api/v1/campaigns/",
    "Error while fetching products or campaigns. Please try later!"
  );
}

export async function getProduct(id) {
  return await apiRequest(
    `/api/v1/products/${id}`,
    "Error while fetching product details. Please try later! "
  );
}

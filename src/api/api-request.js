import axios from "axios";

async function apiRequest(
  endpoint,
  errMsg,
  {
    payload = null,
    params = "",
    token = "",
    customHeaders = {},
    ...customConfig
  } = {}
) {
  let finalResponse = {};
  try {
    const response = await axios({
      baseURL: process.env.REACT_APP_BASE_URL,
      url: endpoint,
      method: payload ? "post" : "get",
      params: params,
      data: payload ? payload : undefined,
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
        "Content-Type": payload ? "application/json" : undefined,
        ...customHeaders,
      },
      ...customConfig,
    });
    const { data, success, message } = response.data;
    finalResponse = getResponseObject({
      data,
      success,
      message,
    });
  } catch (e) {
    console.error(e);
    response = getResponseObject({
      message: errMsg,
    });
  } finally {
    return finalResponse;
  }
}

function getResponseObject({ data = [], success = false, message = "" }) {
  return {
    data,
    success,
    message,
  };
}

export default apiRequest;

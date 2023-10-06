import axios from "axios";
axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8090"
    : "http://35.238.13.75:8090";

export const apiNoToken = async (url, method, data) => {
  const body = await axios({
    url,
    method,
    data,
  });
  return body;
};
export const api = async (url, method, data) => {
  const token = localStorage.getItem("token");
  const body = await axios({
    url,
    method,
    data,
    headers: { Authorization: `Bearer ${token}` },
  });

  return body;
};

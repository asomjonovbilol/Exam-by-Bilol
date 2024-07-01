import axios from "axios";

const mainUrl = axios.create({
  baseURL: "https://668142c704acc3545a063106.mockapi.io/api/v1/title",
});

mainUrl.interceptors.request.use((req) => {
  let token = localStorage.getItem("token");
  if (token) {
    req.headers.authorization = `Bearer ${token}`;
  }
  return req;
});

export default mainUrl;

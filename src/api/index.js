import axios from "axios";
import qs from "qs";

const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const findUsers = (params) => {
  return http.get("/users", {
    params,
    paramsSerializer: () => qs.stringify(params, { arrayFormat: 'repeat' }),
  });
};

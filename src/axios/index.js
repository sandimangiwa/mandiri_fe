import axios from "axios";
// axios("http://pegiatkerja.com/");
const ax = axios.create({
  baseURL: "http://pegiatkerja.com/",
  //   headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     Authorization: localStorage.getItem("token"),
  //   },
});

ax.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default ax;

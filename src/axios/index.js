import axios from "axios";
// axios("http://pegiatkerja.com/");
const ax = axios.create({
  baseURL: "http://mtfadmin.pegiatkerja.com/",
  // baseURL: "http://localhost/CS_BE/",
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

import axios from "axios";

const instannce = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instannce;

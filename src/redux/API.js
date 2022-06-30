import axios from "axios";
// const URL = "http://localhost:3001/api/";
// http://localhost:3001/api/product?name=soap&category=all
const getDate = async (path) => {
  const data = await axios.get(`http://localhost:3001/api/` + path);
  return data;
};
export default getDate;

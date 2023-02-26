import axios from "axios";
import { baseURL } from "../constants/url";

export const apiGet = async (url: string) => {
  try {
    const response = await axios.get(`${baseURL}/${url}`);
    return response;
  } catch (err) {
    return err;
  }
};

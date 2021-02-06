import { POLLING } from "../utils/endPoints";
import { https } from "./httpService";

export const pollPosts = async (pageNo) => {
  return await https
    .get(POLLING.replace("{{PAGE}}", pageNo))
    .then((response) => response)
    .catch((err) => ({ error: err.message }));
};

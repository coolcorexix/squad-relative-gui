import { FetchStatus } from "config/constants/types";
import { ApiCollections } from "./types";

const collections = require("./staticCollectionResponse.json");

export const useGetCollections = (): {
  data: ApiCollections;
  status: FetchStatus;
} => {
  return { data: collections, status: FetchStatus.Fetched };
};

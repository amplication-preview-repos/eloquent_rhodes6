import { SortOrder } from "../../util/SortOrder";

export type MarketScanOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  scanDate?: SortOrder;
  updatedAt?: SortOrder;
};

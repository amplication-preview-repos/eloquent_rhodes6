import { SortOrder } from "../../util/SortOrder";

export type TradingPositionOrderByInput = {
  createdAt?: SortOrder;
  entryPrice?: SortOrder;
  exitPrice?: SortOrder;
  id?: SortOrder;
  quantity?: SortOrder;
  status?: SortOrder;
  symbolField?: SortOrder;
  updatedAt?: SortOrder;
};

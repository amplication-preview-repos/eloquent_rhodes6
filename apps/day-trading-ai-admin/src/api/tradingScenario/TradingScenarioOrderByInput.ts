import { SortOrder } from "../../util/SortOrder";

export type TradingScenarioOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  marketScanId?: SortOrder;
  scenarioName?: SortOrder;
  updatedAt?: SortOrder;
};

import { MarketScanWhereInput } from "./MarketScanWhereInput";
import { MarketScanOrderByInput } from "./MarketScanOrderByInput";

export type MarketScanFindManyArgs = {
  where?: MarketScanWhereInput;
  orderBy?: Array<MarketScanOrderByInput>;
  skip?: number;
  take?: number;
};

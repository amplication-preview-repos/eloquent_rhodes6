import { TradingPositionWhereInput } from "./TradingPositionWhereInput";
import { TradingPositionOrderByInput } from "./TradingPositionOrderByInput";

export type TradingPositionFindManyArgs = {
  where?: TradingPositionWhereInput;
  orderBy?: Array<TradingPositionOrderByInput>;
  skip?: number;
  take?: number;
};

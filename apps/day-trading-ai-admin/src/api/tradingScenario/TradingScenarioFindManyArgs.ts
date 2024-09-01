import { TradingScenarioWhereInput } from "./TradingScenarioWhereInput";
import { TradingScenarioOrderByInput } from "./TradingScenarioOrderByInput";

export type TradingScenarioFindManyArgs = {
  where?: TradingScenarioWhereInput;
  orderBy?: Array<TradingScenarioOrderByInput>;
  skip?: number;
  take?: number;
};

import { TradingScenarioCreateNestedManyWithoutMarketScansInput } from "./TradingScenarioCreateNestedManyWithoutMarketScansInput";

export type MarketScanCreateInput = {
  name?: string | null;
  scanDate?: Date | null;
  tradingScenarios?: TradingScenarioCreateNestedManyWithoutMarketScansInput;
};

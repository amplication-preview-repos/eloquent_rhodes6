import { TradingScenarioUpdateManyWithoutMarketScansInput } from "./TradingScenarioUpdateManyWithoutMarketScansInput";

export type MarketScanUpdateInput = {
  name?: string | null;
  scanDate?: Date | null;
  tradingScenarios?: TradingScenarioUpdateManyWithoutMarketScansInput;
};

import { MarketScanWhereUniqueInput } from "../marketScan/MarketScanWhereUniqueInput";

export type TradingScenarioUpdateInput = {
  description?: string | null;
  marketScan?: MarketScanWhereUniqueInput | null;
  scenarioName?: string | null;
};

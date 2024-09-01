import { MarketScanWhereUniqueInput } from "../marketScan/MarketScanWhereUniqueInput";

export type TradingScenarioCreateInput = {
  description?: string | null;
  marketScan?: MarketScanWhereUniqueInput | null;
  scenarioName?: string | null;
};

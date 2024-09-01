import { MarketScan } from "../marketScan/MarketScan";

export type TradingScenario = {
  createdAt: Date;
  description: string | null;
  id: string;
  marketScan?: MarketScan | null;
  scenarioName: string | null;
  updatedAt: Date;
};

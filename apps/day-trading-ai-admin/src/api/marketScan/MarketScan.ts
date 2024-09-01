import { TradingScenario } from "../tradingScenario/TradingScenario";

export type MarketScan = {
  createdAt: Date;
  id: string;
  name: string | null;
  scanDate: Date | null;
  tradingScenarios?: Array<TradingScenario>;
  updatedAt: Date;
};

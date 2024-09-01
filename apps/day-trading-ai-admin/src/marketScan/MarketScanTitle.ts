import { MarketScan as TMarketScan } from "../api/marketScan/MarketScan";

export const MARKETSCAN_TITLE_FIELD = "name";

export const MarketScanTitle = (record: TMarketScan): string => {
  return record.name?.toString() || String(record.id);
};

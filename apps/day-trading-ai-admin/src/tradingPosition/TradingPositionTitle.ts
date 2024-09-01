import { TradingPosition as TTradingPosition } from "../api/tradingPosition/TradingPosition";

export const TRADINGPOSITION_TITLE_FIELD = "symbolField";

export const TradingPositionTitle = (record: TTradingPosition): string => {
  return record.symbolField?.toString() || String(record.id);
};

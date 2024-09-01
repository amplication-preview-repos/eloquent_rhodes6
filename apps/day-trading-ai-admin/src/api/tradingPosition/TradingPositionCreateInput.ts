export type TradingPositionCreateInput = {
  entryPrice?: number | null;
  exitPrice?: number | null;
  quantity?: number | null;
  status?: "Option1" | null;
  symbolField?: string | null;
};

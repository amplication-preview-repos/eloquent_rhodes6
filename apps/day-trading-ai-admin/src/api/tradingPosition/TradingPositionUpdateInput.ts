export type TradingPositionUpdateInput = {
  entryPrice?: number | null;
  exitPrice?: number | null;
  quantity?: number | null;
  status?: "Option1" | null;
  symbolField?: string | null;
};

export type TradingPosition = {
  createdAt: Date;
  entryPrice: number | null;
  exitPrice: number | null;
  id: string;
  quantity: number | null;
  status?: "Option1" | null;
  symbolField: string | null;
  updatedAt: Date;
};

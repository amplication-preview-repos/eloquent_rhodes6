import { JsonValue } from "type-fest";

export type ChartDescription = {
  createdAt: Date;
  description: string | null;
  id: string;
  imageUrl: JsonValue;
  updatedAt: Date;
};

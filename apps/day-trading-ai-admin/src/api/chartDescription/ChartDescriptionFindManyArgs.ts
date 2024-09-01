import { ChartDescriptionWhereInput } from "./ChartDescriptionWhereInput";
import { ChartDescriptionOrderByInput } from "./ChartDescriptionOrderByInput";

export type ChartDescriptionFindManyArgs = {
  where?: ChartDescriptionWhereInput;
  orderBy?: Array<ChartDescriptionOrderByInput>;
  skip?: number;
  take?: number;
};

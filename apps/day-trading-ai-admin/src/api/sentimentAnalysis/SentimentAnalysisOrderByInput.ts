import { SortOrder } from "../../util/SortOrder";

export type SentimentAnalysisOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  sentimentScore?: SortOrder;
  source?: SortOrder;
  updatedAt?: SortOrder;
};

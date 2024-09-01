import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SentimentAnalysisWhereInput = {
  id?: StringFilter;
  sentimentScore?: FloatNullableFilter;
  source?: StringNullableFilter;
};

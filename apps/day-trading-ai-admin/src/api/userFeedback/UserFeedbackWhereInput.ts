import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type UserFeedbackWhereInput = {
  feedbackText?: StringNullableFilter;
  id?: StringFilter;
  rating?: IntNullableFilter;
  userId?: StringNullableFilter;
};

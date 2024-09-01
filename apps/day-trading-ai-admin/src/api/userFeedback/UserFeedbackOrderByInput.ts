import { SortOrder } from "../../util/SortOrder";

export type UserFeedbackOrderByInput = {
  createdAt?: SortOrder;
  feedbackText?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

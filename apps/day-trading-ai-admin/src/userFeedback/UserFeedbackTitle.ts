import { UserFeedback as TUserFeedback } from "../api/userFeedback/UserFeedback";

export const USERFEEDBACK_TITLE_FIELD = "userId";

export const UserFeedbackTitle = (record: TUserFeedback): string => {
  return record.userId?.toString() || String(record.id);
};

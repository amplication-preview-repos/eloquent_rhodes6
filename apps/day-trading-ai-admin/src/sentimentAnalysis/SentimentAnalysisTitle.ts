import { SentimentAnalysis as TSentimentAnalysis } from "../api/sentimentAnalysis/SentimentAnalysis";

export const SENTIMENTANALYSIS_TITLE_FIELD = "source";

export const SentimentAnalysisTitle = (record: TSentimentAnalysis): string => {
  return record.source?.toString() || String(record.id);
};

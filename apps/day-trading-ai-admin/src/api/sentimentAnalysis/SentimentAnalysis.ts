export type SentimentAnalysis = {
  createdAt: Date;
  id: string;
  sentimentScore: number | null;
  source: string | null;
  updatedAt: Date;
};

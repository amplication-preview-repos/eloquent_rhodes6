import { ChartDescription as TChartDescription } from "../api/chartDescription/ChartDescription";

export const CHARTDESCRIPTION_TITLE_FIELD = "id";

export const ChartDescriptionTitle = (record: TChartDescription): string => {
  return record.id?.toString() || String(record.id);
};

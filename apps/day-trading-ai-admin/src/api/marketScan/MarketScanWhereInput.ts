import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TradingScenarioListRelationFilter } from "../tradingScenario/TradingScenarioListRelationFilter";

export type MarketScanWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  scanDate?: DateTimeNullableFilter;
  tradingScenarios?: TradingScenarioListRelationFilter;
};

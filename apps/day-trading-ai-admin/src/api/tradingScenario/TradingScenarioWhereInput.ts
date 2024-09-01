import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MarketScanWhereUniqueInput } from "../marketScan/MarketScanWhereUniqueInput";

export type TradingScenarioWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  marketScan?: MarketScanWhereUniqueInput;
  scenarioName?: StringNullableFilter;
};

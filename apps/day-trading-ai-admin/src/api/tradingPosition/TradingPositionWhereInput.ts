import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TradingPositionWhereInput = {
  entryPrice?: FloatNullableFilter;
  exitPrice?: FloatNullableFilter;
  id?: StringFilter;
  quantity?: IntNullableFilter;
  status?: "Option1";
  symbolField?: StringNullableFilter;
};

import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { MARKETSCAN_TITLE_FIELD } from "../marketScan/MarketScanTitle";

export const TradingScenarioShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="marketScan"
          source="marketscan.id"
          reference="MarketScan"
        >
          <TextField source={MARKETSCAN_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="scenarioName" source="scenarioName" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

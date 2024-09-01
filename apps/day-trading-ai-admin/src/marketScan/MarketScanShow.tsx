import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { MARKETSCAN_TITLE_FIELD } from "./MarketScanTitle";

export const MarketScanShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="scanDate" source="scanDate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="TradingScenario"
          target="marketScanId"
          label="TradingScenarios"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

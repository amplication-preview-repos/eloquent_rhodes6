import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MARKETSCAN_TITLE_FIELD } from "../marketScan/MarketScanTitle";

export const TradingScenarioList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TradingScenarios"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};

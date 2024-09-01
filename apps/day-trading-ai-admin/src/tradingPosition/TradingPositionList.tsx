import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TradingPositionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TradingPositions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="entryPrice" source="entryPrice" />
        <TextField label="exitPrice" source="exitPrice" />
        <TextField label="ID" source="id" />
        <TextField label="quantity" source="quantity" />
        <TextField label="status" source="status" />
        <TextField label="symbol" source="symbolField" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

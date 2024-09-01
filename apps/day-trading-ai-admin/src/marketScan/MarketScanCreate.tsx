import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TradingScenarioTitle } from "../tradingScenario/TradingScenarioTitle";

export const MarketScanCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <DateTimeInput label="scanDate" source="scanDate" />
        <ReferenceArrayInput
          source="tradingScenarios"
          reference="TradingScenario"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TradingScenarioTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

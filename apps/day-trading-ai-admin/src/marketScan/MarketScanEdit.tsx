import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TradingScenarioTitle } from "../tradingScenario/TradingScenarioTitle";

export const MarketScanEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

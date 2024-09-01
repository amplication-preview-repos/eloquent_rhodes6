import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MarketScanTitle } from "../marketScan/MarketScanTitle";

export const TradingScenarioCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="marketScan.id"
          reference="MarketScan"
          label="marketScan"
        >
          <SelectInput optionText={MarketScanTitle} />
        </ReferenceInput>
        <TextInput label="scenarioName" source="scenarioName" />
      </SimpleForm>
    </Create>
  );
};

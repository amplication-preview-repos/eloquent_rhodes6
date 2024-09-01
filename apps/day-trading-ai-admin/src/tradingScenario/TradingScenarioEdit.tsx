import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MarketScanTitle } from "../marketScan/MarketScanTitle";

export const TradingScenarioEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

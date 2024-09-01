import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const TradingPositionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="entryPrice" source="entryPrice" />
        <NumberInput label="exitPrice" source="exitPrice" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="symbol" source="symbolField" />
      </SimpleForm>
    </Create>
  );
};

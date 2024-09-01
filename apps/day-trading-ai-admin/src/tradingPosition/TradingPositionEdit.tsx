import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const TradingPositionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

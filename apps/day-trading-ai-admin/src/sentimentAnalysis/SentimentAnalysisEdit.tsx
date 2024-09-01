import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const SentimentAnalysisEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="sentimentScore" source="sentimentScore" />
        <TextInput label="source" source="source" />
      </SimpleForm>
    </Edit>
  );
};

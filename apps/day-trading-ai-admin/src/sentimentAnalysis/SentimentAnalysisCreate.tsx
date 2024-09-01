import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const SentimentAnalysisCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="sentimentScore" source="sentimentScore" />
        <TextInput label="source" source="source" />
      </SimpleForm>
    </Create>
  );
};

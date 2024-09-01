import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const UserFeedbackCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="feedbackText" multiline source="feedbackText" />
        <NumberInput step={1} label="rating" source="rating" />
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Create>
  );
};

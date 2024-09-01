import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const UserFeedbackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="feedbackText" multiline source="feedbackText" />
        <NumberInput step={1} label="rating" source="rating" />
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};

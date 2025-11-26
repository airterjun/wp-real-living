import { CheckboxControl } from "@wordpress/components";
import InputWrapper from "./InputWrapper";
import { getModelValue, updateAttributesData } from "./Libs";
const { ToggleControl } = wp.components;

export default function CheckBox(props) {
  const { label, set } = props;
  const getValue = getModelValue(set, props);

  return (
    <InputWrapper label="&nbsp;">
      <CheckboxControl
        label={label}
        checked={getValue}
        onChange={(val) => {
          updateAttributesData(set, val, props);
        }}
      />
    </InputWrapper>
  );
}

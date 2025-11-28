import InputWrapper from "./InputWrapper";
import Text from "./Text";

export default function (props) {
  const { edit } = props;

  if (!edit) return;
  return (
    <InputWrapper label="Style Classes">
      <Text set="section_class" {...props} disabledFormat={true} />
    </InputWrapper>
  );
}

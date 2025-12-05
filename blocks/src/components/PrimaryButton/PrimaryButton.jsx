import InlineLinkEditor from "../helper/InlineLinkEditor";
import { getNestedValue } from "../helper/Libs";
import IconArrow from "../Shared/IconArrow";
import "./style.scss";

const PrimaryButton = (props) => {
  const { attributes, model, fill, set } = props;

  const id = set ? set : "link";

  const val = getNestedValue(attributes, model ? `${model}.${id}` : id);

  const buttonClass = props.className ? props.className : "";

  return (
    <>
      <div
        className={`primary-button ${(fill ? "button-fill" : "", buttonClass)}`}
      >
        <InlineLinkEditor set={id} {...props}>
          {val?.title || "Read More"}
          <IconArrow />
        </InlineLinkEditor>
      </div>
    </>
  );
};

export default PrimaryButton;

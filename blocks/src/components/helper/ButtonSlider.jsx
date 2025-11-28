import { getNestedValue, updateAttributesData } from "./Libs";
import { v4 as uuidv4 } from "uuid";

export default function ButtonSlider(props) {
  const { edit, attributes, set, model } = props;
  const getDefault = getNestedValue(
    attributes,
    model ? `${model}.${set}` : set
  );
  const newValue = getDefault[0];
  newValue.id = uuidv4();

  if (edit)
    return (
      <div
        onClick={() => {
          updateAttributesData(set, structuredClone(newValue), props, true);
        }}
      >
        Add Item
      </div>
    );
}

import { getNestedValue, updateAttributesData } from "./Libs";
import { v4 as uuidv4 } from "uuid";

export default function ButtonSlider(props) {
  const { edit, attributes, set, model, defaultItem } = props;
  const getDefault = getNestedValue(
    attributes,
    model ? `${model}.${set}` : set
  );
  let newValue = null;

  if (getDefault) newValue = getDefault[0];

  // Create new item
  if (!getDefault && defaultItem) newValue = defaultItem;

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

import { transformJson } from "../helper/Libs";
import { v4 as uuidv4 } from "uuid";
export const ArraySchema = (items, total = -1) => {
  const itemsList = [];

  if (total > 0) {
    for (let i = 0; i < total; i++) {
      items.id = uuidv4();
      itemsList.push(transformJson(items));
    }

    return {
      type: "array",
      default: itemsList,
    };
  }

  const newItems = transformJson(items);
  for (const key in newItems) {
    if (newItems.hasOwnProperty(key)) {
      itemsList.push(newItems[key]);
    }
  }

  return {
    type: "array",
    default: itemsList,
  };
};

import { TextSchema, TextSchemaEmpty } from "../Schema/text";

export const createAttributes = (attr) => {
  return {
    section_class: TextSchemaEmpty,
    disabled: {
      type: Boolean,
      default: false,
    },
    ...attr,
  };
};

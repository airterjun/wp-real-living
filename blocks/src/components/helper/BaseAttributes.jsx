import { TextSchema } from "../Schema/text";

export const createAttributes = (attr) => {
  return {
    section_class: TextSchema,
    disabled: {
      type: Boolean,
      default: false,
    },
    ...attr,
  };
};

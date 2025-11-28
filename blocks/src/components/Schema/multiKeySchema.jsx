import { ArraySchema } from "./array";
import { ImageSchema } from "./image";
import { ObjectSchema } from "./object";
import { TextSchema } from "./text";

export const MultiDeviceSchema = (id, type, opt = []) => {
  const types = {
    text: TextSchema,
    image: ImageSchema,
    array: ArraySchema(...opt),
    object: ObjectSchema(...opt),
  };

  const mobileSchema = `${id}Mobile`;
  return {
    [id]: types[type],
    [mobileSchema]: types[type],
  };
};

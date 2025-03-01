import { transformJson } from "../helper/Libs"

export const ObjectSchema = (object) => {
    return {
        type: 'object',
        default: transformJson(object)

    }
}

import { transformJson } from "../helper/Libs"

export const ArraySchema = (items) => {
    const itemsList = []
    const newItems = transformJson(items)
    for (const key in newItems) {
        if (newItems.hasOwnProperty(key)) {
            itemsList.push(newItems[key])
        }
    }

    return {
        type: 'array',
        default: itemsList
    }
}
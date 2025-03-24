
/**
 * @param path {String}
 * @return string
 */
export const getBaseModelPath = (path) => {
    let base = path
    if (path.includes('.')) {
        const paths = path.split('.')
        base = _.first(paths)
    }
    return base
}

export const getModel = (path) => {
    let base = path
    if (path.includes('.')) {
        const paths = path.split('.')
        base = _.last(paths)
    }
    return base
}


export const sanitizeInput = (input) => {
    // Basic client-side sanitization example
    return input.replace(/[^a-zA-Z0-9 -]/g, '');
}



export const getModelValue = (model, props) => {
    const id = props.model ? `${props.model}.${model}` : model
    return getNestedValue(props.attributes, id)
}

export const getModelId = (id, props) => {
    return props.model ? `${props.model}.${id}` : id
}

export function transformJson(obj) {
    const result = {};

    // Loop untuk setiap key di object root
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            // Jika value adalah objek dan bukan null
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                if (Array.isArray(obj[key])) {
                    // Jika value adalah array, periksa setiap elemen dalam array
                    result[key] = obj[key].map(item => {
                        if (typeof item === 'object' && item !== null) {
                            // Cek jika item memiliki pola { type, default }
                            for (const innerKey in item) {
                                if (item.hasOwnProperty(innerKey)) {
                                    const innerValue = item[innerKey];
                                    if (typeof innerValue === 'object' && innerValue !== null) {
                                        if ('type' in innerValue && 'default' in innerValue) {
                                            // Ambil nilai default dan ubah key-nya sesuai
                                            item[innerKey] = innerValue.default;
                                        }
                                    }
                                }
                            }
                            return item; // Kembalikan item yang sudah diproses
                        }
                        return item; // Kalau bukan objek, langsung kembalikan item
                    });
                } else if ('type' in obj[key] && 'default' in obj[key]) {
                    // Ambil nilai default jika ditemukan dalam objek
                    result[key] = obj[key].default;
                } else {
                    // Kalau bukan pattern { type, default }, rekursif ke dalam objek
                    result[key] = transformJson(obj[key]);
                }
            } else {
                // Kalau value-nya bukan objek, simpan saja
                result[key] = obj[key];
            }
        }
    }

    return result;
}





// Helper function to get nested properties from an object
export const getNestedValue = (obj, path) => {
    const keys = path.split('.');
    let current = obj;

    for (let key of keys) {
        if (current && typeof current === 'object' && key in current) {
            current = current[key];
        } else {
            return undefined; // Return undefined if the path doesn't exist
        }
    }
    return current;
};

// Helper function to set nested properties in an object
export const setNestedValue = (obj, path, value) => {
    const keys = path.split('.');
    let current = obj;

    // Traverse the object to the second-to-last key
    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (!current[key]) {
            current[key] = {};
        }
        current = current[key];
    }

    // Set the value at the final key
    current[keys[keys.length - 1]] = value;
    return obj;
};



export const getMobileDescription = (props, originalText, mobileText) => {
    const mobileModel = props.model ? `${props.model}.${mobileText}` : mobileText
    const desktopModel = props.model ? `${props.model}.${originalText}` : originalText


    if (getNestedValue(props.attributes, mobileModel))
        return getNestedValue(props.attributes, mobileModel)

    return getNestedValue(props.attributes, desktopModel)


}
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

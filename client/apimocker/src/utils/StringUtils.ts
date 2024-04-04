const convertObjectToString = (obj: any, indent = 0): any => {
    const indentation = ' '.repeat(indent);

    if (Array.isArray(obj)) {
        const formattedArray: any = obj.map(item => {
            if (typeof item === 'object') {
                return `${convertObjectToString(item, indent + 2)}`;
            } else {
                return JSON.stringify(item);
            }
        }).join(',\n' + ' '.repeat(indent + 2));

        return `[\n${' '.repeat(indent + 2)}${formattedArray}\n${' '.repeat(indent)}]`;
    } else if (typeof obj === 'object' && obj !== null) {
        const formattedObject = Object.entries(obj).map(([key, value]) => {
            const formattedValue = typeof value === 'object' ? convertObjectToString(value, indent + 2) : JSON.stringify(value);
            return `${' '.repeat(indent + 2)}${key}: ${formattedValue}`;
        }).join(',\n');

        return `{\n${formattedObject}\n${indentation}}`;
    } else {
        return JSON.stringify(obj);
    }
}


const convertToPlainText = (message: string, values: any) => {
    for (let key in values) {
        message = message.replace(`{${key}}`, values[key])
    }

}



export { convertObjectToString, convertToPlainText }
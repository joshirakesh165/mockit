import categoryMap from "./data/categoryDataMap.js";
import { getRandomBoolean, getRandomIntegerUpto } from "./random.js";
import generateUUID from "./data/uuid.js";




let generateDataByCategory = (category) => {
    if (category && categoryMap[category]) {
        let size = Object.keys(categoryMap[category]).length;
        let randonIndex = getRandomIntegerUpto(size);
        return categoryMap[category][randonIndex] || category;
    } else {
        let dummyData = `${category} ${getRandomIntegerUpto(100)}`;
        switch(category) {
            case 'string' :
            case 'String' :    
                return dummyData
            case 'number' :
            case 'Number' :    
                return getRandomIntegerUpto(100)
            case 'date' :
            case 'Date' :    
                return new Date() ;
            case 'boolean' :
            case 'Boolean' :    
                return getRandomBoolean(); 
            default :
              return dummyData;             
        }
    }

}


const generateData =  (category) => {
    if(category && Array.isArray(category)) {
        let records = []
        for(let i=0; i < category.length; i++ ){
            let returnObj = generateData(category[i]);
            records.push(returnObj);
        }
        return records;
    } else if(category && typeof category == 'object') {
        let record = {}
        for (let key in category) {
            record[key] = generateData(category[key]);
        }
        return record;
    } else {
        return generateDataByCategory(category);
    }
}

let generateDataByCategoryAndCount = (category, count) => {
    let records = [];
    for (let i = 0; i < count; i++) {
        records.push(generateData(category))
    }
    return records;
}


let generateJSONData = (schema, count) => {
    let records = [];
    for (let i = 0; i < count; i++) {
        let record = {}
        for (let key in schema) {
            record[key] = generateData(schema[key]);
        }
        records.push(record);
    }
    return records;

}

export { generateDataByCategoryAndCount,generateJSONData }
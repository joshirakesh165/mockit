import defaultApiData from "./data"

const getAllResponse = (records: any[]) => {
    return {
        status: 'success',
        info: 'No addition info',
        data: records,
        count: 2,
    }
}
const getSingleResponse = (records: any[]) => {
    return {
        status: 'success',
        info: 'No addition info',
        data: records[0],
        count: 1,
    }
}

const getAddResponse = (record: any) => {
    return {
        status: 'success',
        info: 'Item added successfully',
        data: record,
        count: 1,
    }
}

const getUpdateResponse = (record: any) => {
    return {
        status: 'success',
        info: 'Item(s) updated successfully',
        data: record,
        count: 1,
    }
}


const getDeleteResponse = () => {
    return {
        status: 'success',
        info: 'Item(s) deleted successfully',
        data: [],
        count: 0,
    }
}

let loginUser = {
        id: "USER-001",
        email: 'andrew@gmail.com',
        username: 'johnd',
        password: 'Test@123',
        name: {
            firstname: 'John',
            lastname: 'Doe'
        },
        role: 'USER',
        phone: '91234567890',
        token:'dasda-23131-23123-dsadasd31231wdasdq-23123sdasda-213dsda131312'
}

let loginResponse = {
        status: 'success',
        info: '',
        data: loginUser,
        count: 1,
}


const generateDataForUI = () => {
    let response:any =  {};
    for (let category in defaultApiData) {
        let obj:any = {}
        defaultApiData[category].forEach(api => {
            let payload = { ...api.data[0] };
            delete payload['id'];

            let GET_ALL = {
                category: category,
                name:api.name,
                title: `Get All ${api.name}s`,
                body: null,
                url: api.name + 's',
                method: 'GET',
                description: '',
                response: getAllResponse(api.data)
            }
            let GET_SINGLE = {
                category: category,
                name:api.name,
                title: `Get ${api.name} by id`,
                body: null,
                url: api.name + 's' + `/${api.data[0].id}`,
                method: 'GET',
                description: '',
                response: getSingleResponse(api.data)
            }
            let GET_SINGLE_BY_FIeld = {
                category: category,
                name:api.name,
                title: `Get ${api.name}s by field`,
                body: null,
                url: api.name + 's' + `/id/${api.data[0].id}`,
                method: 'GET',
                description: '',
                response: getSingleResponse(api.data)
            }
            let ADD_ITEM = {
                category: category,
                name:api.name,
                title: `Add new ${api.name}`,
                body: payload,
                url: api.name,
                method: 'POST',
                description: 'Nothing will be added in database, only fake data will return after successfull API call.',
                response: getAddResponse({...payload,id:api.data[0].id})
            };
            let UPDATE_ITEM = {
                category: category,
                name:api.name,
                title: `Update ${api.name}`,
                body: payload,
                url: api.name+ `/${api.data[0].id}`,
                method: 'PUT',
                description: 'No record will be update in database, only fake data will return after successfull API call.',
                response: getUpdateResponse({...payload,id:api.data[0].id})
            };
            let DELETE_ITEM = {
                category: category,
                name:api.name,
                title: `Delete all ${api.name}s`,
                body: null,
                url: api.name,
                method: 'DELETE',
                description: 'No actual record will delete, only fake data will return after successfull API call.',
                response: getDeleteResponse()
            };
            let DELETE_ITEM_ID = {
                category: category,
                name:api.name,
                title: `Delete ${api.name} by id`,
                body: null,
                url: api.name + `/${api.data[0].id}`,
                method: 'DELETE',
                description: 'No actual record will delete, only fake data will return after successfull API call.',
                response: getDeleteResponse()
            };
            let arr = [GET_ALL, GET_SINGLE, GET_SINGLE_BY_FIeld, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, DELETE_ITEM_ID];
            obj[api.displayName]=  arr;
        });
        response[category] = {...response[category],...obj};

    }
    let AUTH = {
        category: 'Store',
        name: 'Login',
        displayName: 'Login',
        title: `Login User`,
        body: {email: loginUser.email,password:loginUser.password},
        url: 'authentication',
        method: 'POST',
        description: 'Mock user data will be return with mock token',
        response: loginResponse
    };
    response['Store']['Login'] = [AUTH];
    console.log('...new res....',response);
    return response;
}

export default generateDataForUI;

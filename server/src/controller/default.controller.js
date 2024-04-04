import products from "../mocker/data/default-data/ecom/products.js";
import users from "../mocker/data/default-data/ecom/user.js";
import carts from "../mocker/data/default-data/ecom/carts.js";
import orders from "../mocker/data/default-data/ecom/orders.js";
import { isEqual } from "../utils/utils.js";
import errorHandler from "../utils/errorHandller.js";
import responseHandler from "../utils/responseHandller.js";


const pathDataMap = {
    products,
    carts,
    users,
    orders
}


const getRecordByKey = (records, key,value) => {
    try {
        return records.find(rec => isEqual(rec?.[key], value));
    } catch {
        return errorHandler(res,error.stack,500,error.message);
    }
}

const getAllData = (req, res) => {
    try {
        let path = req.path.split('/')[1];
        let data = pathDataMap[path];
        let isLimitApplied = req.url.endsWith('?limit=', req.url.length - 1);
        let limit = req.url[req.url.length - 1];
        data = isLimitApplied && !isNaN(limit) ? data.slice(0, limit) : data;
        return responseHandler(res, data);
    } catch (error) {
        return errorHandler(res,error.stack,500,error.message);
    }
}



const getDataById = (req, res) => {
    try {
        let path = req.path.split('/')[1];
        let data = getRecordByKey(pathDataMap[path], 'id', req.params.id)
        if (!data) {
            return errorHandler(res,`No record exist with id ${req.params.id}`,404,`No record exist with id ${req.params.id}`);
        }
        return responseHandler(res, data);
    } catch (error) {
        return errorHandler(res,error.stack,500,error.message);

    }
}

const getDataByKey = (req, res) => {
    try {
        let path = req.path.split('/')[1];
        let data = getRecordByKey(pathDataMap[path], req.params.key, req.params.value)
        if (!data) {
            return errorHandler(res,`No record exist with ${req.params.key} ${req.params.value}`,404,`No record exist with ${req.params.key} ${req.params.value}`);
        }
        return responseHandler(res, data);
    } catch (error) {
        return errorHandler(res,error.stack,500,error.message);
    }
}

const addData = (req, res) => {
    try {
        if (!req.body) {
            return errorHandler(res,`request body is required`,400,`request body is required`);
        }
        return responseHandler(res, req.body, 201, 'Record addded successfully');
    } catch(error) {
        return errorHandler(res,error.stack,500,error.message);
    }
}

const editData = (req, res) => {
    try {
        if (!req.body) {
            return errorHandler(res,`request body is required`,400,`request body is required`);
        }
        return responseHandler(res, req.body, 201, 'Record modified successfully');  
    } catch (error) {
        return errorHandler(res,error.stack,500,error.message);   
    }
}

const deleteAllData = (req, res) => {
    try {
        return responseHandler(res, [], 201, 'Record(s) deleted successfully');        
    } catch (error) {
        return errorHandler(res,error.stack,500,error.message);   
    }
}

const deleteDataById = (req, res) => {
    try {
        let path = req.path.split('/')[1];
        let data = getRecordById(pathDataMap[path], req.params.id);
        if (!data) {
            return errorHandler(res,`No record exist with id ${req.params.id}`,404,`No record exist with id ${req.params.id}`);

        }
        return responseHandler(res, data, 201, 'Record deleted successfully');
    } catch (error) {
        return errorHandler(res,error.stack,500,error.message);   
    }
}

const getUserByEmailAndPassword = (req, res) => {
    try {
        if (!req.body) {
            return errorHandler(res,`request body is required`,400,`request body is required`);
        }

        let user = users.find(user => user.email == req.body.email)
        if (!user) {
            return errorHandler(res,`User does not exist with email ${req.body.email}`,404,`User does not exist with email ${req.body.email}`);
        }
        let data = users.find(user => user.email == req.body.email && user.password == req.body.password)
        if (!data) {
            return errorHandler(res,`Email Id or password does not match`,404,`Email Id or password does not match`);
        }
        return responseHandler(res, data);
    } catch (error) {
        return errorHandler(res,error.stack,500,error.message);

    }
}

export {
    getAllData,
    getDataById,
    addData,
    editData,
    deleteAllData,
    deleteDataById,
    getDataByKey,
    getUserByEmailAndPassword
}
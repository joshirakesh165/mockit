
const getCount =(data) => {
    if(!data) return 0;
    else if (Array.isArray(data)) return data.length;
    else if(typeof data == 'object') return 1;
    return 0;
}

const responseHandler = (res,data,status,info) => {
    let responseObj = {
        status: status ||  'success',
        info: info || 'No addition info',
        data : data,
        count : getCount(data),
    }
    res.status(status || 200).send(responseObj);

}
export default responseHandler;
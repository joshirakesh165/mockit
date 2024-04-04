const errorHandler = (res,data,status,info) => {
    let responseObj = {
        status: status ||  'failed',
        info: info || 'Something Went wrong',
        stack : data
    }
    res.status(status || 500).send(responseObj);

}
export default errorHandler;
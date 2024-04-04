import { Router } from "express";
import * as controller from "../controller/default.controller.js";
let defaultRouter = Router();


// define routes dynamically

let defaultRoutes = ["products", "carts", "users", "orders"];

defaultRoutes.forEach(r => {
    // all data
    defaultRouter.get(`/${r}`, controller.getAllData);
    defaultRouter.get(`/${r}/:id`, controller.getDataById);
    defaultRouter.get(`/${r}/:key/:value`, controller.getDataByKey);


    // add new data  
    defaultRouter.post(`/${r}`, controller.addData);

    // modify data
    defaultRouter.put(`/${r}/:id`, controller.editData);
    defaultRouter.patch(`/${r}/:id`, controller.editData);

    // delete data
    defaultRouter.delete(`/${r}/:id`, controller.deleteDataById);
    defaultRouter.delete(`/${r}`, controller.deleteAllData);

   
});
defaultRouter.post(`/authentication`, controller.getUserByEmailAndPassword);

export default defaultRouter; 
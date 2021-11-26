import { Router } from "express";
import otherController from "../controllers/otherController";

class OtherRoutes{
    router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', otherController.index);
    }
}

const otherRoutes = new OtherRoutes();
export default otherRoutes.router;
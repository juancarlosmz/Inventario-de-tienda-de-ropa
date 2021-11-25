import { Router } from "express";

class OtherRoutes{
    router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', (req, res) => res.send('Other'));
    }
}

const otherRoutes = new OtherRoutes();
export default otherRoutes.router;
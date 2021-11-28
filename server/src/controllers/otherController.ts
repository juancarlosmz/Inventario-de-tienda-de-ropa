import {Request, Response} from 'express';
import pool from '../database';

class OtherController{
    public index (req: Request, res: Response) {
        pool.query('DESCRIBE Productos');
        res.json('productos');
        //res.send('Other');
    } 
}

const otherController = new OtherController();
export default otherController;
import {Request, Response} from 'express';
import pool from '../database';

class OtherController{
    public index (req: Request, res: Response) {
        pool.query('SELECT * FROM Productos');
        //res.send('Other');
    } 
}

const otherController = new OtherController();
export default otherController;
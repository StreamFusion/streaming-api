import {Request, Response} from "express";
import connection from "../database/database";

export class UserController {

    public getUsers(__: Request, res: Response) {
        const result = connection.then((pool) => {
            return pool.query('SELECT * FROM users')
        }).catch((err) => {
            console.log(err);
            res.json({
                message: 'Error in query',
                status: 500,
                result: 'Internal Server Error',
                error: err
            });
        });

        res.json(result);
    }


}
import { Request, Response } from 'express'
import { insertClass } from '../data/insertClass'

export const createClass = async (req: Request, res: Response): Promise <void> => {
    try {
        if (req.body.module < 1 || req.body.module > 7) {
            res.statusCode = 422
            throw new Error(`"module" must be between 1 and 7`)
        }

        await insertClass(
            req.body.id,
            req.body.name,
            req.body.start_date,
            req.body.end_date,
            req.body.module
        );

        res.status(200).send(`Class ${req.body.name} created`);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
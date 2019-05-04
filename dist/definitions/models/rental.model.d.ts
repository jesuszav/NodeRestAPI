import { Request, Response, NextFunction } from 'express';
export declare class Rental {
    _model: any;
    constructor(norm: any);
    getAllRentals(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getRentalById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}

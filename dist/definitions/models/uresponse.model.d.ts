import { Request, Response, NextFunction } from 'express';
export declare class Uresponses {
    _model: any;
    constructor(norm: any);
    getAllUresponses(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getUresponsesById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createUresponse(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}

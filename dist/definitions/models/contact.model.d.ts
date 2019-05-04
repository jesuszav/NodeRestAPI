import { Request, Response, NextFunction } from 'express';
export declare class Contact {
    _model: any;
    constructor(norm: any);
    getAllContacts(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getContactById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}

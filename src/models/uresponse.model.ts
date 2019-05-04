import { Request, Response, NextFunction } from 'express'
export class Uresponses {
  _model: any;
  constructor(norm: any) {
    this.model = [{
      id: { type: Number, key: 'primary' },
      fullName: { type: String, maxlength: 24 },
      email: { type: String, maxlength: 250 },
      comment: { type: String, maxlength: 250 },









    },
      'A table to store comment from user model',
    [
      {
        route: '/get-all-uresponses',
        method: 'POST',
        callback: this.getAllUresponses,
        requireToken: true,
      },
      {
        route: '/get-uresponses-by-id/:id',
        method: 'POST',
        callback: this.getUresponsesById,
        requireToken: true,
      },
      {
        route: '/create-ureponse',
        method: 'POST ',
        callback: this.createUresponse,
        requireToken: true,
      }
    ]];
  }
  getAllUresponses(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
        get: ['*']
      }
      let uresponseCtrl = model.controller;
      let resp = await uresponseCtrl.get(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  getUresponsesById(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
        get: ['*'],
        where: {
          id: req.params.id
        }
      }
      let uresponsesCtrl = model.controller;
      let resp = await uresponsesCtrl.get(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  createUresponse(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
        let uresponseCtrl = model.controller;
        let resp = await uresponseCtrl.insert(req, null, null);
        res.json({ message: 'Success', resp });
    }
}
updateUresponse(model: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
    let uresponseCtrl = model.controller;
    let resp = await uresponseCtrl.update(req, null, null);
    res.json({ message: 'Success', resp });
  }
}

  set model(model: any) {
    this._model = model;
  }

  get model() {
    return this._model;
  }

}
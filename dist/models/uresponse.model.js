"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Uresponses {
    constructor(norm) {
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
                },
                {
                    route: '/delete-uresponse/id/:id',
                    method: 'DELETE',
                    callback: this.deleteUresponse,
                    requireToken: true,
                }
            ]];
    }
    getAllUresponses(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*']
            };
            let uresponseCtrl = model.controller;
            let resp = yield uresponseCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getUresponsesById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            };
            let uresponsesCtrl = model.controller;
            let resp = yield uresponsesCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    createUresponse(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let uresponseCtrl = model.controller;
            let resp = yield uresponseCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    updateUresponse(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let uresponseCtrl = model.controller;
            let resp = yield uresponseCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    deleteUresponse(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let uresponseCtrl = model.controller;
            let resp = yield uresponseCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Uresponses = Uresponses;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rental {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                location: { type: String, maxlength: 24 },
                rules: { type: String, maxlength: 250 },
                description: { type: String, maxlength: 250 },
                cancellations: { type: String, maxlength: 250 },
                image: { type: String, maxlength: 1000 },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
<<<<<<< Updated upstream
            }, 'A table to store users rental model', []];
=======
            }, 'A table to store users rental model',
            [
                {
                    route: '/get-all-rentals',
                    method: 'POST',
                    callback: this.getAllRentals,
                    requireToken: true,
                },
                {
                    route: '/get-rental-by-id/:id',
                    method: 'POST',
                    callback: this.getRentalById,
                    requireToken: true,
                },
                {
                    route: '/create-rental',
                    method: 'POST',
                    callback: this.createRental,
                    requireToken: true,
                }
            ]];
    }
    getAllRentals(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*']
            };
            let rentalCtrl = model.controller;
            let resp = yield rentalCtrl.get(req, null, null);
            res.json({ message: 'Sucess', resp });
        });
    }
    getRentalById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            };
            let rentalCtrl = model.controller;
            let resp = yield rentalCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
>>>>>>> Stashed changes
    }
    createRental(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let rentalCtrl = model.controller;
            let resp = yield rentalCtrl.insert(req, null, null);
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
exports.Rental = Rental;

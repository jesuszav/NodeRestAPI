"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rentee {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                fullName: { type: String, maxlength: 24 },
                email: { type: String, maxlength: 250 },
                username: { type: String, maxlength: 250 },
            }, 'A table to store users rentee model', []];
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Rentee = Rentee;

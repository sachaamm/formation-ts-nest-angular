"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZooRepository = void 0;
class ZooRepository {
    constructor() {
        this.animaux = new Map();
    }
    add(nom, animal) {
        this.animaux.set(nom, animal);
    }
    get(nom) {
        return this.animaux.get(nom);
    }
    getAll() {
        return Array.from(this.animaux.values());
    }
    remove(nom) {
        return this.animaux.delete(nom);
    }
}
exports.ZooRepository = ZooRepository;

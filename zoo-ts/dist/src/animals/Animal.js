"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    crier() {
        console.log(`${this.nom} pousse un cri`);
    }
}
exports.Animal = Animal;

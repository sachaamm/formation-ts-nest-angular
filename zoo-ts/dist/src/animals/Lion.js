"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lion = void 0;
const Animal_1 = require("./Animal");
class Lion extends Animal_1.Animal {
    crier() {
        console.log(`${this.nom} rugit 🦁 !`);
    }
}
exports.Lion = Lion;

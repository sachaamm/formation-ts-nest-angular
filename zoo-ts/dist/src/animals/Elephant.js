"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elephant = void 0;
const Animal_1 = require("./Animal");
class Elephant extends Animal_1.Animal {
    crier() {
        console.log(`${this.nom} barrit 🐘 !`);
    }
}
exports.Elephant = Elephant;

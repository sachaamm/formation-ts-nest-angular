"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Lion_1 = require("./animals/Lion");
const Elephant_1 = require("./animals/Elephant");
const ZooRepository_1 = require("./services/ZooRepository");
const Nourisseur_1 = require("./services/Nourisseur");
const zoo = new ZooRepository_1.ZooRepository();
zoo.add("simba", new Lion_1.Lion("Simba", 5));
zoo.add("dumbo", new Elephant_1.Elephant("Dumbo", 10));
const tousLesAnimaux = zoo.getAll();
tousLesAnimaux.forEach((animal) => animal.crier());
const nourrisseur = new Nourisseur_1.Nourrisseur();
tousLesAnimaux.forEach((animal) => {
    if ("nourrir" in animal) {
        nourrisseur.nourrir(animal);
    }
});

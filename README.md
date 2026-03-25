# Formation TypeScript / NestJS / Angular

Projet de formation fullstack autour de la gestion d'un zoo pour les étudiants de 2ème année de l'ESGI. 
Le parcours de formation complet est disponible ici :
[Notion - TypeScript / NestJS / Angular](https://www.notion.so/Typescript-NestJs-Angular-21c4d2c7e08d80a8b384d439c6383499)

## Structure du projet

```
formation-ts-nest-angular/
├── zoo-ts/           # Exercices TypeScript (POO, génériques, interfaces)
├── zoo-backend/      # API REST NestJS (CRUD, Auth0, Swagger)
└── zoo-frontend/     # SPA Angular 19 (Material, Auth0)
```

---

## zoo-ts — Initiation TypeScript

Projet éducatif en TypeScript pur pour découvrir la POO, les génériques et les interfaces.

**Contenu :**

- **Classes** : `Animal` (classe de base), `Lion`, `Elephant` — héritage et surcharge de méthodes
- **Interfaces** : `Nourrissable`, `Soignable`
- **Services** : `ZooRepository<T>` (repository générique avec `Map`), `Nourisseur`

**Lancer le projet :**

```bash
cd zoo-ts
npm install
npm run zoo-ts
```

---

## zoo-backend — API REST NestJS

API backend pour la gestion des animaux du zoo, avec authentification JWT et documentation Swagger.

**Stack technique :**

- NestJS 11
- PostgreSQL + TypeORM
- Authentification Auth0 (JWT / JWKS)
- Swagger / OpenAPI
- class-validator pour la validation des DTOs

**Modules :**

| Module | Description |
|--------|-------------|
| `AnimauxModule` | CRUD complet sur les animaux (création, liste, recherche par nom, suppression) |
| `AuthModule` | Validation JWT via Auth0, garde de rôles (`veterinaire`, `gardien`) |

**Endpoints principaux :**

| Méthode | Route | Auth | Description |
|---------|-------|------|-------------|
| `POST` | `/animaux` | Non | Créer un animal |
| `GET` | `/animaux` | Non | Lister tous les animaux |
| `GET` | `/animaux/:id` | Oui (JWT + rôles) | Obtenir un animal par ID |
| `GET` | `/animaux/search/name?name=...` | Non | Rechercher par nom |
| `DELETE` | `/animaux/:id` | Non | Supprimer un animal |

**Entité Animal :**

| Champ | Type | Description |
|-------|------|-------------|
| `id` | number | Auto-généré |
| `name` | string | Nom (3 à 20 caractères) |
| `species` | string | Espèce |
| `health` | number | Santé (défaut : 100) |

**Variables d'environnement requises :**

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=motdepasse
DB_DATABASE=zoo
PORT=3000
```

**Lancer le projet :**

```bash
cd zoo-backend
npm install
npm run start:dev
```

Documentation Swagger disponible sur : `http://localhost:3000/api`

---

## zoo-frontend — SPA Angular

Application Angular 19 avec Angular Material et intégration Auth0.

**Stack technique :**

- Angular 19 (composants standalone)
- Angular Material (thème Azure Blue)
- Auth0 Angular SDK
- Formulaires réactifs
- Client OpenAPI auto-généré depuis le backend

**Fonctionnalités :**

- Authentification via Auth0 (login / logout)
- Liste des animaux sous forme de tableau Material
- Ajout d'un animal via une boîte de dialogue (dialog)
- Suppression d'un animal
- Appels API sécurisés avec token Bearer

**Pages et composants :**

| Composant | Route | Description |
|-----------|-------|-------------|
| `ListeAnimauxComponent` | `/liste` | Tableau des animaux avec actions (ajout, suppression) |
| `AjoutAnimalDialogComponent` | — | Dialog de création avec formulaire validé |

**Lancer le projet :**

```bash
cd zoo-frontend
npm install
ng serve
```

Application disponible sur : `http://localhost:4200`

---

## Lancer l'ensemble

1. Démarrer PostgreSQL et créer la base `zoo`
2. Configurer les variables d'environnement du backend
3. Lancer le backend : `cd zoo-backend && npm run start:dev`
4. Lancer le frontend : `cd zoo-frontend && ng serve`
5. Ouvrir `http://localhost:4200` dans le navigateur

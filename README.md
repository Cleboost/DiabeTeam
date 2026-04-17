<div align="center">
  <img src="public/logo.png" alt="DiabeTeam Logo" width="150" />
  
  <h1>DiabeTeam</h1>
  
  <p>Le site officiel de l'association DiabeTeam.</p>

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/React_Router_7-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
    <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white" alt="Bun" />
    <img src="https://img.shields.io/badge/Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Cloudflare" />
  </p>
</div>

## 🛠 Stack Technique

- **Framework** : [React Router v7](https://reactrouter.com/) avec [React 19](https://react.dev/)
- **Style** : [Tailwind CSS v4](https://tailwindcss.com/)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Package Manager** : [Bun](https://bun.sh/)
- **Qualité de code** : [Biome](https://biomejs.dev/) (Linter & Formatter) et [Knip](https://knip.dev/) (Analyse statique)
- **Déploiement** : [Cloudflare Pages](https://pages.cloudflare.com/) (via Wrangler)
- **CI/CD** : GitHub Actions

## 🚀 Démarrage Rapide

### Prérequis

Assurez-vous d'avoir [Bun](https://bun.sh/) installé sur votre machine.

### Installation

Clonez le dépôt et installez les dépendances :

```bash
bun install
```

### Développement

Lancez le serveur de développement local avec Hot Module Replacement (HMR) :

```bash
bun run dev
```

L'application sera accessible sur `http://localhost:5173`.

## 📦 Scripts Disponibles

Voici les commandes principales définies dans le `package.json` :

- `bun run dev` : Démarre le serveur de développement.
- `bun run build` : Construit l'application optimisée pour la production.
- `bun run typecheck` : Vérifie les types TypeScript du projet.
- `bun run deploy` : Construit et déploie l'application sur Cloudflare Pages.
- `bunx biome check` : Vérifie le formatage et le linting du code.
- `bunx knip` : Détecte les fichiers, dépendances et exports inutilisés.

## 📂 Structure du projet

```text
/
├── app/               # Code source principal (composants, routes, logique)
│   ├── components/    # Composants réutilisables (UI)
│   ├── data/          # Fichiers de données (JSON)
│   ├── routes/        # Pages de l'application (basées sur les fichiers)
│   └── utils/         # Fonctions utilitaires
├── public/            # Fichiers statiques (images de la galerie, logos, favicon)
├── scripts/           # Scripts utilitaires (ex: génération de données)
├── .github/           # Configuration des actions et dépendances GitHub
└── .wrangler/         # Configuration et état local de Cloudflare Wrangler
```

---

<div align="center">
  Développé avec ❤️ par Cleboost
</div>

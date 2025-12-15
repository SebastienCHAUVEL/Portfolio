export interface IProject {
  id: number,
  image: string,
  title: string,
  description: string,
  demo: string,
  github: string,
}

export const projects: IProject[] = [
  {
  id: 1,
  image: 'ochat_demo',
  title: 'ochat',
  description: `**Ochat** est une application web fullstack de chat avec intelligence artificielle, basée sur l'API **Mistral**. Le projet reproduit une expérience de discussion fluide et moderne, similaire aux outils de chat IA professionnels.

      ##### Objectifs

      - Développer une application fullstack complète
      - Mettre en place une authentification sécurisée
      - Gérer des conversations persistantes
      - Intégrer une API d'IA via un backend dédié

      ##### Fonctionnalités principales

      - Chat en temps réel avec rendu Markdown
      - Création et gestion des conversations
      - Génération automatique du titre des discussions
      - Inscription, connexion et mode invité
      - Interface responsive avec navigation latérale

      ##### Stack technique

      - **Frontend :** Svelte, CSS, Iconify, Markdown  
      - **Backend :** Node.js, Express, TypeScript, PostgreSQL  
      - **Sécurité :** JWT, argon2, Zod, Helmet, CORS

      Ce projet met en avant ma capacité à concevoir une architecture maintenable, sécurisée et orientée utilisateur, tout en intégrant des services d'intelligence artificielle dans un contexte réel.`,
    demo: 'https://ochat-front.vercel.app/',
    github: 'https://github.com/SebastienCHAUVEL/ochat-front',
  },
  {
    id: 2,
    image: 'pokedex_demo',
    title: 'pokedex',
    description: `**Pokedex** est une API REST dédiée à la gestion de pokémons, réalisée de bout en bout depuis la phase de conception jusqu’à la mise en production. Le projet suit une **roadmap structurée** sous forme de user stories et met l’accent sur les bonnes pratiques backend, la sécurité et la documentation.

      ##### Objectifs

      - Concevoir une API REST complète et maintenable
      - Modéliser une base de données relationnelle
      - Sécuriser l’accès à l’API via authentification
      - Documenter l’API pour faciliter son utilisation
      - Déployer une application backend en production

      ##### Fonctionnalités principales

      - Gestion CRUD des pokémons
      - Authentification via JWT
      - Validation stricte des données entrantes
      - Hashage sécurisé des mots de passe
      - Documentation interactive de l’API avec Swagger
      - Environnement de développement containerisé avec Docker

      ##### Stack technique

      - **Backend :** Node.js, Express  
      - **Base de données :** PostgreSQL  
      - **ORM :** Sequelize  
      - **Sécurité :** JWT, argon2  
      - **Validation :** Joi  
      - **Documentation :** Swagger  
      - **Déploiement :** Railway  
      - **DevOps :** Docker, Docker Compose  

      Ce projet met en avant ma capacité à concevoir une API robuste et sécurisée, à structurer un projet backend professionnel et à assurer sa mise en production avec une documentation claire et exploitable.`,
    demo: 'https://pokedex-production-399e.up.railway.app/api/docs/',
    github: 'https://github.com/SebastienCHAUVEL/POKEDEX',
  },
  {
    id: 3,
    image: 'hero_league_demo',
    title: 'hero league',
    description: `**Heros League** est un site web statique **responsive** conçu pour une agence fictive de super-héros. Le projet met l’accent sur l’intégration fidèle de maquettes et sur la maîtrise avancée de **HTML5** et **CSS3** afin de proposer une expérience utilisateur fluide, interactive et visuellement impactante.

      ##### Objectifs

      - Intégrer fidèlement des maquettes desktop, tablette et mobile
      - Concevoir une navigation fluide via des ancres
      - Mettre en place des animations et effets interactifs
      - Assurer une adaptabilité parfaite à toutes les tailles d’écran
      - Améliorer l’accessibilité et la lisibilité de l’interface

      ##### Fonctionnalités principales

      - Site 100 % responsive (desktop, tablette, mobile)
      - Menu collant lors du scroll
      - Animations et effets de survol (héros, boutons, navigation)
      - Apparition de contenus au survol des cartes héros
      - Gestion du focus des champs pour une meilleure accessibilité
      - Utilisation d’une police personnalisée (Satoshi)

      ##### Stack technique

      - **Langages :** HTML5, CSS3  
      - **Mise en page :** Flexbox, Grid  
      - **Responsive :** Media Queries  
      - **UI / UX :** Animations, transitions, effets de survol  
      - **Maintenance :** Variables CSS  

      Ce projet démontre ma capacité à transformer une maquette graphique en une interface web moderne, responsive et accessible, tout en respectant des contraintes précises de design et d’interaction.`,
    demo: 'https://sebastienchauvel.github.io/HEROES-LEAGUE/',
    github: 'https://github.com/SebastienCHAUVEL/HEROES-LEAGUE',
  },
  {
    id: 4,
    image: 'trip_odvisor_demo',
    title: 'trip odvisor',
    description: `**Trip O'dvisor** est une plateforme de conseils touristiques interactive permettant de découvrir des destinations, consulter des avis et s’inscrire à une newsletter pour recevoir des bons plans. Le projet a été réalisé en **JavaScript pur**, sans dépendance externe, en mettant l’accent sur la gestion des événements, la logique front-end et l’expérience utilisateur.

      ##### Objectifs

      - Développer des fonctionnalités interactives en JavaScript natif
      - Manipuler le DOM de manière dynamique
      - Gérer des événements utilisateurs complexes
      - Mettre en place des comportements conditionnels basés sur l’interaction et le scroll
      - Structurer un projet front-end sans framework

      ##### Fonctionnalités principales

      - Newsletter interactive avec affichage conditionnel (clic et scroll)
      - Validation des emails avec détection des domaines jetables
      - Slider dynamique avec navigation et indicateurs cliquables
      - Changement de thème (3 thèmes + mode sombre)
      - Filtrage des avis par nombre d’étoiles en temps réel
      - Navigation fluide vers les sections de la page

      ##### Stack technique

      - **Langages :** HTML5, CSS3, JavaScript (ES6+)  
      - **Front-end :** Manipulation du DOM, gestion des événements  
      - **UI / UX :** Thèmes dynamiques, animations CSS  
      - **Outils :** Git, GitHub  

      Ce projet met en avant ma maîtrise du JavaScript vanilla pour créer des interfaces interactives, dynamiques et performantes, tout en respectant un cahier des charges précis et orienté utilisateur.`,
    demo: 'https://o-clock-dublin.github.io/SA05E04-challenge-tripodvisor-SebastienCHAUVEL/',
    github: 'https://github.com/SebastienCHAUVEL/TRIPODVISOR',
  },
  {
    id: 5,
    image: 'invader_demo',
    title: 'invader',
    description: `**Invader** est une application web interactive de création de **pixel art**, inspirée de l’univers du jeu *Space Invaders*. Développé en **JavaScript pur**, le projet repose sur la génération dynamique d’une grille de pixels via la manipulation du **DOM**, permettant à l’utilisateur de dessiner et personnaliser ses créations en temps réel.

    ##### Objectifs

    - Générer dynamiquement une grille de pixels configurable
    - Manipuler le DOM à l’aide de boucles et d’événements
    - Permettre l’interaction utilisateur par le clic
    - Implémenter des options de personnalisation visuelle
    - Structurer une logique front-end sans framework

    ##### Fonctionnalités principales

    - Génération dynamique d’une grille de pixels (8x8 par défaut)
    - Coloration des pixels au clic avec alternance de couleurs
    - Formulaire de configuration (taille de la grille et des pixels)
    - Validation des données saisies par l’utilisateur
    - Palette de couleurs avec plusieurs styles visuels
    - Mise en évidence de la couleur sélectionnée

    ##### Stack technique

    - **Langages :** HTML5, CSS3, JavaScript (ES6+)  
    - **Front-end :** Manipulation du DOM, gestion des événements  
    - **UI :** Grille interactive, styles dynamiques  
    - **Maintenance :** Variables CSS  

    Ce projet met en avant ma capacité à créer des applications interactives en JavaScript vanilla, à structurer une logique dynamique autour du DOM et à proposer une expérience ludique et personnalisable pour l’utilisateur.`,
    demo: 'https://sebastienchauvel.github.io/INVADER/',
    github: 'https://github.com/SebastienCHAUVEL/INVADER',
  },
  {
    id: 6,
    image: 'casse_brique_demo',
    title: 'casse brique 2d',
    description: `Ce projet est une implémentation d’un **jeu de casse-briques 2D** développé en **JavaScript pur**, sans dépendance externe. Le rendu graphique repose sur l’API **HTML5 Canvas**, tandis que la logique du jeu met en œuvre des concepts fondamentaux tels que les boucles d’animation, la gestion des collisions et les événements clavier. Le projet a été réalisé en suivant le tutoriel officiel de la documentation **MDN**.

      ##### Objectifs

      - Comprendre et utiliser l’API Canvas pour le rendu graphique
      - Implémenter une boucle de jeu performante
      - Gérer les collisions entre les différents éléments du jeu
      - Manipuler les entrées clavier en temps réel
      - Structurer une logique de jeu claire et maintenable

      ##### Fonctionnalités principales

      - Déplacement de la raquette via les touches directionnelles
      - Rebond de la balle sur les murs, la raquette et les briques
      - Détection des collisions balle / briques
      - Gestion des conditions de défaite (Game Over)
      - Animations fluides avec \`requestAnimationFrame\`
      - Canvas adaptatif à différentes tailles d’écran

      ##### Stack technique

      - **Langages :** HTML5, CSS, JavaScript (ES6+)  
      - **Rendu graphique :** API Canvas 2D  
      - **Logique :** Boucle de jeu, gestion des collisions  
      - **Entrées utilisateur :** Événements clavier  

      Ce projet illustre ma capacité à développer un jeu 2D en JavaScript vanilla, à exploiter l’API Canvas et à structurer une logique interactive performante, tout en respectant les bonnes pratiques recommandées par la documentation MDN.`,
    demo: 'https://sebastienchauvel.github.io/CASSE-BRIQUE-2D/',
    github: 'https://github.com/SebastienCHAUVEL/CASSE-BRIQUE-2D',
  },
]
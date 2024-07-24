import SmartexpoProjet from "../../public/projets/smartexpo.png";
import PixelProjet from "../../public/projets/pixel.png";
import FoodeatProjet from "../../public/projets/foodeat.png";
import KeywatchProjet from "../../public/projets/keywatch.png";

const projets = [
  {
    id: "smartexpo",
    title: "Smartexpo",
    description: "Exposition des modèles de smartphones. Projet académique L3 CDA.",
    type: "Application Web",
    skills: ["HTML", "CSS", "PHP", "CodeIgniter", "Bootstrap", "SQL"],
    image: SmartexpoProjet,
    projectLink: "",
    sourceLink: "https://github.com/lchaboissier/smartexpo",
  },
  {
    id: "pixel",
    title: "Pixel",
    description: "Site Web regroupant l'ensemble des jeux-vidéos. Projet académique LP AMIO.",
    type: "Application Web",
    skills: ["HTML", "CSS", "PHP", "Symfony", "SQL", "Docker"],
    image: PixelProjet,
    projectLink: "",
    sourceLink: "https://github.com/lchaboissier/Pixel",
  },
  {
    id: "foodeat",
    title: "Foodeat",
    description: "Application mobile regroupant la liste des recettes de cuisine à l'aide d'une API. Projet académique LP AMIO.",
    type: "Application Mobile",
    skills: ["Swift", "API"],
    image: FoodeatProjet,
    projectLink: "",
    sourceLink: "https://github.com/lchaboissier/food_project",
  },
  {
    id: "keywatch",
    title: "Keywatch",
    description: "Application web basée sur un jeu de frappe consistant à écrire un texte le plus vite possible. Projet académique LP AMIO.",
    type: "Application Web",
    skills: ["HTML", "SCSS", "TypeScript", "Angular"],
    image: KeywatchProjet,
    projectLink: "",
    sourceLink: "https://github.com/lchaboissier/keywatch",
  },
];

export default projets;

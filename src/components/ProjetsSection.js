import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import SmartexpoProjet from "../../public/projets/smartexpo.png";
import PixelProjet from "../../public/projets/pixel.png";
import FoodeatProjet from "../../public/projets/foodeat.png";
import KeywatchProjet from "../../public/projets/keywatch.png";

const projects = [
  {
    title: "Smartexpo",
    description: "Exposition des modèles de smartphones. Projet académique L3 CDA.",
    type: "Application Web",
    skills: ["HTML", "CSS", "PHP", "CodeIgniter", "Bootstrap", "SQL"],
    image: SmartexpoProjet,
    detailsLink: "",
    sourceLink: "https://github.com/lchaboissier/smartexpo",
  },
  {
    title: "Pixel",
    description: "Site Web regroupant l'ensemble des jeux-vidéos. Projet académique LP AMIO.",
    type: "Application Web",
    skills: ["HTML", "CSS", "PHP", "Symfony", "SQL", "Docker"],
    image: PixelProjet,
    detailsLink: "",
    sourceLink: "https://github.com/lchaboissier/Pixel",
  },
  {
    title: "Foodeat",
    description: "Application mobile regroupant la liste des recettes de cuisine à l'aide d'une API. Projet académique LP AMIO.",
    type: "Application Mobile",
    skills: ["Swift", "API"],
    image: FoodeatProjet,
    detailsLink: "",
    sourceLink: "https://github.com/lchaboissier/food_project",
  },
  {
    title: "Keywatch",
    description: "Application web basée sur un jeu de frappe consistant à écrire un texte le plus vite possible. Projet académique LP AMIO.",
    type: "Application Web",
    skills: ["HTML", "SCSS", "TypeScript", "Angular"],
    image: KeywatchProjet,
    detailsLink: "",
    sourceLink: "https://github.com/lchaboissier/keywatch",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projets" className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Projets</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <Image 
                src={project.image}
                alt={`Image de ${project.title}`}
                width={400}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-black mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-black-300 mb-4">{project.description}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{project.type}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, idx) => (
                    <span key={idx} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.detailsLink} className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-100 disabled">
                    Détails
                  </a>
                  <a href={project.sourceLink} className="bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-900 transition duration-100">
                    <FontAwesomeIcon icon={faGithub} />
                    <span className="ml-2">Code Source</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

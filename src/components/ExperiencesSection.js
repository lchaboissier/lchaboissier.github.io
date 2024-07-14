import React from 'react';

const experiences = [
  {
    title: "Stage - Développeur Informatique",
    company: "Addix Informatique",
    period: "Avril 2024 - Juin 2024",
    location: "Challans, France",
    tasks: [
      "Développement d'une API permettant la synchronisation de données entre deux logiciels.",
    ],
  },
  {
    title: "Intérimaire - Assembleur Monteur",
    company: "Monroc",
    period: "Juillet 2023 - Août 2023",
    location: "Saint-Étienne-du-Bois, France",
    tasks: [
      "Assemblage et montage de pièces lié aux poids lourds.",
    ],
  },
  {
    title: "Stage - Développeur Full Stack",
    company: "Cyberscope",
    period: "Mars 2023 - Juin 2023",
    location: "La Roche-sur-Yon, France",
    tasks: [
      "Développement d'une application Web BackOffice avec le framework Symfony.",
    ],
  },
  {
    title: "Intérimaire - Ouvrier agro-alimentaire",
    company: "Le Marin Vendéen",
    period: "Juin 2022 - Août 2022",
    location: "Aizenay, France",
    tasks: [
      "Fabrication de brochettes de poissons et autres produits élaborés de la mer.",
    ],
  },
  {
    title: "Stage - Développeur Web",
    company: "Cyberscope",
    period: "Janvier 2022 - Février 2022",
    location: "La Roche-sur-Yon, France",
    tasks: [
      "Développement d'une application Web BackOffice avec le framework Symfony.",
    ],
  },
  {
    title: "Intérimaire - Ouvrier agro-alimentaire",
    company: "Le Marin Vendéen",
    period: "Juillet 2021 - Août 2021",
    location: "Aizenay, France",
    tasks: [
      "Fabrication de brochettes de poissons et autres produits élaborés de la mer.",
    ],
  },
  {
    title: "Stage - Développeur Web",
    company: "Leadcode",
    period: "Mai 2021 - Juin 2021",
    location: "La Roche-sur-Yon, France",
    tasks: [
      "Développement d'une application avec le Framework AdonisJS (FrondEnd)",
      "Réalisation de tests unitaires et d'intégration"
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen flex flex-col items-center bg-white dark:bg-gray-900 p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Expériences</h2>
        <div class="flex items-center space-x-5 text-indigo-500 mb-8">                
          <div class="w-40 h-1.5 rounded-full bg-indigo-500"></div>
          <div class="w-20 h-1.5 rounded-full bg-indigo-500"></div>
        </div>
        <div className="relative border-l border-gray-400 dark:border-gray-700 pl-6">
          {experiences.map((experience, index) => (
            <div key={index} className="mb-8 ml-4">
              <div className="absolute -left-3 w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full bg-white border-4 border-indigo-500 dark:border-gray-900"></div>
              <div className="dark:bg-dark border-4 border-indigo-500 dark:bg-gray-800 shadow-md p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{experience.title}</h3>
                <h4 className="text-xl text-gray-700 dark:text-gray-300">{experience.company}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{experience.period}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4"><i className="fas fa-map-marker-alt"></i> {experience.location}</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  {experience.tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
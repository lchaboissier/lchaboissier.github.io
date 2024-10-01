import React from 'react';

const formations = [
    {
      title: "Mastère Expert en Développement Web",
      period: "Octobre 2024 - Maintenant",
      location: "Campus Ynov Nantes, Nantes (44000)",
    },
    {
      title: "Licence Informatique — Conception et Développement d'Applications",
      period: "Septembre 2023 - Juin 2024",
      location: "Université de Bretagne Occidentale, Brest (29200)",
    },
    {
      title: "Licence Professionnelle — Applications Mobiles et Internet des Objets",
      period: "Septembre 2022 - Juin 2023",
      location: "I.U.T. de Saint-Dié, Saint-Dié-des-Vosges (88100)",
    },
    {
      title: "BTS Services Informatiques aux Organisations (Option SLAM)",
      period: "Septembre 2020 - Juin 2022",
      location: "Lycée Notre-Dame du Roc, La Roche-sur-Yon (85000)",
    },
    {
      title: "BAC STI2D (Option SIN)",
      period: "Septembre 2018 - Juin 2020",
      location: "Lycée Jean de Lattre de Tassigny, La Roche-sur-Yon (85000)",
    },
];

  const FormationSection = () => {
    return (
      <section id="formations" className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
        <div className="container w-full max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Formations</h2>
          <div className="flex items-center space-x-5 text-indigo-500 mb-8">                
            <div className="w-40 h-1.5 rounded-full bg-indigo-500"></div>
            <div className="w-20 h-1.5 rounded-full bg-indigo-500"></div>
          </div>
          <p className="text-2xl font-normal text-gray-700 dark:text-gray-300 mb-4">Les formations que j&apos;ai pu suivre</p>
          <div className="relative border-l border-gray-400 dark:border-gray-700 pl-6">
            {formations.map((formation, index) => (
              <div key={index} className="mb-8 ml-4">
                <div className="absolute -left-3 w-6 h-6 bg-gray-200 dark:bg-gray-700 border-4 rounded-full bg-white border-indigo-500 dark:border-indigo-500"></div>
                <div className="border-4 border-indigo-500 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{formation.title}</h3>
                  <h4 className="text-xl text-gray-700 dark:text-gray-300">{formation.period}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{formation.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FormationSection;
  
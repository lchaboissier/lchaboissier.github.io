"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import projets from '../data/projets';

const handleDetailsClick = () => {
  alert("Le bouton Détails sera disponible prochainement !");
};

const ProjetsSection = () => {
  return (
    <section id="projets" className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Projets</h2>
        <div className="flex items-center space-x-5 text-indigo-500 mb-8">                
          <div className="w-40 h-1.5 rounded-full bg-indigo-500"></div>
        </div>
        <p className="dark:text-gray-300 text-2xl font-normal text-gray-700 mb-4">L&apos;ensemble des créations que j&apos;ai pu réaliser</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projets.map((projet, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <Image 
                src={projet.image}
                alt={`Image de ${projet.title}`}
                width={400}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="p-6 dark:bg-slate-950">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{projet.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{projet.description}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{projet.type}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projet.skills.map((skill, idx) => (
                    <span key={idx} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <button onClick={handleDetailsClick} className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-100">
                    Détails
                  </button>
                  <a href={projet.sourceLink} className="bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-900 transition duration-100">
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

export default ProjetsSection;

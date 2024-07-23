import React from "react";
import Image from 'next/image';
import ProfileImage from '../../public/images/profileImage.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const AccueilSection = () => {
  return (
    <section id="hero" className="bg-white dark:bg-slate-900 min-h-screen flex items-center justify-center p-8 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="text-left md:w-1/2 w-full">
          <h2 className="text-4xl text-gray-700 dark:text-gray-300 mb-6">Bonjour,</h2>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Je suis Luca Chaboissier 👋🏻</h1>
          
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Étudiant dans le développement Informatique
          </p>
          <div className="flex flex-wrap space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/luca-chaboissier" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-800 transition duration-100 flex items-center">
              <FontAwesomeIcon icon={faLinkedin} />
              <span className="ml-2">LinkedIn</span>
            </a>
            <a href="https://github.com/lchaboissier" target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white py-2 px-4 rounded-full hover:bg-gray-800 transition duration-100 flex items-center">
              <FontAwesomeIcon icon={faGithub} />
              <span className="ml-2">GitHub</span>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 w-full mt-8 md:mt-0 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-400 rounded-full overflow-hidden">
            <Image 
              src={ProfileImage}
              alt="Image de profil"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
  
export default AccueilSection;
  
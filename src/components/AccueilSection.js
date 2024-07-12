import React from "react";
import Image from 'next/image';
import ProfileImage from '../../public/images/profileImage.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';

const AccueilSection = () => {
  return (
  <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-8">
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      <div className="text-left md:w-1/2">
        <h2 className="text-4xl text-gray-700 dark:text-gray-300 mb-6">Bonjour,</h2>
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Je suis Luca Chaboissier 👋🏻</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Étudiant dans le développement Informatique
        </p>
        <div className="flex space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/luca-chaboissier/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-800 transition duration-100 flex items-center">
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="ml-2">LinkedIn</span>
          </a>
          <a href="https://github.com/lchaboissier" target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white py-2 px-4 rounded-full hover:bg-gray-800 transition duration-100 flex items-center">
            <FontAwesomeIcon icon={faGithub} />
            <span className="ml-2">GitHub</span>
          </a>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <div className="w-80 h-80 bg-gray-400 rounded-full overflow-hidden">
          <Image 
            src={ProfileImage}
            alt="Image de profil"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  </section>
  );
};
  
export default AccueilSection;
  
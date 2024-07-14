import Image from "next/image";

import LinkedinFile from '../../public/icones/linkedin.png';
import GitHubFile from '../../public/icones/github.png';

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <a
              href="https://www.linkedin.com/in/votre-profil-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 social-media"
            >
              <Image
                src={LinkedinFile}
                alt="Lien page Linkedin"
                width={32}
                height={32}
                className="text-gray-500 dark:text-gray-400 hover:text-current transition-colors duration-100"
              />

            </a>
            <a
              href="https://github.com/lchaboissier"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 social-media"
            >
              <Image
                src={GitHubFile}
                alt="Lien page GitHub"
                width={32}
                height={32}
                className="text-gray-500 dark:text-gray-400 hover:text-current transition-colors duration-100"
              />
            </a>
          </div>
          <p className="text-sm">&copy; 2024 Luca Chaboissier</p>
        </div>
      </footer>
    );
};

export default Footer;

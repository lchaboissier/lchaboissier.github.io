import Image from 'next/image';
import PresentationImage from '../../public/images/presentation-image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import '../app/globals.css';

const PresentationSection = () => {
  return (
    <section id="presentation" className="bg-gray-100 dark:bg-slate-900 py-16 flex justify-center">
      <div className="container w-full max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-3">À propos de moi</h2>
        <div className="flex justify-center items-center space-x-5 text-indigo-500 mb-10">
          <div className="w-40 h-1.5 rounded-full bg-indigo-500"></div>
          <div className="w-10 h-1.5 rounded-full bg-indigo-500"></div>
          <div className="w-10 h-1.5 rounded-full bg-indigo-500"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src={PresentationImage} alt="Luca Chaboissier" width={400} height={400} className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Je m&apos;appelle Luca Chaboissier et je suis étudiant en 3ème année de Licence Informatique en parcours conception et développement d&apos;application à l&apos;UBO de Brest ! 👨‍🎓
              {/* Passionné par le développement web, je suis constamment à la recherche de nouveaux défis et opportunités pour apprendre et grandir. */}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              J&apos;envisage de poursuivre mes études en me spécialisant en développement afin de me préparer un diplôme d&apos;ingénieur à l&apos;école ISEN de Nantes pendant 3 ans 💻.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Vous trouverez ci-dessous mes compétences, mes expériences et les différents projets que j&apos;ai pu réaliser pour connaître plus d&apos;informations sur moi 🙂.
            </p>
            <div className="mt-8 flex">
              <a href="/documents/CV - Luca Chaboissier.pdf" target="_blank" className="bg-gray-700 hover:bg-gray-900 text-white font-bold hover:bg-gray-800 transition duration-100 py-2 px-4 rounded">
                <FontAwesomeIcon icon={faDownload} />
                <span className="ml-2">Télécharger mon CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
  
export default PresentationSection;
  
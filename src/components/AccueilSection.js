import Image from 'next/image';
import ProfileImage from '../../public/images/profileImage.jpg';

const AccueilSection = () => {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="text-left md:w-1/2">
          <h2 className="text-4xl text-gray-700 dark:text-gray-300 mb-6">Bonjour,</h2>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Je suis Luca Chaboissier 👋🏻</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Étudiant dans le développement Informatique
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="w-80 h-80 bg-gray-400 rounded-full overflow-hidden">
            <Image 
              src={ProfileImage}
              alt="Image de profil"
              width={600}
              height={600}
              layout="responsive"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
        </div>
      </div>
    </section>
    );
  };
  
export default AccueilSection;
  
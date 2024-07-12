import Image from "next/image";
import Html5File from '../../public/icones/html5.png';
import Css3File from '../../public/icones/css3.png';
import JsFile from '../../public/icones/js.png';
import PhpFile from '../../public/icones/php.png';
import JavaFile from '../../public/icones/java.png';
import CFile from '../../public/icones/c.png';
import GitFile from '../../public/icones/git.png';
import SqlFile from '../../public/icones/mysql.png';

import SymfonyFile from '../../public/icones/symfony.png';
import LaravelFile from '../../public/icones/laravel.png';
import CiFile from '../../public/icones/ci.png';
import FlutterFile from '../../public/icones/flutter.png';
import AngularFile from '../../public/icones/angular.png';
import GitlabFile from '../../public/icones/gitlab.png';
import InsomniaFile from '../../public/icones/insomnia.png';
import PostmanFile from '../../public/icones/postman.png';

const skills = [
  { name: "HTML", icon: Html5File },
  { name: "CSS", icon: Css3File },
  { name: "JavaScript", icon: JsFile },
  { name: "PHP", icon: PhpFile },
  { name: "Java", icon: JavaFile },
  { name: "C", icon: CFile },
  { name: "Git", icon: GitFile },
  { name: "SQL", icon: SqlFile },
];

const tools = [
  { name: "Symfony", icon: SymfonyFile },
  { name: "Laravel", icon: LaravelFile },
  { name: "CodeIgniter", icon: CiFile },
  { name: "Flutter", icon: FlutterFile },
  { name: "Angular", icon: AngularFile },
  { name: "GitLab", icon: GitlabFile },
  { name: "Insomnia", icon: InsomniaFile },
  { name: "Postman", icon: PostmanFile },
];



const CompetencesSection = () => {
  return (
    <section
      id="competences"
      className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 p-8"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Compétences
        </h2>

        <h3 className="text-2xl text-gray-700 dark:text-gray-300 mb-6">
          Langages de programmation utilisés
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center skill-icon">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={64}
                height={64}
                className="text-gray-500 dark:text-gray-400 hover:text-current transition-colors duration-100"
              />
              <h4 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                {skill.name}
              </h4>
            </div>
          ))}
        </div>

        <h3 className="text-2xl text-gray-700 dark:text-gray-300 mb-6">
          Outils utilisés
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div key={tool.name} className="flex flex-col items-center tool-icon">
              <Image
                src={tool.icon}
                alt={tool.name}
                width={64}
                height={64}
                className="text-gray-500 dark:text-gray-400 hover:text-current transition-colors duration-300"
              />
              <h4 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                {tool.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetencesSection;

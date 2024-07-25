"use client";

import { useParams } from 'next/navigation';
import projets from '../../../data/projets';
import Image from 'next/image';

export default function ProjetDetails() {
  const params = useParams();
  const { id } = params;

  const projet = projets.find((projet) => projet.id === id);

  if (!projet) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{projet.title}</h2>
        <p className="dark:text-gray-300 text-2xl font-normal text-gray-700 mb-4">{projet.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {projet.skills.map((skill, idx) => (
            <span key={idx} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold px-2 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* {projet.image.map((img, idx) => (
            <Image key={idx} src={img} alt={`${projet.title} image ${idx}`} width={600} height={400} className="object-cover w-full" />
          ))} */}
        </div>
        {projet.projetLink && (
          <a href={projet.projetLink} className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-100 mt-4 inline-block">
            Voir le site
          </a>
        )}
      </div>
    </section>
  );
};

export function generateStaticParams() {
  return [ { slug: ["/"] } ]
}
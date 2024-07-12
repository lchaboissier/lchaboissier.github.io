import Header from '../components/Header';
import AccueilSection from '../components/AccueilSection';
import Footer from '../components/Footer';
import '@fortawesome/fontawesome-svg-core/styles.css';
import PresentationSection from '@/components/PresentationSection';
import CompetencesSection from '@/components/CompetencesSections';
import { config } from '@fortawesome/fontawesome-svg-core';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <AccueilSection />
        <PresentationSection />
        <CompetencesSection />
      </main>
      <Footer />
    </div>
  );
}

import Header from '../components/Header';
import AccueilSection from '../components/AccueilSection';
import Footer from '../components/Footer';
import '@fortawesome/fontawesome-svg-core/styles.css';
import PresentationSection from '@/components/PresentationSection';
import CompetencesSection from '@/components/CompetencesSection';
import ProjetsSection from '@/components/ProjetsSection';
import { config } from '@fortawesome/fontawesome-svg-core';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <AccueilSection />
        <PresentationSection />
        <CompetencesSection />
        <ProjetsSection />
      </main>
      <Footer />
    </div>
  );
}

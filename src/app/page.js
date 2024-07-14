import Header from '../components/Header';
import AccueilSection from '../components/AccueilSection';
import Footer from '../components/Footer';
import '@fortawesome/fontawesome-svg-core/styles.css';
import PresentationSection from '@/components/PresentationSection';
import CompetencesSection from '@/components/CompetencesSection';
import ProjetsSection from '@/components/ProjetsSection';
import ExperiencesSection from '@/components/ExperiencesSection';
import FormationSection from '@/components/FormationsSection';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import '../app/globals.css';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <AccueilSection />
        <PresentationSection />
        <CompetencesSection />
        <ProjetsSection />
        <ExperiencesSection />
        <FormationSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

import Image from "next/image";
import Head from 'next/head';
import Header from '../components/Header';
import AccueilSection from '../components/AccueilSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio de Luca Chaboissier</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <AccueilSection />
      </main>
      <Footer />
    </div>
  );
}

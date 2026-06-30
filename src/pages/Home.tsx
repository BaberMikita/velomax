import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import CarShowcase from '../components/CarShowcase';
import CarBento from '../components/CarBento';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <CarShowcase />
        <CarBento />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

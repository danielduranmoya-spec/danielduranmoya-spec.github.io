import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import FooterSection from './sections/FooterSection';
import PricingSection from './sections/PricingSection';
import LegalDialog from './components/LegalDialog';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <main className="bg-forest" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <PricingSection />
      <FooterSection />
      <LegalDialog />
      <WhatsAppButton />
    </main>
  );
}

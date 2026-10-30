import { MotionConfig } from 'framer-motion';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import AutomationsSection from './sections/AutomationsSection';
import ProjectsSection from './sections/ProjectsSection';
import FooterSection from './sections/FooterSection';
import PricingSection from './sections/PricingSection';
import ContactSection from './sections/ContactSection';
import LegalDialog from './components/LegalDialog';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    // reducedMotion="user" drops slide and blur entrances for visitors who ask for less motion.
    <MotionConfig reducedMotion="user">
      <main className="bg-forest" style={{ overflowX: 'clip' }}>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <AutomationsSection />
        <ProjectsSection />
        <PricingSection />
        <ContactSection />
        <FooterSection />
        <LegalDialog />
        <WhatsAppButton />
      </main>
    </MotionConfig>
  );
}

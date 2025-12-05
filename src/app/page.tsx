import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WorksSection from '@/components/WorksSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import PortfolioGallery from '@/components/PortfolioGallery';
import ReelsSection from '@/components/ReelsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main>
            <Header />
            <HeroSection />
            <AboutSection />
            <WorksSection />
            <ExperienceTimeline />
            <PortfolioGallery />
            <ReelsSection />
            <ContactSection />
            <Footer />
        </main>
    );
}

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WorksSection from '@/components/WorksSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
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
            <ReelsSection />
            <ContactSection />
            <Footer />
        </main>
    );
}

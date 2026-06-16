import CTASection from "../components/home/CTASection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import HeroSection from "../components/home/HeroSection";
import ImpactHighlights from "../components/home/ImpactHighlights";
import QuickAboutSection from "../components/home/QuickAbout";
import SupportOptions from "../components/home/SupportOptions";
import WhatWeDoSection from "../components/home/WhatWeDo";
import WomenStories from "../components/home/WomenStories";
import SEO from "../components/common/SEO";
import { useSEO } from "../hooks/useSEO";

const Home = () => {
    const seo = useSEO();
    return (
        <>
            <SEO
                title={seo.title}
                description={seo.description}
            />
        
            <HeroSection />
            <QuickAboutSection/>
            <ImpactHighlights/>
            <WhatWeDoSection/>
            <FeaturedProducts/>
            <WomenStories/>
            <SupportOptions/>
            <CTASection/>
        </>
    );
};

export default Home;
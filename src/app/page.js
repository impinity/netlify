import AboutSection from "./components/AboutSection";
import BannerSection from "./components/BannerSection";
import HowtoSection from "./components/HowtoSection";
import PriceSection from "./components/PriceSection";
import ProjectSection from "./components/ProjectSection";
import ServiceSection from "./components/ServiceSection";

export default function Home() {
  return (
    <>
      <BannerSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <PriceSection />
      <HowtoSection />
    </>
  )
}

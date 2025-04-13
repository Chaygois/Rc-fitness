import HeroSection from "../components/home/sections/HeroSection";
import FoodRegistrySection from "../components/home/sections/FoodRegistrySection";
import ToolsSection from "../components/home/sections/ToolsSection";
import SuccessStoriesSection from "../components/home/sections/SuccessStoriesSection";
import RecipesSection from "../components/home/sections/RecipesSection";
import ConnectedAppsSection from "../components/home/sections/ConnectedAppsSection";
import CTASection from "../components/home/sections/CTASection";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FoodRegistrySection />
      <ToolsSection />
      <SuccessStoriesSection />
      <CTASection />
      <RecipesSection />
      <ConnectedAppsSection />
    </>
  );
};

export default HomePage;

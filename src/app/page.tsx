import { ContactForm } from "@/components/sections/ContactForm";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { HeroSection } from "@/components/sections/HeroSection";
import { MediumArticles } from "@/components/sections/MediumArticles";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <MediumArticles />
      <ContactForm />
    </>
  );
}

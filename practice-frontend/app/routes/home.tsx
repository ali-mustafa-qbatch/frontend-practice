import type { Route } from "./+types/home";
import { Navbar } from "~/components/Navbar";
import { HeroSection } from "~/components/HeroSection";
import { ServicesSection } from "~/components/ServicesSection";
import { FeaturesSection } from "~/components/FeaturesSection";
import { RequestDemoSection } from "~/components/RequestDemoSection";
import { Footer } from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <RequestDemoSection />
      <Footer />
    </main>
  );
}

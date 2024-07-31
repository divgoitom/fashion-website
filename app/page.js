import { ProductShowcase } from "@/components/ProductShowcase";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductShowcase />
      <Footer />
    </div>
  );
}

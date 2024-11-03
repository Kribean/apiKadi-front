import Category from "@/components/Category";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductContainer from "@/components/ProductContainer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Hero />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Category />
        <FeatureSection />
        <ProductContainer />
      </main>
      <Footer />
    </div>
  );
}

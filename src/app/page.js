import Category from "@/components/Category";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductContainer from "@/components/ProductContainer";
import prisma from "@/lib/prisma";

export default async function Home() {

    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: 'desc', // Trie par date de création décroissante
      },
      take: 50, // Limite à 50 articles
    });
      // Remplacer les valeurs nulles de price_per_unit et price_per_kilo par une valeur par défaut
  const processedProducts = products.map(product => ({
    ...product,
    price_per_unit: product.price_per_unit ?? "0", // Remplace null par "0" ou une autre valeur par défaut
    price_per_kilo: product.price_per_kilo ?? "0", // Pareil pour price_per_kilo
  }));
  return (
    <div className="flex flex-col items-center justify-between min-h-screen font-[family-name:var(--font-geist-sans)]">
      {processedProducts?.map((e)=>{return <p>{e.nameArticle}</p>})}
      <Navbar />
      <Hero />
      <main className="flex flex-col m-[0px] p-[0px] w-full ">
      <Category />
        <FeatureSection />
        <ProductContainer />
      </main>
      <Footer />
    </div>
  );
}

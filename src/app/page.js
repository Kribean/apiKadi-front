import Category from "@/components/Category";
import FeatureSection from "@/components/FeatureSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductContainer from "@/components/ProductContainer";

export default async function Home() {
const products=[]
    // const products = await prisma.product.findMany({
    //   orderBy: {
    //     createdAt: 'desc', // Trie par date de création décroissante
    //   },
    //   take: 50, // Limite à 50 articles
    // });

  return (
    <div className="flex flex-col items-center justify-between min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Hero />
      <main className="flex flex-col m-[0px] p-[0px] w-full ">
      <Category />
        <FeatureSection />
        <ProductContainer products={products} />
      </main>
    </div>
  );
}

import HeroSection from "@/components/section/HeroSection";
import SayHelloSection from "@/components/section/SayHelloSection";
import NewArticleSection from "@/components/section/NewArticleSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SayHelloSection />
      <NewArticleSection />
    </main>
  );
}

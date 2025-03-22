import { CardsCarousel } from "@/components/cardsCarousel";
import { Hero } from "@/components/Hero";
import { AnimatedListDemo } from "@/components/ui/AnimatedListDemo";

export default async function Home1() {
  return (
    <>
      <div className="">
        <div className="py-2">
          <Hero />
        </div>
        <div className="py-2 md:py-4 w-full h-80 overflow-hidden bg-muted">
          <AnimatedListDemo />
        </div>
        <div className="pt-10"><CardsCarousel/></div>
        <div>برامج وخطط خاصة فيك معك عموبايلك</div>
        <div>فيديوهات شرح لكل تمرين بالتفصيل</div>
        <div>برامج غذائية</div>
        <div>اليوم الطريق قدامك</div>
      </div>
    </>
  );
}

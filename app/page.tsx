import { Hero } from "@/components/Hero";
import { AnimatedListDemo } from "@/components/ui/AnimatedListDemo";
import { Button } from "@/components/ui/button";

export default async function Home1() {
  return (
    <>
      <div className="h-full">
        <div className="py-2">
          <Hero />
        </div>
        <div className="py-2 md:py-4 w-full h-80 overflow-hidden bg-muted">
          <AnimatedListDemo />
        </div>
        <div className="pt-10">
          لاعبين
        </div>
        <div>برامج وخطط خاصة فيك معك عموبايلك</div>
        <div>فيديوهات شرح لكل تمرين بالتفصيل</div>
        <div>برامج غذائية</div>
        <div className="my-10 justify-center gap-20 flex">
          <div className="text-4xl mr-10 font-bold">اليوم الطريق قدامك</div>
          <Button className="ml-10">إشترك الان</Button>
        </div>
      </div>
    </>
  );
}

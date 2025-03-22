import { BlurFade } from "@/components/magicui/blur-fade";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Particles } from "@/components/magicui/particles";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { WordRotate } from "@/components/magicui/word-rotate";
import { AnimatedListDemo } from "@/components/ui/AnimatedListDemo";
export default async function Home1() {
  return (
    <>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <div className="whitespace-pre-wrap text-center leading-none">
          <div className="py-4 md:py-8 ">
            <div className="container text-5xl md:text-6xl leading-snug font-bold px-4">
              <BlurFade delay={0.25} inView>
                طريقك الأسهل لوصول لجسم مثالي وصحي
              </BlurFade>
            </div>
            <div className="z-50 px-6 text-xl justify-center text-red-600 my-6 md:my-6 gap-4 md:gap-16">
              <BlurFade delay={0.45} inView>
                <WordRotate
                  duration={3500}
                  className="text-3xl md:text-4xl font-bold text dark:text"
                  words={["Coach Ali Kahwahji", "طبيب اسنان - اخصائي تغذية"]}
                />
              </BlurFade>
            </div>
            <div className="flex-1 z-50 gap-8">
              <div className="">
                <BlurFade delay={0.65} inView>
                  <NumberTicker
                    delay={0.75}
                    value={547}
                    className="whitespace-pre-wrap text-7xl font-medium tracking-tighter"
                  />
                </BlurFade>
                <div className="text-2xl h-20">
                  <BlurFade delay={1} inView>
                    <TypingAnimation delay={2200}>لاعب/ـة</TypingAnimation>
                  </BlurFade>
                </div>
              </div>
            </div>
            <Particles className="flex z-0"></Particles>
          </div>
        </div>
        <div className="py-2 md:py-4 w-full h-80 overflow-hidden bg-muted">
          <AnimatedListDemo />
        </div>
        <div className="pt-10">
        </div>
        <div>برامج وخطط خاصة فيك معك عموبايلك</div>
        <div>فيديوهات شرح لكل تمرين بالتفصيل</div>
        <div>برامج غذائية</div>
        <div>اليوم الطريق قدامك</div>
      </div>
    </>
  );
}

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BlurFade } from "./magicui/blur-fade";
import { Particles } from "./magicui/particles";
import { WordRotate } from "./magicui/word-rotate";
import { TypingAnimation } from "./magicui/typing-animation";
import { NumberTicker } from "./magicui/number-ticker";

export function Hero() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <span className="z-10 whitespace-pre-wrap text-center leading-none">
        <div className="text-center py-16">
          <BlurFade delay={0.25} inView>
            <div className="lg:text-7xl md:text-6xl text-4xl z-20 font-bold md:leading-18 leading-14 md:py-6 py-4">
              طريقك الأسهل لوصول لجسم مثالي وصحي
            </div>
            <div className="z-0"></div>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <div className="lg:text-xl text-red-600 opacity-75 md:mt-10 mt-6">
              <WordRotate
                duration={3500}
                className="text-3xl md:text-4xl font-bold text dark:text"
                words={["Coach Ali Kahwahji", "طبيب اسنان - اخصائي تغذية"]}
              />
            </div>
          </BlurFade>
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
                  <TypingAnimation delay={2500}>لاعب/ـة</TypingAnimation>
                </BlurFade>
              </div>
            </div>
          </div>
        </div>
      </span>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      
    </div>
  );
}

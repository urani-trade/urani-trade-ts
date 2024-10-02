// @ts-nocheck
"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// 12 sentences now

// If add or remove a sentence, you must have a useRef for each content

const SENTENCES = [
  "You can call yourself a neo-cypherpunk.",
  "You can brag that you are a real quant.",
  "You can make a bag while playin'.",
  "You can capitalize on the influence of the stars.",
  "You can become multidimensional like the cool kids.",
  "You can show your skills in a PvP arena.",
  "You can defend the future of finance.",
  'You can enjoy "reality" a little more.',
  "You can bond with new friends over Salmonella.",
  "You can chill with under-top-underdogs.",
  "You can have In-N-Out instead of Subway for a change.",
  "You can become your own boss.",

];

export default function Carousel() {
  const [splittingOutput, setSplittingOutput] = useState<
    | {
        words: string[];
      }[]
    | null
  >(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentTextPos, setCurrentTextPos] = useState(0);
  const containerRef = useRef(null);

  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);
  const contentRef3 = useRef(null);
  const contentRef4 = useRef(null);
  const contentRef5 = useRef(null);
  const contentRef6 = useRef(null);
  const contentRef7 = useRef(null);
  const contentRef8 = useRef(null);
  const contentRef9 = useRef(null);
  const contentRef10 = useRef(null);
  const contentRef11 = useRef(null);
  const contentRef12 = useRef(null);
  const contentRefs = useMemo(
    () => [
      contentRef1,
      contentRef2,
      contentRef3,
      contentRef4,
      contentRef5,
      contentRef6,
      contentRef7,
      contentRef8,
      contentRef9,
      contentRef10,
      contentRef11,
      contentRef12,
    ],
    []
  );

  const [texts, setTexts] = useState<string[]>([]);
  const [chars, setChars] = useState([]);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const switchTexts = contextSafe(() => {
    if (isAnimating) return false;
    setIsAnimating(true);

    const lastSentence = SENTENCES.length - 1;

    const upcomingTextPos =
      currentTextPos === lastSentence ? 0 : currentTextPos + 1;

    // All current text words
    const currentWords = splittingOutput?.[currentTextPos]?.words;

    // All upcoming text words
    const upcomingtWords = splittingOutput?.[upcomingTextPos]?.words;

    const tl = gsap.timeline({
      onComplete: () => {
        // Update currentTextPos
        setCurrentTextPos(upcomingTextPos);
        setIsAnimating(false);
      },
    });

    currentWords?.forEach((_, wordIndex) => {
      const wordTimeline = gsap.timeline().fromTo(
        chars[currentTextPos][wordIndex],
        {
          willChange: "transform",
          transformOrigin: "50% 0%",
          scaleY: 1,
        },
        {
          duration: 1,
          ease: "sine.in",
          scaleY: 0,
          stagger: {
            each: 0.02,
            from: "start",
          },
        }
      );
      tl.add(wordTimeline, wordIndex * 0.015);
    });

    tl.add(() => {
      texts[currentTextPos].classList.remove("content__text--current");
    });
    tl.add(() => {
      texts[upcomingTextPos].classList.add("content__text--current");
    }, ">-=0.6").addLabel("previous", ">");

    upcomingtWords?.forEach((_, wordIndex) => {
      const wordTimeline = gsap.timeline().fromTo(
        chars[upcomingTextPos][wordIndex],
        {
          willChange: "transform",
          transformOrigin: "50% 100%",
          scaleY: 0,
        },
        {
          duration: 1,
          ease: "power4",
          scaleY: 1,
          stagger: {
            each: 0.015,
            from: "start",
          },
        }
      );
      tl.add(wordTimeline, `previous+=${wordIndex * 0.015}`);
    });
  });

  useEffect(() => {
    async function split() {
      // Splitting.js
      // Calling the Splitting function to split the text into individual words/characters,
      const Splitting = (await import("splitting")).default;

      const MappedTexts = SENTENCES.map((_, i) => contentRefs[i]?.current);

      setSplittingOutput(
        Splitting({
          target: MappedTexts,
          by: "chars",
        })
      );

      // .content__text elements
      const newTexts = MappedTexts;
      setTexts(newTexts);

      // Cache all .char elements at the beginning. Each text contains multiple words, each word contains multiple chars.
      setChars(
        newTexts.map((text) => {
          // Get the words for each text
          const words = text.querySelectorAll(".word");
          // For each word, get the chars
          return [...words].map((word) => word.querySelectorAll(".char"));
        })
      );

      // Add class current to the "current" one
      newTexts[currentTextPos]?.classList.add("content__text--current");
    }

    split();
  }, [currentTextPos, contentRefs]);

  useEffect(() => {
    const reference = setInterval(() => {
      switchTexts();
    }, 1000);
    return () => clearInterval(reference);
  }, [switchTexts]);

  return (
    <div className="w-full flex-col items-center justify-center text-3xl text-center px-6 py-12 md:py-24 bg-purple text-purple-light">
      <h1 className="text-4xl font-bold lg:text-6xl py-12 md:py-16">
        We are gamifying decentralized finance so...
      </h1>

      <div
        className="grid content text-xl md:mb-12 md:text-4xl pb-8 md:p-12"
        ref={containerRef}
      >
        {SENTENCES.map((sentence, index) => (
          <p
            className="content__text font-bold"
            data-splitting
            ref={contentRefs[index]}
            key={sentence}
          >
            {sentence}
          </p>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
        <Link href="/signup">
          <Button size="lg">Sign up as a MEV Agent Operator</Button>
        </Link>

        <Link href="https://swap.urani.trade/">
          <Button size="lg">Check out our Trade App (alpha)</Button>
        </Link>
      </div>
    </div>
  );
}

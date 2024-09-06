import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";

export default function WhySolana() {
  const [highlightVisible, setHighlightVisible] = useState(false);
  const highlightRef = useRef(null);

  const callbackFunction = (entries: any[]) => {
    const [entry] = entries;
    setHighlightVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(callbackFunction, options);
    const ref = highlightRef.current;

    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [highlightRef]);

  return (
    <div className="w-full py-12 md:py-24">
      <div className="max-w-screen-xl text-left text-purple m-auto">
        <h2 className="mb-12 text-4xl font-bold lg:text-6xl text-center">
          Some of our experiments:
        </h2>
        <ul className="px-6">




          <li className="mb-8">
            <p
              className={`inline-block text-2xl md:text-3xl font-bold ${
                highlightVisible ? "bg-highlight animate-highlight" : ""
              }`}
              ref={highlightRef}
            >
              Urani Protocol
            </p>
            <p className="text-1xl md:text-2xl italic">
            Onchain-agnostic orderbook conducting batch competitions among agents for the largest surplus, efficiency, and ingenuity. 
            The protocol provides various strategies to ensure fairness, accessibility, and meritocracy. 
            Learn more <a href="https://docs.urani.trade/urani-protocol/urani-protocol-overview" target="_blank" rel="noopener noreferrer">here</a>.
              
            </p>
          </li>


          <li className="mb-8">
            <p
              className={`inline-block text-2xl md:text-3xl font-bold ${
                highlightVisible ? "bg-highlight animate-highlight" : ""
              }`}
            >
              Urani Swap
            </p>
            <p className="text-1xl md:text-2xl">
              <i>The interface and SDK facilitating the submission of order intents for consumption by the Urani Protocol, 
              supporting usage by both retail users and other protocols.</i>
              Learn more <a href="https://docs.urani.trade/urani-swap/overview" target="_blank" rel="noopener noreferrer">here</a>.
            </p>
          </li>
          

          
          <li className="mb-8">
            <p
              className={`inline-block text-2xl md:text-3xl font-bold ${
                highlightVisible ? "bg-highlight animate-highlight" : ""
              }`}
            >
              MEV Agents
            </p>
            <p className="text-1xl md:text-2xl italic">           
              Open-source algorithms (bots) for the Urani Protocol, allowing operators to integrate their preferred private strategies
              and start playing our MEV games. Advanced strategies and AI-centric agents are the focus of research and development in our labs. 
              Additionally, we have in-house agents running for gauging and fallback mechanisms.
              Learn more <a href="https://docs.urani.trade/mev-agents/the-onboarding-process" target="_blank" rel="noopener noreferrer">here</a>.

            </p>
          </li>

          

          <li className="mb-8">
            <p
              className={`inline-block text-2xl md:text-3xl font-bold ${
                highlightVisible ? "bg-highlight animate-highlight" : ""
              }`}
            >
              Urani Arena
            </p>
            <p className="text-1xl md:text-2xl italic">
              Real-time visual infrastructure for orderflow auction competition and peer-to-peer order matches, 
              designed to commoditize MEV agents and engage their fans.
              Learn more <a href="https://docs.urani.trade/urani-arena/urani-arena-overview" target="_blank" rel="noopener noreferrer">here</a>.
       
            </p>
          </li>

        
          
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center">
        <a
          href="https://arena.urani.ag/"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </div>
    </div>
  );
}

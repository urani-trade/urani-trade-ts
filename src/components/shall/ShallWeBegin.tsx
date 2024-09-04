import LightCard from "../utils/LightCard";

export default function ShallWeBegin() {
  return (
    <div className="w-full items-center justify-center flex flex-col place-items-center">

      <div className="md:my-16 grid md:grid-cols-3 gap-1 md:gap-4 text-purple">
        <LightCard
          title="Agent Templates"
          description={
            <span>
              Get started as a MEV agent operator by{" "}
              <strong>
                plugging your favorite (secret) strategies into an agent
                template.{" "}
              </strong>
            </span>
          }
          icon1="skateboarding"
          icon2="north_east"
          link="/mev-agent-templates"
        />

        <LightCard
          title="MEV Research"
          description={
            <span>
              Explore our on-going curation of writings on{" "}
              <strong>
                MEV in the context of mechanism design and price markets.
              </strong>
            </span>
          }
          icon1="local_library"
          icon2="north_east"
          link="/mev"
        />

        <LightCard
          title="Dev Onboarding"
          description={
            <span>
              Check out our on-going resources, tutorials, and demos for newcomer{" "}
              developers to start{" "}
              <strong> building on blockchains.</strong>
            </span>
          }
          icon1="keyboard"
          icon2="north_east"
          link="/dev-onboarding"
        />
      </div>
    </div>
  );
}

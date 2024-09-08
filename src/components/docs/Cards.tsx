

export default function Cards() {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center bg-purple text-purple-light place-items-center md:p-12">

      <div className="grid md:grid-cols-3 py-12 text-center lg:max-w-6xl gap-8 text-cream">
        <a
          href="/blog"
          className="flex flex-col items-center rounded-lg bg-purple-dark px-8 py-12 m-3 transition hover:shadow-lg hover:scale-105 border border-cyan md:border-transparent hover:border-cyan hover:[--font-FILL:1] hover:[--font-wght:600]"
        >
          <span className="material-symbols-rounded text-7xl">smart_toy</span>
          <h2 className="mt-2 mb-8 text-4xl font-semibold">Blog</h2>
          <p className="m-0 text-md opacity-70">
            <b>
              Read the latest updates from Urani and the MEV space.
            </b>
          </p>
        </a>
        <a
          href="https://docs.urani.trade/"
          className="flex flex-col items-center rounded-lg bg-purple-dark px-8 py-12 m-3 transition hover:shadow-lg hover:scale-105 border border-cyan md:border-transparent hover:border-cyan hover:[--font-FILL:1] hover:[--font-wght:600]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-rounded text-7xl">article</span>
          <h2 className="mt-2 mb-8 text-4xl font-semibold">Docs</h2>
          <p className="m-0 text-md opacity-70">
            <b>
              Learn about the technical details of our projects.
            </b>
          </p>
        </a>
        <a
          href="https://github.com/urani-trade"
          className="flex flex-col items-center rounded-lg bg-purple-dark px-8 py-12 m-3 transition hover:shadow-lg hover:scale-105 border border-cyan md:border-transparent hover:border-cyan hover:[--font-FILL:1] hover:[--font-wght:600]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-rounded text-7xl">
            rocket_launch
          </span>
          <h2 className="mt-2 mb-8 text-4xl font-semibold">Labs</h2>
          <p className="m-0 text-md opacity-70">
            <b>
              Utilize and contribute to our open-source projects.
            </b>
          </p>
        </a>
      </div>
    </div>
  );
}

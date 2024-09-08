import Link from "next/link";

interface LightCardProps {
  title: string;
  description?: string | JSX.Element;
  icon1?: string;
  icon2?: string;
  link?: string;
  badge?: JSX.Element;
}

export default function LightCard({
  title,
  description,
  icon1,
  icon2,
  link,
  badge,
}: LightCardProps) {
  return (
    <Link
      className="text-center lg:max-w-md md:text-left min-h-60 lg:min-h-64 xl:min-h-[340px] m-4 rounded-lg border p-4 md:p-8 transition border-purple-medium hover:border-cyan hover:[--font-FILL:1] hover:[--font-wght:600] shadow-lg hover:scale-105"
      href={link ?? ""}
    >
      <div className="">
        <div className="flex justify-center md:justify-between">
          {icon1 && (
            <span className="material-symbols-rounded text-5xl md:text-7xl">
              {icon1}
            </span>
          )}
          {icon2 && (
            <span className="material-symbols-rounded text-5xl md:text-7xl">
              {icon2}
            </span>
          )}
          {badge && badge}
        </div>
        <h2 className={`my-6 text-3xl font-semibold`}>{title}</h2>
        {description && (
          <p className={`m-0 text-lg opacity-90`}>{description}</p>
        )}
      </div>
    </Link>
  );
}

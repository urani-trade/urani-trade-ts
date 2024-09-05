import Image from "next/image";
import Link from "next/link";

interface AgentCardProps {
  title: string;
  description?: string | JSX.Element;
  imageUrl?: string;
  link?: string;
}

export default function AgentCard({
  title,
  description,
  imageUrl,
  link,
}: AgentCardProps) {
  return (
    <div>
      <Link href={link ?? ""}>
        <div className="text-center lg:max-lg md:text-center min-h-80 lg:min-h-84 xl:min-h-96 m-4 rounded-lg border p-4 md:p-8 transition border-purple-medium hover:border-cyan hover:[--font-FILL:1] hover:[--font-wght:600] shadow-lg hover:scale-105">
          <div className="flex justify-center">
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={title ?? "image"}
                width={230}
                height={230}
                priority
              />
            )}
          </div>
          <h2 className={`my-8 text-2xl md:text-4xl font-bold`}>{title}</h2>
          {description && (
            <p className={`my-2 text-xl opacity-90`}>{description}</p>
          )}
        </div>
      </Link>
    </div>
  );
}

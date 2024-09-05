interface BadgeProps {
  text: string;
  size?: string;
  color?: string;
  colorText?: string;
}

export default function Badge({
  text,
  size = "xs",
  color = "purple",
  colorText = "white",
}: BadgeProps) {
  return (
    <div>
      <span
        className={`ml-2 p-2 bg-${color} text-${colorText} text-${size} rounded-xl font-bold`}
      >
        {text}
      </span>
    </div>
  );
}

import { type FC } from "react";

type Props = {
  href: string;
  title: string;
  description: string;
  icon: string;
  variant?: "primary" | "secondary" | "support";
  iconClassName?: string;
};

const base =
  "flex items-center gap-4 p-4 rounded-2xl border transition duration-200 hover:-translate-y-1 backdrop-blur-sm";

const variants = {
  primary: "bg-white/5 border-blue-400/20 text-white hover:bg-white/10",
  secondary: "bg-white/5 border-white/10 text-white hover:bg-white/10",
  support:
    "bg-[#13C3FF]/90 border-white/10 text-black font-medium shadow-lg shadow-[#13C3FF]/10",
};

const LinkCard: FC<Props> = ({
  href,
  title,
  description,
  icon,
  variant = "secondary",
  iconClassName = "w-8 h-8",
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${base} ${variants[variant]}`}
    >
      <img src={icon} className={`${iconClassName} object-contain flex-shrink-0`} />

      <div className="flex flex-col">
        <span className="font-semibold leading-tight">{title}</span>
        <span className="text-xs opacity-70">{description}</span>
      </div>
    </a>
  );
};

export { LinkCard };

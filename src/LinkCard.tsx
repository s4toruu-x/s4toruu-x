import { type FC } from "react";

type Props = {
  href: string;
  title: string;
  description: string;
  icon: string;
  variant?: "primary" | "secondary" | "support";
};

const base =
  "flex items-center gap-4 p-4 rounded-xl transition duration-200 hover:-translate-y-1 hover:shadow-lg";

const variants = {
  primary: "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg",
  secondary: "bg-white/5 text-white hover:bg-white/10",
  support: "bg-yellow-400 text-black font-medium",
};

const LinkCard: FC<Props> = ({
  href,
  title,
  description,
  icon,
  variant = "secondary",
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${base} ${variants[variant]}`}
    >
      <img src={icon} className="w-8 h-8 object-contain flex-shrink-0" />

      <div className="flex flex-col">
        <span className="font-semibold leading-tight">{title}</span>
        <span className="text-xs opacity-70">{description}</span>
      </div>
    </a>
  );
};

export { LinkCard };

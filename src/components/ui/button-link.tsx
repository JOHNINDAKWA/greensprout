import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = React.ComponentProps<typeof Link> & {
  label: string;
  variant?: "primary" | "forest" | "light" | "outline";
  size?: "default" | "compact";
};

export function ButtonLink({
  className,
  label,
  variant,
  size,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cn("brand-button", `brand-button--${variant ?? "primary"}`, size === "compact" && "brand-button--compact", className)} {...props}>
      <span className="brand-button__label">{label}</span>
      <span
        aria-hidden="true"
        className="brand-button__icon"
      >
        <ArrowUpRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
          strokeWidth={1.75}
        />
      </span>
    </Link>
  );
}

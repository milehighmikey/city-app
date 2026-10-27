import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { HubImageAsset } from "@/content/residents";
import { Icon } from "@/components/icon";
import s from "./hub-primitives.module.css";

// Small T2 presentation primitives, not a generic page builder.
export function HubImage({
  asset,
  sizes,
  eager = false,
}: {
  asset: HubImageAsset;
  sizes: string;
  eager?: boolean;
}) {
  if (asset.placeholder) {
    return (
      <span className={s.placeholder} role="img" aria-label={asset.alt}>
        <Icon name={asset.icon ?? "building"} size={32} />
        <span aria-hidden="true">Image forthcoming</span>
      </span>
    );
  }

  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      fill
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
    />
  );
}

export function HubHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  image: HubImageAsset;
}) {
  return (
    <section className={s.hero} aria-labelledby="hub-title">
      <HubImage asset={image} sizes="100vw" eager />
      <div className={`container ${s.heroContent}`}>
        <p className="eyebrow">{eyebrow}</p>
        <h1 id="hub-title">{title}</h1>
        <div className={s.accent} />
        <p className={s.description}>{description}</p>
      </div>
    </section>
  );
}

export function HubLink({
  href,
  children,
  outlined = false,
}: {
  href: string;
  children: ReactNode;
  outlined?: boolean;
}) {
  return (
    <Link href={href} className={outlined ? s.outlinedLink : s.link}>
      {children}
      <Icon name="arrow" size={16} />
    </Link>
  );
}

export function HubSectionHeading({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className={s.sectionHeading}>
      <div className={s.headingRow}>
        <h2 id={id}>{title}</h2>
        {children}
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}

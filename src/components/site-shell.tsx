import Link from "next/link";
import { city, navigation } from "@/content/city";
import { Icon, TreeMark } from "./icon";
import s from "./site-shell.module.css";
export function Brand() {
  return (
    <Link
      href="/"
      className={s.brand}
      aria-label={`${city.name}, ${city.state} home`}
    >
      <TreeMark />
      <span>
        {city.name}
        <small>{city.state}</small>
      </span>
    </Link>
  );
}
export function Header() {
  return (
    <>
      <header className={s.header}>
        <div className={`container ${s.headerInner}`}>
          <Brand />
          <nav aria-label="Main navigation" className={s.desktopNav}>
            {navigation.map((n) => (
              <Link href={n.href} key={n.label}>
                {n.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#services"
            className={s.search}
            aria-label="Find a city service"
          >
            <Icon name="search" size={22} />
          </Link>
          <details className={s.menu}>
            <summary aria-label="Toggle navigation">
              <span />
              <span />
              <span />
            </summary>
            <nav aria-label="Mobile navigation">
              {navigation.map((n) => (
                <Link href={n.href} key={n.label}>
                  {n.label}
                  <Icon name="arrow" size={18} />
                </Link>
              ))}
              <Link href="#contact">
                Contact & hours
                <Icon name="arrow" size={18} />
              </Link>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer id="contact" className={s.footer}>
      <div className={`container ${s.footerTop}`}>
        <div>
          <Brand />
          <p>
            Rooted in community.
            <br />
            Growing together.
          </p>
        </div>
        <div>
          <h2>City Hall</h2>
          <p>
            {city.address}
            <br />
            {city.postal}
          </p>
          <p>{city.hours}</p>
        </div>
        <div>
          <h2>Stay connected</h2>
          <Link href="/#news">City news ↗</Link>
          <Link href="/#events">Community calendar ↗</Link>
          <Link href="/#government">Your government ↗</Link>
        </div>
      </div>
      <div className={`container ${s.footerBottom}`}>
        <p>
          © 2026 {city.name}, {city.state}. Fictional municipal demonstration.
        </p>
        <div>
          <details>
            <summary>Accessibility</summary>
            <p>
              Designed for keyboard navigation, readable contrast, reduced
              motion, and responsive screens. Accessibility should be re-audited
              as services are added.
            </p>
          </details>
          <details>
            <summary>Privacy</summary>
            <p>
              This demonstration has no analytics, accounts, or payment
              processing. Service searches stay in your browser. Hosting
              infrastructure may retain standard request logs.
            </p>
          </details>
        </div>
      </div>
    </footer>
  );
}

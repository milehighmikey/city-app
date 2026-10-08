import Image from "next/image";
import { Icon, TreeMark } from "@/components/icon";
import { ServiceFinder } from "@/components/service-finder";
import { city, services, news, events, statuses } from "@/content/city";
import s from "./page.module.css";
function ArrowLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <a className={`${s.button} ${light ? s.light : ""}`} href={href}>
      {children}
      <Icon name="arrow" size={19} />
    </a>
  );
}
function SectionHeading({
  eyebrow,
  title,
  href,
  label,
  id,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  href?: string;
  label?: string;
}) {
  return (
    <div className={s.sectionHeading}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </div>
      {href && (
        <a href={href}>
          {label}
          <Icon name="arrow" size={18} />
        </a>
      )}
    </div>
  );
}
export default function Home() {
  return (
    <main id="main">
      <section className={s.hero} aria-labelledby="hero-title">
        <Image
          src="/images/riverfront.png"
          alt="An imagined Brookhaven riverfront, with a tree-lined promenade and historic bridge at sunset"
          fill
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          className={s.heroImage}
        />
        <div className={s.heroShade} />
        <div className={`container ${s.heroContent}`}>
          <p className="eyebrow">Welcome to Brookhaven, Illinois</p>
          <h1 id="hero-title">
            A place to belong.
            <br />A future to build.
          </h1>
          <div className={s.accent} />
          <p className={s.heroDescription}>
            River roots. Strong neighbors. Bright tomorrows.
            <br />
            Discover a city that feels like home.
          </p>
          <ArrowLink href="#community" light>
            Get to know Brookhaven
          </ArrowLink>
          <div className={s.heroBottom}>
            <span>OUR COMMUNITY. YOUR HOME.</span>
            <a href="#services">
              Here to help <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>
      <ServiceFinder services={services} />
      <section className={s.pulse} aria-labelledby="pulse-title">
        <div className={`container ${s.pulseInner}`}>
          <div className={s.pulseIntro}>
            <div>
              <h2 id="pulse-title">Brookhaven pulse</h2>
              <span className={s.sample}>Sample data</span>
            </div>
            <p>A quick look at life around town.</p>
          </div>
          <div className={s.statuses}>
            {statuses.map((status) => (
              <div key={status.label} className={s.status}>
                <Icon name={status.icon} size={29} />
                <div>
                  <span>{status.label}</span>
                  <p>
                    <i />
                    {status.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <details className={s.statusDetails}>
            <summary>
              About city status <span aria-hidden="true">+</span>
            </summary>
            <p>
              These are illustrative conditions, not live service reports. A
              future municipal data source can supply verified updates and
              timestamps.
            </p>
          </details>
        </div>
      </section>
      <div className={`container ${s.happenings}`}>
        <section id="news" aria-labelledby="news-title">
          <SectionHeading
            eyebrow="Around our city"
            id="news-title"
            title="Good things are happening."
          />
          <div className={s.newsGrid}>
            <article className={s.leadNews}>
              <div className={s.newsImage}>
                <Image
                  src="/images/downtown.png"
                  alt="Illustrative brick storefronts along a welcoming Midwestern Main Street"
                  fill
                  sizes="(max-width: 700px) 90vw, 40vw"
                />
              </div>
              <div className={s.newsMeta}>
                {news[0].category}
                <span> / </span>
                <time dateTime={news[0].date}>{news[0].displayDate}</time>
              </div>
              <h3>{news[0].title}</h3>
              <p>{news[0].description}</p>
              <details className={s.story}>
                <summary>
                  Read the story <Icon name="arrow" size={18} />
                </summary>
                <p>{news[0].details}</p>
              </details>
            </article>
            <div className={s.smallNews}>
              {news.slice(1).map((item, index) => (
                <article key={item.id}>
                  <div className={s.smallNewsIcon}>
                    <Icon name={index === 0 ? "building" : "tree"} size={31} />
                  </div>
                  <div className={s.newsMeta}>{item.category}</div>
                  <h3>{item.title}</h3>
                  <time dateTime={item.date}>{item.displayDate}</time>
                  <details className={s.story}>
                    <summary>
                      Read update <Icon name="arrow" size={17} />
                    </summary>
                    <p>{item.details}</p>
                  </details>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          id="events"
          className={s.events}
          aria-labelledby="events-title"
        >
          <p className="eyebrow">Make a little time</p>
          <h2 id="events-title">Coming together.</h2>
          <p className={s.eventsIntro}>
            There’s always something around the corner.
          </p>
          <div>
            {events.map((event) => (
              <details key={event.id} className={s.event}>
                <summary>
                  <time dateTime={event.date}>
                    <span>{event.month}</span>
                    {event.day}
                  </time>
                  <span>
                    <strong>{event.title}</strong>
                    <small>
                      {event.location}
                      <br />
                      {event.time}
                    </small>
                  </span>
                  <span aria-hidden="true">↗</span>
                </summary>
                <p>{event.details}</p>
              </details>
            ))}
          </div>
          <p className={s.eventNote}>
            A glimpse of our community calendar.
            <br />
            All events shown are illustrative.
          </p>
        </section>
      </div>
      <section id="parks" className={s.parks} aria-labelledby="parks-title">
        <div className={s.parkPhoto}>
          <Image
          src="/images/park.png"
          alt="A tree-lined walking path through a neighborhood park in Brookhaven"
          fill
          sizes="(max-width: 700px) 100vw, 55vw"
        />
          <span>Room to roam. Space to slow down.</span>
        </div>
        <div className={s.parkContent}>
          <p className="eyebrow">A breath of fresh air</p>
          <h2 id="parks-title">
            Your next favorite
            <br />
            place is outside.
          </h2>
          <p>
            Follow the river. Find a new trail. Make an ordinary afternoon a
            little more memorable in Brookhaven’s parks and green spaces.
          </p>
          <div className={s.parkList}>
            {[
              {
                name: "Riverside Park",
                text: "River views, walking paths & room to play.",
                detail:
                  "An imagined riverfront gathering place with picnic lawns, a playground, and paths along the water.",
              },
              {
                name: "Heritage Grove",
                text: "Big trees. Quiet moments. Good company.",
                detail:
                  "A fictional neighborhood green with shaded picnic spots and open space for informal games.",
              },
              {
                name: "Maplewood Trails",
                text: "A little adventure, close to home.",
                detail:
                  "An illustrative network of woodland walking and cycling paths. Trail maps and accessibility information will follow in a future phase.",
              },
            ].map((park) => (
              <details key={park.name}>
                <summary>
                  <Icon name="tree" size={20} />
                  <span>
                    {park.name}
                    <small>{park.text}</small>
                  </span>
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{park.detail}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section
        id="community"
        className={`container ${s.community}`}
        aria-labelledby="community-title"
      >
        <SectionHeading
          eyebrow="Together, we make this place"
          id="community-title"
          title="A city that works for you."
        />
        <div className={s.communityGrid}>
          <article id="government">
            <Icon name="building" size={30} />
            <h3>Your voice. Your city.</h3>
            <p>
              Get to know your local government and the decisions that shape our
              shared future.
            </p>
            <details className={s.story}>
              <summary>
                Open government <Icon name="arrow" size={18} />
              </summary>
              <p>
                Future council agendas, meeting minutes, budgets, and department
                contacts will live here. Official records are not yet connected.
              </p>
            </details>
          </article>
          <article id="business">
            <Icon name="file" size={30} />
            <h3>Put down business roots.</h3>
            <p>
              From your first idea to your next chapter, find room to grow in
              Brookhaven.
            </p>
            <details className={s.story}>
              <summary>
                Business resources <Icon name="arrow" size={18} />
              </summary>
              <p>
                Planned resources include licensing, zoning guidance, and
                economic development contacts. Find permit guidance in the
                service finder above.
              </p>
            </details>
          </article>
          <article>
            <Icon name="tree" size={30} />
            <h3>Make a local difference.</h3>
            <p>
              A helping hand. A fresh idea. A few hours of your time. It all
              adds up.
            </p>
            <details className={s.story}>
              <summary>
                Ways to get involved <Icon name="arrow" size={18} />
              </summary>
              <p>
                Explore the sample Fall Clean-Up Day in the event list. Future
                opportunities will include volunteer programs and public boards;
                applications are not currently collected.
              </p>
            </details>
          </article>
        </div>
      </section>
      <section className={s.involved}>
        <div className={`container ${s.involvedInner}`}>
          <div>
            <p className="eyebrow">
              Neighbors today. A stronger city tomorrow.
            </p>
            <h2>
              A better Brookhaven
              <br />
              starts with all of us.
            </h2>
          </div>
          <div>
            <p>
              Find your people. Share your ideas.
              <br />
              Be part of what comes next.
            </p>
            <ArrowLink href="#events" light>
              Find your next community event
            </ArrowLink>
          </div>
          <div className={s.watermark}>
            <TreeMark />
          </div>
        </div>
      </section>
      
    </main>
  );
}

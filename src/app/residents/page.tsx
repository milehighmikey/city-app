import type { Metadata } from "next";
import { Icon, TreeMark } from "@/components/icon";
import { ServiceFinder } from "@/components/service-finder";
import {
  HubHero,
  HubImage,
  HubLink,
  HubSectionHeading,
} from "@/components/hub/hub-primitives";
import { events, services } from "@/content/city";
import {
  cityPrograms,
  movieEvent,
  popularServices,
  residentImages,
  residentNews,
  residentParks,
  residentServices,
  residentStatuses,
} from "@/content/residents";
import s from "./residents.module.css";

export const metadata: Metadata = {
  title: "Residents",
  description:
    "Everything you need to live, work, and thrive in Brookhaven. Explore resident services, city programs, parks, news, and community events.",
};

function PulsePreview() {
  return (
    <section className={s.pulse} aria-labelledby="resident-pulse-title">
      <div className={s.pulseHeading}>
        <h2 id="resident-pulse-title">Brookhaven Pulse</h2>
        <span className={s.sampleBadge}>Sample data</span>
      </div>
      <p>Real-time updates for our community.</p>
      <p className={s.sampleNote}>Illustrative preview · not live conditions</p>
      <div className={s.statusGrid}>
        {residentStatuses.map((status) => (
          <div className={s.status} key={status.label}>
            <Icon name={status.icon} size={32} />
            <div>
              <span>{status.label}</span>
              <p>{status.value}</p>
            </div>
          </div>
        ))}
      </div>
      <details className={s.pulseMore}>
        <summary>
          View full city status
          <Icon name="arrow" size={16} />
        </summary>
        <p>
          The full Brookhaven Pulse page is planned. These six sample categories
          demonstrate the preview; no live weather, alerts, or municipal feeds
          are connected yet.
        </p>
      </details>
    </section>
  );
}

function PopularServices() {
  return (
    <section className={s.popular} aria-labelledby="popular-title">
      <HubSectionHeading
        id="popular-title"
        title="Popular Services"
        description="Quick access to the most common services for Brookhaven residents."
      >
        <HubLink href="#resident-service-directory">View All</HubLink>
      </HubSectionHeading>
      <div className={s.popularList}>
        {popularServices.map((service) => (
          <details className={s.serviceRow} key={service.id}>
            <summary>
              <span className={s.serviceIcon}>
                <Icon name={service.icon} size={24} />
              </span>
              <span>{service.title}</span>
              <Icon name="arrow" size={16} />
            </summary>
            <p>{service.details}</p>
          </details>
        ))}
      </div>
      <details className={s.directory} id="resident-service-directory">
        <summary>
          Browse all resident services
          <span aria-hidden="true">+</span>
        </summary>
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              <strong>{service.title}</strong>
              <p>{service.details}</p>
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
}

function FeaturedNews() {
  const [lead, ...supportingStories] = residentNews;

  return (
    <section className={s.news} aria-labelledby="resident-news-title">
      <HubSectionHeading id="resident-news-title" title="Featured News">
        <HubLink href="/#news">View All News</HubLink>
      </HubSectionHeading>
      <div className={s.newsGrid}>
        <article className={s.leadStory}>
          <div className={s.leadImage}>
            <HubImage
              asset={lead.image}
              sizes="(max-width: 550px) 90vw, (max-width: 1000px) 55vw, 40vw"
            />
          </div>
          <p className={s.newsMeta}>
            <time dateTime={lead.date}>{lead.displayDate}</time>
            <span>{lead.category}</span>
          </p>
          <h3>{lead.title}</h3>
          <p>{lead.description}</p>
          <details className={s.storyDetails}>
            <summary>
              Read story
              <Icon name="arrow" size={16} />
            </summary>
            <p>{lead.details}</p>
          </details>
        </article>
        <div className={s.supportingStories}>
          {supportingStories.map((story) => (
            <details className={s.supportingStory} key={story.id}>
              <summary>
                <span className={s.storyImage}>
                  <HubImage asset={story.image} sizes="96px" />
                </span>
                <span>
                  <time dateTime={story.date}>{story.displayDate}</time>
                  <span className={s.storyTitle}>{story.title}</span>
                  <span className={s.storyDescription}>
                    {story.description}
                  </span>
                </span>
                <Icon name="arrow" size={16} />
              </summary>
              <p>{story.details}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CityPrograms() {
  return (
    <section className={s.programs} aria-labelledby="programs-title">
      <HubSectionHeading
        id="programs-title"
        title="City Programs"
        description="From utilities to neighborhood programs, find the services you use most."
      />
      <div className={s.programGrid}>
        {cityPrograms.map((program) => {
          const relatedService = services.find(
            (service) => service.id === program.serviceId,
          );

          return (
            <details className={s.program} key={program.id} id={program.id}>
              <summary>
                <span className={s.programImage}>
                  <HubImage asset={program.image} sizes="80px" />
                </span>
                <span>{program.title}</span>
                <Icon name="arrow" size={16} />
              </summary>
              <div className={s.programDetails}>
                <p>{program.description}</p>
                {relatedService && <p>{relatedService.details}</p>}
                {program.id === "more-services" && (
                  <HubLink href="#resident-service-directory">
                    Browse the service directory
                  </HubLink>
                )}
                {program.id === "volunteer" && (
                  <HubLink href="#resident-events">
                    See community events
                  </HubLink>
                )}
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}

function ParksFeature() {
  return (
    <section className={s.parks} aria-labelledby="resident-parks-title">
      <div className={s.parksBanner}>
        <div className={s.parksPhoto}>
          <HubImage
            asset={residentImages.parks}
            sizes="(max-width: 700px) 100vw, 60vw"
          />
        </div>
        <div className={s.parksIntro}>
          <h2 id="resident-parks-title">
            Explore Our
            <br />
            Parks and Trails
          </h2>
          <p>
            From downtown parks to neighborhood trails, Brookhaven offers
            beautiful spaces to get outside and stay active.
          </p>
          <HubLink href="#resident-park-list" outlined>
            Find a park
          </HubLink>
        </div>
      </div>
      <div className={s.parkList} id="resident-park-list">
        {residentParks.map((park) => (
          <details className={s.park} key={park.id}>
            <summary>
              <span className={s.parkImage}>
                <HubImage
                  asset={park.image}
                  sizes="(max-width: 700px) 24vw, 240px"
                />
              </span>
              <span className={s.parkName}>{park.name}</span>
              <span className={s.parkDescription}>{park.description}</span>
            </summary>
            <p>{park.details}</p>
          </details>
        ))}
      </div>
      <div className={s.allParks}>
        <HubLink href="#resident-park-list">All parks & trails</HubLink>
      </div>
    </section>
  );
}

function UpcomingEvents() {
  return (
    <section
      id="resident-events"
      className={s.events}
      aria-labelledby="resident-events-title"
    >
      <HubSectionHeading id="resident-events-title" title="Upcoming Events">
        <HubLink href="/#events">View All</HubLink>
      </HubSectionHeading>
      <div className={s.eventList}>
        {events.map((event) => (
          <details className={s.event} key={event.id}>
            <summary>
              <time dateTime={event.date}>
                <span>{event.month}</span>
                {event.day}
              </time>
              <span className={s.eventCopy}>
                <strong>{event.title}</strong>
                <span>{event.location}</span>
                <span>{event.time}</span>
              </span>
              <Icon name="arrow" size={16} />
            </summary>
            <p>{event.details}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function CommunityEvent() {
  return (
    <section className={s.movie} aria-labelledby="movie-title">
      <div className={s.movieImage}>
        <HubImage asset={residentImages.movie} sizes="100vw" />
      </div>
      <div className={s.movieContent}>
        <p className="eyebrow">Community Event</p>
        <h2 id="movie-title">Movies in the Park</h2>
        <p>
          Bring a chair, grab some snacks, and enjoy a family-friendly movie
          under the stars at Riverside Park.
        </p>
        <details className={s.movieDetails}>
          <summary>
            Learn more
            <Icon name="arrow" size={16} />
          </summary>
          <div>
            <p>
              <time dateTime={movieEvent.date}>
                October {movieEvent.day}, 2026
              </time>
              {" · "}
              {movieEvent.time}
              {" · "}
              {movieEvent.location}
            </p>
            <p>{movieEvent.details}</p>
          </div>
        </details>
      </div>
    </section>
  );
}

function GetInvolved() {
  return (
    <section className={s.involved} aria-labelledby="involved-title">
      <div className={s.involvedCopy}>
        <p className="eyebrow">Get Involved</p>
        <h2 id="involved-title">
          A Stronger Brookhaven
          <br />
          Starts With All of Us.
        </h2>
        <p>
          From local events to volunteer opportunities, there are many ways to
          get involved and make a difference.
        </p>
        <HubLink href="#volunteer" outlined>
          Get involved
        </HubLink>
      </div>
      <div className={s.watermark} aria-hidden="true">
        <TreeMark />
      </div>
    </section>
  );
}

export default function ResidentsPage() {
  return (
    <main id="main" className={s.page}>
      <HubHero
        eyebrow="Residents"
        title={
          <>
            A Great Place
            <br />
            to Call Home
          </>
        }
        description={
          <>
            Everything you need to live, work
            <br />
            and thrive in Brookhaven.
          </>
        }
        image={residentImages.hero}
      />

      {/* T2 keeps the reference's section order at every breakpoint. */}
      <div className={`container ${s.serviceOverview}`}>
        <div className={s.finder}>
          <ServiceFinder services={residentServices} />
        </div>
        <PulsePreview />
      </div>

      <div className={`container ${s.editorial}`}>
        <FeaturedNews />
      </div>

      <div className={`container ${s.programsContainer}`}>
        <CityPrograms />
      </div>

      <div className={`container ${s.parksContainer}`}>
        <ParksFeature />
      </div>

      <div className={`container ${s.eventsContainer}`}>
        <UpcomingEvents />
        <CommunityEvent />
      </div>

      <div className={`container ${s.involvedContainer}`}>
        <GetInvolved />
      </div>
    </main>
  );
}

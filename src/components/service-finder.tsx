"use client";
import { useState } from "react";
import type { Service } from "@/content/city";
import { Icon } from "./icon";
import s from "./service-finder.module.css";
export function ServiceFinder({ services }: { services: Service[] }) {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState("");
  const results = services.filter((item) =>
    `${item.title} ${item.description} ${item.keywords}`
      .toLowerCase()
      .includes(submitted.toLowerCase().trim()),
  );
  return (
    <section
      id="services"
      className={`container ${s.section}`}
      aria-labelledby="service-title"
    >
      <div className={s.heading}>
        <div>  
          <h2 id="service-title">How can we help you today?</h2>
        </div>
        <form
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(query.trim());
          }}
        >
          <label className="sr-only" htmlFor="service-search">
            Search city services
          </label>
          <Icon name="search" size={21} />
          <input
            id="service-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, permits, and more…"
            type="search"
          />
          <button type="submit" aria-label="Search services">
            <Icon name="arrow" />
          </button>
        </form>
      </div>
      <div aria-live="polite" className={s.feedback}>
        {submitted && (
          <p>
            {results.length
              ? `${results.length} service${results.length === 1 ? "" : "s"} found for “${submitted}”`
              : `No services found for “${submitted}”. Try “water”, “trash”, or “permit”.`}{" "}
            <button
              onClick={() => {
                setQuery("");
                setSubmitted("");
              }}
            >
              Clear search
            </button>
          </p>
        )}
      </div>
      <div className={s.grid}>
        {results.map((item) => (
          <details key={item.id} className={s.service}>
            <summary>
              <Icon name={item.icon} size={29} />
              <span>
                {item.title}
                <small>{item.description}</small>
              </span>
              <span className={s.plus} aria-hidden="true">
                +
              </span>
            </summary>
            <p>{item.details}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

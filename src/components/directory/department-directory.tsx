"use client";

import { useState, type ReactNode } from "react";
import { Icon } from "@/components/icon";
import {
  departmentCategories,
  type DepartmentCategoryId,
} from "@/content/departments";
import s from "./department-directory.module.css";

export type DirectoryEntry = {
  id: string;
  name: string;
  categoryId: DepartmentCategoryId;
  searchText: string;
  content: ReactNode;
};

function normalizeSearch(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export function DepartmentDirectory({
  entries,
  children,
}: {
  entries: DirectoryEntry[];
  children: ReactNode;
}) {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<DepartmentCategoryId | "all">("all");
  const [letter, setLetter] = useState("all");

  const tokens = normalizeSearch(query).split(" ").filter(Boolean);
  const letters = [...new Set(entries.map((entry) => entry.name[0]))].sort();
  const filtered = entries.filter((entry) => {
    const text = normalizeSearch(entry.searchText);

    return (
      (category === "all" || entry.categoryId === category) &&
      (letter === "all" || entry.name.startsWith(letter)) &&
      tokens.every((token) => text.includes(token))
    );
  });
  const isFiltered = Boolean(query || category !== "all" || letter !== "all");
  const categoryLabel = departmentCategories.find((item) => item.id === category)?.label;

  function resetFilters() {
    setInput("");
    setQuery("");
    setCategory("all");
    setLetter("all");
  }

  return (
    <>
      <section className={s.searchSection} aria-labelledby="directory-search-title">
        <div className={s.searchPanel}>
          <div>
            <p className={s.searchEyebrow}>The right people. The right place.</p>
            <h2 id="directory-search-title">What are you looking for?</h2>
          </div>
          <form
            role="search"
            aria-label="Department directory"
            onSubmit={(event) => {
              event.preventDefault();
              setQuery(input.trim());
            }}
          >
            <label className="sr-only" htmlFor="department-search">
              Search departments, offices, or services
            </label>
            <Icon name="search" size={24} />
            <input
              id="department-search"
              type="search"
              placeholder="Search departments, offices, or services..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <button type="submit" aria-label="Search directory">
              <Icon name="arrow" size={24} />
            </button>
          </form>
        </div>

        <fieldset className={s.categories}>
          <legend>Browse by function</legend>
          <div className={s.categoryGrid}>
            {departmentCategories.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={category === item.id}
                aria-controls="department-results"
                onClick={() => {
                  setCategory(category === item.id ? "all" : item.id);
                  setLetter("all");
                }}
              >
                <Icon name={item.icon} size={24} />
                <span>{item.label}</span>
                <span className={s.selectionMark} aria-hidden="true">
                  {category === item.id ? "✓" : "+"}
                </span>
              </button>
            ))}
          </div>
        </fieldset>
      </section>

      {/* Server-rendered featured content and listings stay outside this bundle. */}
      {!isFiltered && children}

      <section className={s.resultsSection} aria-labelledby="directory-title">
        <div className={s.resultsHeading}>
          <div>
            <p className={s.kicker}>Your city, A–Z</p>
            <h2 id="directory-title">All Departments & Offices</h2>
          </div>
          <p className={s.resultCount} role="status" aria-live="polite" aria-atomic="true">
            {filtered.length} of {entries.length} departments
            {query && <span> matching “{query}”</span>}
            {categoryLabel && <span> · {categoryLabel}</span>}
            {letter !== "all" && <span> · {letter}</span>}
          </p>
        </div>

        <div className={s.directoryToolbar}>
          <div className={s.alphabet} role="group" aria-label="Filter by initial letter">
            <button
              type="button"
              aria-pressed={letter === "all"}
              onClick={() => setLetter("all")}
            >
              All letters
            </button>
            {letters.map((initial) => (
              <button
                key={initial}
                type="button"
                aria-label={`Departments starting with ${initial}`}
                aria-pressed={letter === initial}
                onClick={() => setLetter(initial)}
              >
                {initial}
              </button>
            ))}
          </div>
          {isFiltered && (
            <button type="button" className={s.reset} onClick={resetFilters}>
              Clear all filters
              <span aria-hidden="true">×</span>
            </button>
          )}
        </div>

        <div className={s.listLabels} aria-hidden="true">
          <span>Department</span>
          <span>Contact & visiting information</span>
          <span>Common requests</span>
        </div>
        <div id="department-results">
          {filtered.length > 0 ? (
            filtered.map((entry) => <div key={entry.id}>{entry.content}</div>)
          ) : (
            <div className={s.emptyState}>
              <Icon name="search" size={32} />
              <h3>No departments found</h3>
              <p>
                Try a service such as “water,” “permits,” or “pothole,” or clear
                your filters to see the full directory.
              </p>
              <button type="button" onClick={resetFilters}>Show all departments</button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Icon, TreeMark } from "@/components/icon";
import { DepartmentDirectory } from "@/components/directory/department-directory";
import { DepartmentListing } from "@/components/directory/department-listing";
import {
  departments,
  departmentCategories,
  getDepartmentSearchText,
} from "@/content/departments";
import { city } from "@/content/city";
import s from "./departments.module.css";

export const metadata: Metadata = {
  title: "Departments & Offices",
  description:
    "Find the people, services, and departments that keep Brookhaven running. Search the city directory by department, function, or service.",
};

export default function DepartmentsPage() {
  const sortedDepartments = [...departments].sort((a, b) =>
    a.name.localeCompare(b.name, "en"),
  );
  const featured = departments
    .filter((department) => department.featuredOrder !== undefined)
    .sort((a, b) => a.featuredOrder! - b.featuredOrder!);
  const entries = sortedDepartments.map((department) => ({
    id: department.id,
    name: department.name,
    categoryId: department.categoryId,
    searchText: getDepartmentSearchText(department),
    content: <DepartmentListing department={department} />,
  }));

  return (
    <main id="main" className={s.page}>
      <div className={`container ${s.composition}`}>
        <section className={s.intro} aria-labelledby="departments-heading">
          <nav aria-label="Breadcrumb" className={s.breadcrumb}>
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Departments & Offices</span>
          </nav>
          <div className={s.introGrid}>
            <div>
              <p className="eyebrow">City Government</p>
              <h1 id="departments-heading">Departments & Offices</h1>
              <span className={s.accent} aria-hidden="true" />
              <p className={s.introCopy}>
                Find the people, services, and departments that keep Brookhaven running.
              </p>
            </div>
            <aside className={s.cityHall} aria-label="City Hall information">
              <TreeMark />
              <div>
                <p className="eyebrow">Here to serve Brookhaven</p>
                <p>{city.address}</p>
                <p>{city.hours}</p>
              </div>
            </aside>
          </div>
          <p className={s.demoNote}>
            Demonstration directory · All contact information is fictional.
            For an actual emergency, call 911.
          </p>
        </section>

        <DepartmentDirectory entries={entries}>
          <section className={s.featured} aria-labelledby="featured-departments-title">
            <div className={s.sectionHeading}>
              <h2 id="featured-departments-title">A good place to start</h2>
              <p>Frequently requested departments</p>
            </div>
            <div className={s.featuredGrid}>
              {featured.map((department) => {
                const category = departmentCategories.find(
                  (item) => item.id === department.categoryId,
                );

                return (
                  <article key={department.id} className={s.featuredDepartment}>
                    <Icon name={category?.icon ?? "building"} size={28} />
                    <div>
                      <h3>{department.name}</h3>
                      <p>{department.description}</p>
                      <a href={`#department-${department.id}`}>
                        Contact & services
                        <Icon name="arrow" size={16} />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </DepartmentDirectory>

        <section id="services" className={s.assistance} aria-labelledby="assistance-title">
          <div>
            <p className="eyebrow">A little help finding your way</p>
            <h2 id="assistance-title">Not sure where to start?</h2>
            <p>
              Tell us what you need help with and we’ll point you in the right direction.
            </p>
          </div>
          <Link href="/residents#services" className={s.finderLink}>
            Open the Resident Service Finder
            <Icon name="arrow" size={24} />
          </Link>
          <div className={s.watermark} aria-hidden="true"><TreeMark /></div>
        </section>
      </div>
    </main>
  );
}

import Link from "next/link";
import { Icon } from "@/components/icon";
import {
  departmentCategories,
  getDepartmentServices,
  type Department,
} from "@/content/departments";
import s from "./department-directory.module.css";

export function DepartmentListing({ department }: { department: Department }) {
  const category = departmentCategories.find(
    (item) => item.id === department.categoryId,
  );
  const relatedServices = getDepartmentServices(department);

  return (
    <article
      id={`department-${department.id}`}
      className={s.department}
      aria-labelledby={`department-${department.id}-name`}
    >
      <div className={s.departmentIntro}>
        <p className={s.categoryLabel}>{category?.label}</p>
        <h3 id={`department-${department.id}-name`}>{department.name}</h3>
        <p>{department.description}</p>
      </div>

      <dl className={s.contact}>
        <div>
          <dt>Contact</dt>
          <dd>
            <a href={`tel:+1${department.contact.phone.replace(/\D/g, "")}`}>
              {department.contact.phone}
            </a>
            <a href={`mailto:${department.contact.email}`}>
              {department.contact.email}
            </a>
          </dd>
        </div>
        <div>
          <dt>Visit</dt>
          <dd>
            {department.contact.location}
            <span>{department.contact.address}</span>
          </dd>
        </div>
        <div>
          <dt>Office hours</dt>
          <dd>{department.contact.hours}</dd>
        </div>
      </dl>

      <div className={s.departmentResources}>
        <p className={s.resourceLabel}>How we can help</p>
        <ul>
          {department.responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>
        <details className={s.departmentDetails}>
          <summary>
            Services & department details
            <Icon name="arrow" size={16} />
          </summary>
          <div>
            {relatedServices.length > 0 && (
              <>
                <p>Related resident services</p>
                <ul>
                  {relatedServices.map((service) => (
                    <li key={service.id}>{service.title}</li>
                  ))}
                </ul>
                <Link href="/residents#services" className={s.inlineLink}>
                  Open the Resident Service Finder
                  <Icon name="arrow" size={16} />
                </Link>
              </>
            )}
            {department.page.status === "published" ? (
              <Link href={department.page.href} className={s.inlineLink}>
                Visit {department.name}
                <Icon name="arrow" size={16} />
              </Link>
            ) : (
              <p className={s.plannedPage}>
                A dedicated {department.name} page is coming later. This directory
                contains the available sample contact information.
              </p>
            )}
          </div>
        </details>
      </div>
    </article>
  );
}

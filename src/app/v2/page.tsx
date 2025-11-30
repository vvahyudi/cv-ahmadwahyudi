import Link from "next/link";
import { FaGlobeAsia, FaEnvelope, FaGlobe } from "react-icons/fa";

import { cn } from "@/lib/utils";
import { poppins } from "@/lib/fonts";
import { RESUME_V2 } from "@/data/resume-v2";

const resumeData = RESUME_V2;

export default function V2Page() {
  return (
    <main
      className={cn(
        "text-sm text-neutral-500 flex flex-col gap-4 md:gap-8",
        "[&_section]:flex [&_section]:flex-col [&_section]:gap-2",
        "[&_h1]:text-2xl [&_h1]:font-bold [&_h1]:text-neutral-900",
        "[&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-neutral-900"
      )}
    >
      {/* about */}
      <section>
        <h1 className={cn(poppins.className)}>{resumeData.name}</h1>

        <p>{resumeData.description}</p>

        <div className="grid sm:grid-cols-2 gap-2">
          <div className="flex items-center gap-1">
            <FaGlobeAsia />
            <p>{resumeData.location}</p>
          </div>

          <Link
            href={`mailto:${resumeData.email}`}
            className="hover:underline underline-offset-4 flex items-center gap-1"
          >
            <FaEnvelope />
            <span>{resumeData.email}</span>
          </Link>

          <Link
            href={resumeData.website.url}
            target="_blank"
            className="hover:underline underline-offset-4 flex items-center gap-1"
          >
            <FaGlobe />
            <span>{resumeData.website.name}</span>
          </Link>
        </div>
      </section>

      {/* skills */}
      <section>
        <h2 className={cn(poppins.className)}>Skills</h2>

        <ul className="flex flex-col gap-2">
          {resumeData.skills.map((skill, index) => (
            <li key={index}>
              <span className="text-neutral-900 font-semibold">{skill.field}: </span>
              <span>{skill.content}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* work experience */}
      <section>
        <h2 className={cn(poppins.className)}>Work Experience</h2>

        <ul className="flex flex-col gap-2">
          {resumeData.experiences.map((experience, index) => (
            <li key={index}>
              <div className="flex justify-between gap-4 items-center">
                <Link href={experience.link} target="_blank">
                  <h3 className="font-semibold text-neutral-900 text-base hover:underline underline-offset-4">
                    {experience.company}
                  </h3>
                </Link>

                <span>{experience.date}</span>
              </div>

              <p className="text-neutral-900">
                {experience.title}{" "}
                {experience.type && (
                  <span>
                    -{" "}
                    <span className="text-neutral-500">{experience.type}</span>
                  </span>
                )}
              </p>

              {experience.descriptions && (
                <ul>
                  {experience.descriptions.map((description, index) => (
                    <li
                      key={index}
                      className="before:content-['▪️'] before:mr-1 before:text-neutral-900"
                    >
                      {description}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* education */}
      <section>
        <h2 className={cn(poppins.className)}>Education</h2>

        <ul className="flex flex-col gap-2">
          {resumeData.education.map((edu, index) => (
            <li key={index}>
              <div className="flex justify-between gap-4 items-center">
                <h3 className="font-semibold text-neutral-900 text-base">
                  {edu.university}
                </h3>

                <p>{edu.date}</p>
              </div>

              <p>{edu.title}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* projects */}
      <section>
        <h2 className={cn(poppins.className)}>Projects</h2>

        <div className="grid xs:grid-cols-2 gap-4">
          {resumeData.projects.map((project, index) => (
            <div
              key={index}
              className="rounded-md border border-neutral-200 p-4 flex flex-col gap-4 justify-between"
            >
              <div className="flex flex-col gap-2">
                {project.link ? (
                  <Link href={project.link} target="_blank">
                    <h3 className="font-semibold text-neutral-900 text-base hover:underline underline-offset-4">
                      {project.name}
                    </h3>
                  </Link>
                ) : (
                  <h3 className="font-semibold text-neutral-900 text-base">
                    {project.name}
                  </h3>
                )}

                <p>{project.description}</p>
              </div>

              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={cn(
                      "text-neutral-900 bg-neutral-100 px-2 py-1 rounded",
                      "print:px-0 print:py-0 print:after:content-[','] print:last:after:content-['.'] print:last:before:content-['and_'] print:lowercase print:first:capitalize"
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

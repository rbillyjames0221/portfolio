"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Printer,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  Layers,
  Sparkles,
} from "lucide-react";
import PageContainer from "@/components/common/page-container";
import { Button } from "@/components/ui/button";
import { experiences } from "@/config/experience";
import { Projects } from "@/config/projects";

export default function ResumePage() {
  const externalResumeLink = process.env.NEXT_PUBLIC_RESUME_LINK;

  const handlePrint = () => {
    window.print();
  };

  return (
    <PageContainer
      title="Resume"
      description="Professional qualifications, experience, education, and technical competencies."
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Action bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-muted/60 border border-border print:hidden">
          <p className="text-sm text-muted-foreground">
            Print or save this resume as a clean PDF document.
          </p>
          <div className="flex items-center gap-3">
            {externalResumeLink && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={externalResumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Original PDF
                </a>
              </Button>
            )}
            <Button size="sm" onClick={handlePrint}>
              <Printer className="w-4 h-4 mr-2" />
              Print / Save PDF
            </Button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-8 sm:p-12 bg-background border border-border rounded-2xl shadow-sm space-y-10 print:border-none print:shadow-none print:p-0">
          {/* Header */}
          <div className="border-b border-border pb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading text-foreground">
                  BILLY JAMES RAMOS
                </h1>
                <p className="text-lg font-medium text-primary mt-1">
                  ICT Systems Developer & Full Stack Engineer
                </p>
              </div>
              <div className="space-y-1.5 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="tel:+639364536500" className="hover:text-foreground">
                    +639364536500
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a
                    href="mailto:rbillyjames0221@gmail.com"
                    className="hover:text-foreground"
                  >
                    rbillyjames0221@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>12 Sitio Bayani C5 Western Bicutan, Taguig City</span>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-primary flex-shrink-0" />
                  <a
                    href="https://github.com/rbillyjames0221"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground"
                  >
                    github.com/rbillyjames0221
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Summary */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-lg font-bold font-heading text-foreground uppercase tracking-wider">
              <Sparkles className="w-5 h-5 text-primary" />
              <h2>Skills Summary</h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Problem-solving and analytical skills
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Fluent in speaking English and can understand
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Website and software development
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                System troubleshooting and debugging
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Database management and system integration
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                UI/UX design and layout optimization
              </li>
            </ul>
          </section>

          {/* Work Experience */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-lg font-bold font-heading text-foreground uppercase tracking-wider">
              <Briefcase className="w-5 h-5 text-primary" />
              <h2>Work Experience</h2>
            </div>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <div>
                      <h3 className="text-base font-bold text-foreground">
                        {exp.position}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground">
                        {exp.company} &bull; {exp.location}
                      </p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-muted text-foreground/80 w-fit">
                      {new Date(exp.startDate).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}{" "}
                      -{" "}
                      {typeof exp.endDate === "string"
                        ? exp.endDate
                        : new Date(exp.endDate).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                          })}
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-sm text-muted-foreground list-disc pl-5">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Educational History */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-bold font-heading text-foreground uppercase tracking-wider">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h2>Educational History</h2>
            </div>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="text-base font-bold text-foreground">
                    BS in Computer Science
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    Centro Escolar University Makati
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-muted text-foreground/80 w-fit">
                  2020 - 2024
                </span>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground list-disc pl-5">
                <li className="font-semibold text-foreground/90">
                  Magna Cum Laude
                </li>
                <li>Outstanding Student 2023-2024</li>
                <li>Gold Medalist - Leadership in Co- and Extracurricular Activities</li>
              </ul>
            </div>
          </section>

          {/* Technical Competencies Matrix */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-bold font-heading text-foreground uppercase tracking-wider">
              <Code className="w-5 h-5 text-primary" />
              <h2>Technical Competencies</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-1 p-3 rounded-lg bg-muted/40 border border-border/50">
                <div className="font-semibold text-foreground">Programming Languages</div>
                <div className="text-muted-foreground">
                  C++, JavaScript, TypeScript, Python, Java, HTML, CSS, PHP
                </div>
              </div>
              <div className="space-y-1 p-3 rounded-lg bg-muted/40 border border-border/50">
                <div className="font-semibold text-foreground">Frameworks & Libraries</div>
                <div className="text-muted-foreground">
                  Next.js, React, Vue.js, Bootstrap, Tailwind CSS, Node.js, Express.js, Prisma ORM, Flask, Laravel
                </div>
              </div>
              <div className="space-y-1 p-3 rounded-lg bg-muted/40 border border-border/50">
                <div className="font-semibold text-foreground">Database Management</div>
                <div className="text-muted-foreground">
                  MySQL, Microsoft SQL Server, PostgreSQL, phpMyAdmin, SQLite, Qdrant Vector Database
                </div>
              </div>
              <div className="space-y-1 p-3 rounded-lg bg-muted/40 border border-border/50">
                <div className="font-semibold text-foreground">Development Tools</div>
                <div className="text-muted-foreground">
                  Visual Studio, Agentic AI IDE Tools, Git, GitHub, GitLab, XAMPP, Postman, NGINX, Cloudflare, Ubuntu / WSL, CMS (Joomla, Wordpress)
                </div>
              </div>
              <div className="space-y-1 p-3 rounded-lg bg-muted/40 border border-border/50 md:col-span-2">
                <div className="font-semibold text-foreground">AI & Workflows</div>
                <div className="text-muted-foreground">
                  Retrieval-Augmented Generation (RAG), Vector search & knowledge bases, Self-hosted LLM integration, AI Powered Chat and admin inbox systems, Automation (n8n - Beginner)
                </div>
              </div>
            </div>
          </section>

          {/* Featured Projects Highlight */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-bold font-heading text-foreground uppercase tracking-wider">
              <Layers className="w-5 h-5 text-primary" />
              <h2>Featured Projects</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {Projects.slice(0, 4).map((p) => (
                <div
                  key={p.id}
                  className="p-3 rounded-lg border border-border bg-card space-y-1"
                >
                  <div className="font-bold text-foreground">{p.companyName}</div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {p.shortDescription}
                  </p>
                  <div className="text-xs text-primary pt-1">
                    {p.techStack.slice(0, 4).join(" &bull; ")}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageContainer>
  );
}

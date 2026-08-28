import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  Boxes,
  Database,
  ExternalLink,
  GitBranch,
  Globe,
  LockKeyhole,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Featured Projects",
  description: "A detailed look at Aman Kumar Yadav's featured CRMSAATHI project.",
};

const technologyGroups = [
  {
    label: "Frontend",
    items: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "TanStack Query"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Socket.io", "JWT Auth"],
  },
  {
    label: "Infrastructure",
    items: ["MongoDB", "Docker", "Nginx", "VPS"],
  },
];

const architecture = [
  { icon: Globe, label: "Web application", detail: "Next.js + React" },
  { icon: Server, label: "API services", detail: "Node.js + Express" },
  { icon: LockKeyhole, label: "Access control", detail: "JWT + RBAC" },
  { icon: Database, label: "Data layer", detail: "MongoDB" },
];

const outcomes = [
  "Centralized customer, inventory, and jobsheet workflows",
  "Role-based dashboards for admins, users, and teams",
  "Responsive experience designed for service-center operations",
  "Real-time communication through Socket.io",
];

const projectDetails = [
  {
    title: "CRMSAATHI - Smart CRM Solutions",
    createdAt: "On Going",
    description:
      "A cloud-based billing and CRM ecosystem for repair shops, service centers, and device retailers, with authentication, inventory, jobsheet management, and role-based dashboards.",
    live: "https://crmsaathi.com",
    repository: "https://github.com/amanroy7632",
    technologies: ["Next.js", "React.js", "MongoDB", "Socket.io", "Docker"],
  },
  {
    title: "ExpertBells - 1:1 Mentorship & Business Consulting",
    createdAt: "On Going",
    description:
      "A mentorship and consulting platform connecting startups and professionals with experts through bookings, video consultations, business advisory services, and multi-role dashboards.",
    live: "https://expertbells.org",
    repository: "https://github.com/amanroy7632",
    technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "TanStack Query"],
  },
  {
    title: "D2C AI Growth Summit - Annual Networking Event",
    createdAt: "21-07-2026",
    description:
      "An event platform connecting D2C founders, investors, and ecosystem leaders through speaker sessions, AI workshops, networking, exhibitions, and multiple pass tiers.",
    live: "https://summit.d2ccircle.com/passes",
    repository: "https://github.com/amanroy7632",
    technologies: ["Next.js", "React.js", "Event Platform", "Payments"],
  },
  {
    title: "D2C Circle - 7-Week D2C Accelerator Program",
    createdAt: "11-06-2026",
    description:
      "A live accelerator program for D2C founders with expert-led sessions, practical growth frameworks, investor access, pitch opportunities, and a private founder community.",
    live: "https://d2ccircle.com/register",
    repository: "https://github.com/amanroy7632",
    technologies: ["Next.js", "React.js", "Program Platform", "Payments"],
  },
  {
    title: "CRMJIO - Smart CRM Solutions",
    createdAt: "06-05-2026",
    description:
      "A smart CRM and billing platform that helps repair businesses manage customers, inventory, jobsheets, teams, and service operations from one workspace.",
    live: "https://crmjio.com",
    repository: "https://github.com/amanroy7632",
    technologies: ["Next.js", "React.js", "MongoDB", "TanStack Query", "Nginx"],
  },
  {
    title: "Dr iPhone Repair - Booking & Admin Portal",
    createdAt: "01-01-2026",
    description:
      "A booking and administration system for appointments, repair tracking, technicians, inventory, customer communication, analytics, payments, and multiple service centers.",
    live: "https://driphonerepair.com/repair",
    repository: "https://github.com/amanroy7632",
    technologies: ["Next.js", "React.js", "TypeScript", "Node.js", "MongoDB"],
  },
  {
    title: "Dr iPhone Repair - Service Platform",
    createdAt: "25-11-2025",
    description:
      "A customer-facing repair platform offering transparent pricing, certified technicians, genuine parts warranty, doorstep service, appointments, and repair status tracking across Delhi NCR.",
    live: "https://driphonerepair.com",
    repository: "https://github.com/amanroy7632",
    technologies: ["Next.js", "React.js", "Booking System", "Customer Portal"],
  },
  {
    title: "Portfolio",
    createdAt: "26-08-2025",
    description:
      "A personal portfolio showcasing projects, experience, technical skills, contact options, project details, and a responsive interface built with a strong developer-focused visual system.",
    live: "https://iamandaa.vercel.app/",
    repository: "https://github.com/amanroy7632/next-portfolio",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Resend"],
  },
  {
    title: "Trendkari - Trending Blogs",
    createdAt: "30-10-2025",
    description:
      "A content and trends website covering fashion, lifestyle, technology, entertainment, and seasonal topics, with accounts, publishing, likes, and comments.",
    live: "https://trendkari.in",
    repository: "https://github.com/Amanroy7632",
    technologies: ["React.js", "JavaScript", "MongoDB", "Node.js", "OAuth"],
  },
  {
    title: "Book My Adventure",
    createdAt: "30-10-2024",
    description:
      "A bus booking platform with ticket booking, bus schedules, live tracking, administrative tracking, authentication, and a responsive user experience.",
    live: "https://book-my-adventure.vercel.app",
    repository: "https://github.com/Amanroy7632/Book-my-adventure",
    technologies: ["React.js", "JavaScript", "MongoDB", "Node.js", "OAuth"],
  },
  {
    title: "CRMsWEB",
    createdAt: "22-11-2023",
    description:
      "A CRM for small businesses with contact management, sales tracking, pipeline dashboards, activity tracking, reporting, integrations, and newsletter content.",
    live: "https://crmsweb.vercel.app/",
    repository: "https://github.com/Amanroy7632/crmsweb",
    technologies: ["Next.js", "TypeScript", "Prisma", "Supabase", "Zod"],
  },
  {
    title: "Student Database Management System",
    createdAt: "10-03-2023",
    description:
      "A command-line C++ application that helps students and lecturers manage academic marks, attendance, activities, and file-based CRUD operations.",
    live: "https://github.com/Amanroy7632/Student-Database-System",
    repository: "https://github.com/Amanroy7632/Student-Database-System",
    technologies: ["C++", "File Handling", "CRUD", "DSA"],
  },
];

const projectScreenshots: Record<string, { src: string; alt: string; caption: string }[]> = {
  "CRMJIO - Smart CRM Solutions": [
    {
      src: "/crmjio/sc1.png",
      alt: "CRMJIO landing page for repair shop CRM and billing software",
      caption: "Product landing page and repair-shop positioning",
    },
    {
      src: "/crmjio/sc2.png",
      alt: "CRMJIO dashboard showing jobs, customers, inventory, and service status",
      caption: "Jobsheet dashboard and service operations",
    },
  ],
  "Trendkari - Trending Blogs": [
    {
      src: "/trendkari/sc1.png",
      alt: "Trendkari article page showing a Hindi news story",
      caption: "Article reading experience",
    },
    {
      src: "/trendkari/sc2.png",
      alt: "Trendkari city feed showing a grid of local news articles",
      caption: "City-based content discovery feed",
    },
  ],
  "D2C Circle - 7-Week D2C Accelerator Program": [
    {
      src: "/d2ccircle/sc1.png",
      alt: "D2C Circle landing page promoting a seven-week accelerator program",
      caption: "Accelerator program landing page",
    },
    {
      src: "/d2ccircle/sc2.png",
      alt: "D2C Circle transparent cohort fees and program benefits page",
      caption: "Cohort pricing and program benefits",
    },
  ],
  "D2C AI Growth Summit - Annual Networking Event": [
    {
      src: "/summit/sc1.png",
      alt: "D2C AI Growth Summit event landing page with date, venue, and pass details",
      caption: "Summit event landing page",
    },
  ],
  "Dr iPhone Repair - Service Platform": [
    {
      src: "/driphone/sc1.png",
      alt: "Dr iPhone Repair website hero showing MacBook repair services",
      caption: "MacBook repair service landing page",
    },
    {
      src: "/driphone/sc2.png",
      alt: "Dr iPhone Repair website showing iPhone and Apple repair services",
      caption: "iPhone and Apple repair service catalogue",
    },
  ],
  "Book My Adventure": [
    {
      src: "/book-my/sc1.png",
      alt: "Book My Adventure bus ticket booking homepage with route and date search",
      caption: "Bus ticket booking homepage",
    },
  ],
  CRMsWEB: [
    {
      src: "/crmsweb/sc1.png",
      alt: "CRMsWEB SaaS landing page showing features, pricing, blog, and sign-up actions",
      caption: "SaaS platform landing page",
    },
  ],
  "ExpertBells - 1:1 Mentorship & Business Consulting": [
    {
      src: "/expertbells/sc1.png",
      alt: "ExpertBells mentorship platform homepage with mentor discovery and session booking actions",
      caption: "Mentorship platform homepage",
    },
    {
      src: "/expertbells/sc2.png",
      alt: "ExpertBells mentor discovery page with search, filters, expertise categories, and mentor profiles",
      caption: "Mentor discovery and filtering experience",
    },
    {
      src: "/expertbells/sc3.png",
      alt: "ExpertBells mentee dashboard showing sessions, recommended mentors, messages, and notifications",
      caption: "Mentee dashboard and session management",
    },
    {
      src: "/expertbells/sc4.png",
      alt: "ExpertBells mentor dashboard showing upcoming sessions, purchased packages, and mentor profile recommendations",
      caption: "Mentor dashboard and session operations",
    },
  ],
  Portfolio: [
    {
      src: "/portfolio/sc1.png",
      alt: "Aman.Dev portfolio homepage showing profile, contact details, social links, and project sections",
      caption: "Latest portfolio design",
    },
    {
      src: "/portfolio/sc2.png",
      alt: "Aman Kumar Yadav portfolio landing page with navigation, profile introduction, social links, and resume action",
      caption: "Oldest portfolio design",
    },
  ],
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen border-x border-border md:mx-auto md:max-w-5xl">
      <header className="flex items-center justify-between border-b px-4 py-4 sm:px-8">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/">
            <ArrowLeft />
            Back to portfolio
          </Link>
        </Button>
        <span className="font-mono text-xs text-muted-foreground">01 / FEATURED</span>
      </header>

      <section className="relative overflow-hidden border-b px-4 py-16 sm:px-8 sm:py-24">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:42px_42px] opacity-35" />
        <div className="max-w-3xl">
          <p className="mb-4 font-mono text-sm text-muted-foreground">Featured project / ongoing</p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
            CRMSAATHI
            <span className="block text-muted-foreground">Smart CRM solutions for repair teams.</span>
          </h1>
          <p className="mt-6 max-w-2xl font-mono text-sm leading-7 text-muted-foreground sm:text-base">
            CRMSAATHI is a cloud-based billing and CRM platform built for repair shops, service
            centers, and device retailers. It brings authentication, inventory, jobsheets, and
            team workflows together in one reliable system.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href="https://crmsaathi.com" target="_blank" rel="noopener noreferrer">
                Visit live product
                <ArrowUpRight />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/amanroy7632" target="_blank" rel="noopener noreferrer">
                Repository
                <ExternalLink />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b px-4 py-8 sm:px-8 sm:py-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase text-muted-foreground">Product views</p>
            <h2 className="mt-2 text-2xl font-semibold">A closer look at CRMSAATHI.</h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">02 screens</span>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <figure className="overflow-hidden border bg-muted/30">
            <Image
              src="/crmsaathi/sc1.png"
              alt="CRMSAATHI landing page showing repair, pharmacy, and school workflows"
              width={1600}
              height={900}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <figcaption className="border-t px-4 py-3 font-mono text-xs text-muted-foreground">
              Multi-industry product landing page
            </figcaption>
          </figure>
          <figure className="overflow-hidden border bg-muted/30">
            <Image
              src="/crmsaathi/sc2.png"
              alt="CRMSAATHI dashboard and blog interface showing operational modules"
              width={1600}
              height={900}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <figcaption className="border-t px-4 py-3 font-mono text-xs text-muted-foreground">
              Operations dashboard and knowledge centre
            </figcaption>
          </figure>
          <figure className="overflow-hidden border bg-muted/30">
            <Image
              src="/crmsaathi/sc3.png"
              alt="CRMSAATHI article hub showing categories, search, and operational guides"
              width={1600}
              height={900}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <figcaption className="border-t px-4 py-3 font-mono text-xs text-muted-foreground">
              Article hub for operational guides
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="grid border-b sm:grid-cols-3">
        {[
          ["Role", "Full-stack engineer"],
          ["Status", "Ongoing"],
          ["Focus", "Repair operations"],
        ].map(([label, value]) => (
          <div key={label} className="border-b px-4 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-8 sm:last:border-r-0">
            <p className="font-mono text-xs uppercase text-muted-foreground">{label}</p>
            <p className="mt-2 font-medium">{value}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-10 border-b px-4 py-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="font-mono text-xs uppercase text-muted-foreground">The challenge</p>
          <h2 className="mt-3 text-2xl font-semibold">Make repair operations easier to run.</h2>
          <p className="mt-5 leading-7 text-muted-foreground">
            Repair businesses often manage customers, devices, inventory, and jobsheets across
            disconnected tools. CRMSAATHI brings those steps into one system while keeping the
            interface quick enough for day-to-day service-center work.
          </p>
          <p className="mt-5 leading-7 text-muted-foreground">
            The product is designed around role-based access, dependable data flows, responsive
            screens, and real-time updates for teams working together.
          </p>
        </div>
        <div className="border border-border bg-muted/30 p-5 sm:p-6">
          <div className="mb-5 flex items-center justify-between border-b pb-4">
            <span className="font-mono text-xs uppercase text-muted-foreground">System map</span>
            <GitBranch className="size-4 text-muted-foreground" />
          </div>
          <div className="space-y-3">
            {architecture.map(({ icon: Icon, label, detail }, index) => (
              <div key={label} className="flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center border bg-background">
                  <Icon className="size-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{label}</p>
                  <p className="font-mono text-xs text-muted-foreground">{detail}</p>
                </div>
                {index < architecture.length - 1 && (
                  <span className="font-mono text-xs text-muted-foreground">↓</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-12 border-b px-4 py-12 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase text-muted-foreground">What I built</p>
          <h2 className="mt-3 text-2xl font-semibold">From authentication to daily operations.</h2>
          <ul className="mt-6 space-y-4 font-mono text-sm leading-6 text-muted-foreground">
            {outcomes.map((outcome) => (
              <li key={outcome} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 bg-foreground" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase text-muted-foreground">Technology</p>
          <div className="mt-5 space-y-6">
            {technologyGroups.map(({ label, items }) => (
              <div key={label}>
                <div className="mb-3 flex items-center gap-2">
                  <Boxes className="size-4 text-muted-foreground" />
                  <h3 className="font-medium">{label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="border px-2 py-1 font-mono text-xs text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b px-4 py-12 sm:px-8">
        <div className="flex flex-col gap-3 border-b pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase text-muted-foreground">Project archive</p>
            <h2 className="mt-3 text-2xl font-semibold">All project details.</h2>
          </div>
          <p className="font-mono text-sm text-muted-foreground">{projectDetails.length} projects</p>
        </div>
        <div className="divide-y">
          {projectDetails.map((project, index) => (
            <article key={project.title} className="grid gap-6 py-8 lg:grid-cols-[4rem_1fr_auto] lg:gap-8">
              <span className="font-mono text-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">{project.createdAt}</p>
                  </div>
                  <div className="flex gap-3 font-mono text-xs">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
                      Live <ArrowUpRight className="size-3" />
                    </a>
                    <a href={project.repository} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
                      Code <ExternalLink className="size-3" />
                    </a>
                  </div>
                </div>
                <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">{project.description}</p>
                {projectScreenshots[project.title] && (
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {projectScreenshots[project.title].map((screenshot) => (
                      <figure key={screenshot.src} className="overflow-hidden border bg-muted/30">
                        <Image
                          src={screenshot.src}
                          alt={screenshot.alt}
                          width={1600}
                          height={900}
                          className="h-auto w-full"
                          sizes="(min-width: 640px) 50vw, 100vw"
                        />
                        <figcaption className="border-t px-3 py-2 font-mono text-xs text-muted-foreground">
                          {screenshot.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="border px-2 py-1 font-mono text-xs text-muted-foreground">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="flex flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono text-sm text-muted-foreground">More projects are available on the portfolio.</p>
        <Button variant="outline" asChild>
          <Link href="/#projects">
            Explore all projects
            <ArrowUpRight />
          </Link>
        </Button>
      </footer>
    </main>
  );
}

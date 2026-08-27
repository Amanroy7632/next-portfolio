"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Box2LineIcon,
} from "@/components/ui/accordion";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
function ProjectsSection() {
  const [showMore, setShowMore] = useState(false);
  const [openItem, setOpenItem] = useState("project-1");
  const filteredProjects = showMore ? projects : projects.slice(0, 4);
  return (
    <section className=" border-x full-line-bottom relative">
      <h2 className="pl-4 text-3xl font-semibold relative full-line-bottom ">
        Projects{" "}
        <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
          ({projects.length})
        </sup>
      </h2>
      <div className="">
        {filteredProjects.map((project, index) => (
          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={setOpenItem}
            key={index}
          >
            <AccordionItem value={`project-${project.id}`}>
              <AccordionTrigger aria-label={project.createdAt}>
                <div className="flex items-center justify-between p-4 h-full w-fit ">
                  <div className="  size-6 shrink-0">
                    <Box2LineIcon />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center py-4 pl-4 border-l font-mono gap-1 h-full">
                  <h3 className="text-balance font-medium text-base leading-snug flex gap-2 items-center justify-center ">
                    {project.title}
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowUpRight className="size-4 text-muted-foreground hover:text-primary" />
                    </a>
                  </h3>
                  <span className="text-muted-foreground text-xs  ">
                    {project.createdAt}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-4 border-b">
                <div className="prose prose-sm max-w-none font-mono text-foreground prose-zinc dark:prose-invert prose-headings:font-sans prose-headings:font-semibold prose-headings:text-balance prose-h2:border-b prose-h2:border-edge prose-h2:pb-2 prose-h2:text-2xl prose-lead:text-base prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:border-edge">
                  <p>{project.description}</p>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.badge.map((badge, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-lg border bg-zinc-50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground dark:bg-zinc-900"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <div className="mt-0 flex items-center gap-4 justify-start">
                    <a
                      href={project.href}
                      target="_blank"
                      className="mt-4 flex  hover:text-primary gap-2 items-center justify-center "
                    >
                      Github Repository{" "}
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      className="mt-4 flex  hover:text-primary gap-2  items-center justify-center "
                    >
                      Live demo{" "}
                    </a>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>

      <div className="flex items-center py-2 justify-center">
        {showMore ? (
          <Button
            size={"sm"}
            onClick={() => setShowMore(false)}
            className="rounded-2xl flex items-center gap-2"
          >
            Show Less <ChevronUp />
          </Button>
        ) : (
          <Button
            size={"sm"}
            onClick={() => setShowMore(true)}
            className="rounded-2xl flex items-center gap-2"
          >
            Show More <ChevronDown />
          </Button>
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;
const projects = [
  {
    id: 1,
    title: "CRMSAATHI - Smart CRM Solutions",
    href: "https://github.com/amanroy7632",
    live: "https://crmsaathi.com",
    createdAt: "On Going",
    description:
      "CRMSAATHI positions itself as a leading billing and CRM solution tailored specifically for repair shops, service centers, and device retailers. Whether you're managing mobile, electronics, automotive, or appliance repair, CRMJIO provides a comprehensive, cloud-based ecosystem for business efficiency",
    features: [
      "User authentication including sign up, sign in, and logout",
      "Role Based Authentication & Authorization",
      "Inventory & Jobsheet Management",
      "Customizable user interface",
      "Responsive user interface design",
      "Multiple Dashboards Admin,Users,Teams",
      "Built with Next.js 14 framework",
      "Data stored in MongoDb",
      "Efficient data fetching using Tanstack Query",
      "Modern UI components styled with Tailwind CSS & React-icons",
    ],
    badge: [
      "CRM Services",
      "React.js",
      "Typescript",
      "Jwt Auth",
      "MongoDb",
      "Socket.io",
      "Tailwind CSS",
      "Tanstack Query",
      "VPS",
      "Nginx",
      "Docker"
    ],
  },
    {
    id: 2, // Adjust the ID based on its position in your projects array
    title: "ExpertBells - 1:1 Mentorship & Business Consulting",
    href: "https://github.com/amanroy7632",
    live: "https://expertbells.org",
    createdAt: "On Going",
    description:
      "ExpertBells is a comprehensive mentorship and business consulting platform that connects startups, entrepreneurs, and professionals with industry experts. It streamlines 1:1 video consultations, business advisory, and corporate compliance services within a scalable ecosystem.",
    features: [
      "1:1 Mentorship session booking & appointment scheduling",
      "Dedicated multi-role dashboards for Users, Mentors, and Super Admins",
      "Role-Based Authentication & Authorization (RBAC)",
      "Business advisory & legal compliance service catalog",
      "Secure payment gateway integration & invoice generation",
      "Real-time notifications & booking status management",
      "Responsive and modern UI built with Next.js / React and Tailwind CSS",
      "Scalable REST API backend with MongoDB database integration",
      "State & server data synchronization using TanStack Query",
    ],
    badge: [
      "Mentorship Platform",
      "Next.js",
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "Tailwind CSS",
      "TanStack Query",
      "Socket.io",
      "REST API"
    ],
  },

  {
    id: 3,
    title: "CRMJIO - Smart CRM Solutions",
    href: "https://github.com/amanroy7632",
    live: "https://crmjio.com",
    createdAt: "06-05-2026",
    description:
      "CRMJIO positions itself as a leading billing and CRM solution tailored specifically for repair shops, service centers, and device retailers. Whether you're managing mobile, electronics, automotive, or appliance repair, CRMJIO provides a comprehensive, cloud-based ecosystem for business efficiency",
    features: [
      "User authentication including sign up, sign in, and logout",
      "Role Based Authentication & Authorization",
      "Inventory & Jobsheet Management",
      "Customizable user interface",
      "Responsive user interface design",
      "Multiple Dashboards Admin,Users,Teams",
      "Built with Next.js 14 framework",
      "Data stored in MongoDb",
      "Efficient data fetching using Tanstack Query",
      "Modern UI components styled with Tailwind CSS & React-icons",
    ],
    badge: [
      "CRM Services",
      "React.js",
      "JavaScript",
      "Typescript",
      "Jwt Auth",
      "MongoDb",
      "Socket.io",
      "Tailwind CSS",
      "Tanstack Query",
      "VPS",
      "Nginx",
    ],
  },
  {
    id: 4,
    title: "Dr iPhone Repair - Service Platform",
    href: "https://driphonerepair.com",
    live: "https://driphonerepair.com",
    createdAt: "On Going",
    description: "Dr iPhone Repair is a leading mobile and Apple device repair center offering professional repair services across Delhi NCR (Dwarka, South Delhi, Gurgaon). The platform provides transparent pricing, certified technicians, genuine parts warranty, and doorstep repair services for iPhone, iPad, MacBook, Apple Watch, and Android devices.",
    features: [
      "Comprehensive device repair services for iPhone, iPad, MacBook, Apple Watch, and Android phones",
      "Certified and background-verified technicians with advanced repair tools",
      "Transparent upfront pricing model",
      "High-quality genuine parts with up to 1-year warranty",
      "Fast repair turnaround (30-45 minutes for most services)",
      "Doorstep pickup and drop service across Delhi NCR",
      "Professional service centers in Dwarka Sector 7, South Delhi, and Gurgaon",
      "Real-time booking and appointment scheduling",
      "Customer testimonials and service reliability tracking",
      "Extended warranty and repair guarantees",
    ],
    badge: [
      "Mobile Repair",
      "Apple Services",
      "Android Repair",
      "Service Platform",
      "Next.js",
      "React.js",
      "Booking System",
      "Delhi NCR",
      "E-commerce",
      "Customer Portal"
    ],
  },
  {
    id: 5,
    title: "Dr iPhone Repair - Booking & Admin Portal",
    href: "https://driphonerepair.com",
    live: "https://driphonerepair.com/repair",
    createdAt: "On Going",
    description: "Advanced booking and admin management system for Dr iPhone Repair that handles customer appointments, repair tracking, technician management, and service analytics. The system enables seamless online booking, real-time repair status tracking, and comprehensive business intelligence for operations across multiple service centers.",
    features: [
      "Unified booking system for multiple service centers and repair types",
      "Real-time appointment scheduling with automatic slot management",
      "Repair tracking dashboard with live status updates for customers",
      "Multi-role admin panel for technicians, managers, and super admins",
      "Inventory management system for spare parts and components",
      "Customer communication via email and in-app notifications",
      "Performance analytics and service metrics dashboard",
      "Payment integration for online booking confirmations",
      "Service history and warranty management for each customer",
      "Mobile-responsive design for seamless user experience",
      "Integration with mapping services for doorstep service tracking",
    ],
    badge: [
      "Admin Portal",
      "Booking System",
      "Next.js",
      "React.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "REST API",
      "Real-time Updates",
      "Analytics Dashboard",
      "Responsive Design"
    ],
  },
  {
    id: 6,
    title: "Trendkari - Trending Blogs",
    href: "https://github.com/Amanroy7632",
    live: "https://trendkari.in",
    createdAt: "30-10-2025",
    description: "TrendKari.in is a content/trends website that publishes trending topics and articles across various categories such as fashion, lifestyle, tech, entertainment, and more.",
    features: [
      "Important days and events of the year",
      "Seasonal greetings & inspirational content",
      "Users can create account and upload their blogs",
      "Users can view and like comment on the posts",
      "User-friendly interface for easy navigation",
      "Built with React.js library",
      "Manual Authentication powered by 0auth",
      "Data stored in MongoDb",
      "Modern UI components styled with React-icons and Tailwind CSS",
    ],
    badge: [
      "React.js",
      "JavaScript",
      "Oauth",
      "Tailwind CSS",
      "MongoDb",
      "Node.js",
      "Vercel",
      "Collabrate"
    ],
  },
  {
    id: 7,
    title: "Book My Adventure",
    href: "https://github.com/Amanroy7632/Book-my-adventure",
    live: "https://book-my-adventure.vercel.app",
    createdAt: "30-10-2024",
    description: "A bus booking platform similar to MakeMyTrip.",
    features: [
      "Book Bus tickets",
      "Live tracking of the buses",
      "Tracking of buses from Admin Pannel",
      "Bus Timing Schedule",
      "User-friendly interface for easy navigation",
      "Built with React.js library",
      "Manual Authentication powered by 0auth",
      "Data stored in MongoDb",
      "Modern UI components styled with React-icons and Tailwind CSS",
    ],
    badge: [
      "Open source",
      "React.js",
      "JavaScript",
      "Oauth",
      "Tailwind CSS",
      "MongoDb",
      "Node.js",
      "Hostinger VPS",
    ],
  },
  {
    id: 8,
    title: "Portfolio",
    href: "https://github.com/amanroy7632/next-portfolio",
    live: "https://iamandaa.vercel.app/",
    createdAt: "26-08-2025",
    description:
      "My personal portfolio website showcasing my skills, projects, and experiences. Built with modern web technologies to provide a seamless user experience and highlight my work effectively.",
    features: [
      "Responsive design for all devices",
      "Showcase of my projects with detailed descriptions",
      "Integration with GitHub for project links",
      "Contact form for inquiries",
      "Built with Next.js 15 framework",
      "Modern UI components styled with shadcn-ui and Tailwind CSS",
    ],
    badge: [
      "Open source",
      "Next.js",
      "Typescript",
      "Framer motion",
      "Tailwind CSS",
      "Shadcn UI",
      "Resend",
    ],
  },
 
  {
    id: 9,
    title: "CRMsWEB",
    href: "https://github.com/Amanroy7632/crmsweb",
    live: "https://crmsweb.vercel.app/",
    createdAt: "22-11-2023",
    description:
"CRM for small businesses, sales tracking, customer support automation",
    features: [
      "CRM for small businesses, sales tracking, customer support automation",
      "ontact management, pipeline dashboards, activity tracking, reporting, integrations",
      "Read newsletters with a clean and minimalistic design",
      "Responsive user interface design",
      "Built with Next.js 15 framework",
      "Data stored in Supabase",
      "Modern UI components styled with shadcn-ui and Tailwind CSS",
    ],
    badge: [
      "Open source",
      "Next.js",
      "Typescript",
      "Prisma",
      "React hook form",
      "React snowfall",
      "Resend",
      "Zod",
      "Tailwind CSS",
      "Shadcn UI",
    ],
  },
   {
    id: 10,
    title: "Student Database Management System",
    href: "https://github.com/Amanroy7632/Student-Database-System",
    live: "https://github.com/Amanroy7632/Student-Database-System",
    createdAt: "10-03-2023",
    description:
      "A command line-based software that helps students and teachers to manage their acedimics activity.",
    features: [
      "Developed in C++",
      "Students and lecturers can use this software to know the details of their marks, attendences and activity.",
      "Supports file handling CRUD operation",
    ],
    badge: [
      "Open source",
      "C++",
      "File Handling",
      "Logics",
      "DSA",
      "C++ Animation",
    ],
  },
  {
    id: 11,
    title: "D2C Circle - 7-Week D2C Accelerator Program",
    href: "https://d2ccircle.com",
    live: "https://d2ccircle.com/register",
    createdAt: "On Going",
    description: "D2C Circle is a comprehensive 7-week live accelerator program designed to help early-stage and growth D2C founders build and scale their consumer brands to ₹100+ crore. The program combines expert-led masterclasses, practical frameworks, investor connections, and peer learning within a curated community of 30+ ambitious founders.",
    features: [
      "14 live expert-led sessions covering product-market fit, brand positioning, and growth strategies",
      "7-module curriculum: Launch Ready, Digital Presence, Performance Marketing, Marketplace Domination, Retention, Investor Readiness, Pitching & Funding",
      "AI-focused growth tools and playbooks for quick commerce (Zepto, Blinkit) and marketplace scaling (Amazon, Flipkart)",
      "One-day residential program in Gurugram with networking and pitch demonstrations",
      "Access to 10+ industry experts, Shark Tank founders, and venture capital investors",
      "Investor pitch opportunity at Demo Day with active VCs and angel investors",
      "Lifetime alumni community with continued access to recordings and resources",
      "Includes freebies worth ₹10,000+ (accounting software, investor database, business documents)",
      "Personalized GTM (Go-To-Market) plans and investor-ready pitch deck creation",
      "Peer learning via private WhatsApp community and founder mastermind sessions",
    ],
    badge: [
      "D2C Accelerator",
      "Startup Program",
      "Founder Network",
      "Investor Access",
      "Live Cohort",
      "Mentorship",
      "E-commerce Growth",
      "Marketing Strategy",
      "Quick Commerce",
      "Fundraising Prep"
    ],
  },
  {
    id: 12,
    title: "D2C AI Growth Summit - Annual Networking Event",
    href: "https://summit.d2ccircle.com",
    live: "https://summit.d2ccircle.com/passes",
    createdAt: "On Going",
    description: "D2C AI Growth Summit is India's premier annual event bringing together 250+ D2C founders, investors, and ecosystem leaders for a day of strategic learning, high-value networking, and business acceleration. The summit focuses on AI-driven growth strategies and connects the Indian D2C ecosystem with global opportunities.",
    features: [
      "One-day flagship offline summit with 250+ D2C founders, investors, and industry leaders",
      "25+ renowned speakers including Shark Tank alumni, VC partners, and serial entrepreneurs",
      "Keynote sessions on AI's future in consumer brands and D2C transformation",
      "Fireside chats and panel discussions with successful brand founders and investors",
      "Hands-on AI masterclasses and practical growth workshops",
      "Startup hub and curated founder networking zones",
      "India-Global Business Corridor connecting international and domestic opportunities",
      "Live product showcases and brand exhibition areas",
      "Investor access and pitching opportunities for founders",
      "Government and ecosystem partnership pavilions",
      "Learning topics: AI tools, Q-commerce strategy, marketplace scaling, brand growth playbooks",
      "Multiple pass tiers (Silver, Gold, Platinum, Residential) with exclusive networking perks",
    ],
    badge: [
      "D2C Summit",
      "Networking Event",
      "Founder Community",
      "Investor Pitching",
      "AI & Growth",
      "Live Event",
      "Speaker Series",
      "Exhibition",
      "Q-Commerce",
      "Marketplace Strategy",
      "Global Connections"
    ],
  },
];

import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Linkedin, Github, Building2, Calendar, GraduationCap, CalendarDays, FolderGit2, ExternalLink, Mail, MapPin, Package } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "@assets/WhatsAppImage2026-01-22at11.19.37PM_1771295142078.jpeg";
import { Card as ProjectCard, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const profileData = {
  name: "Aravind Anbalagan",
  title: "Senior Backend & DevOps Engineer (.NET | Azure)",
  bio: "Senior Backend & DevOps Engineer with 9+ years of continuous full-time experience delivering enterprise-grade software solutions. Strong background in C#, .NET MVC/Web API, ETL systems, API development, system monitoring, automation, and AI-enabled document processing. Proven ability to support long-running production systems, improve performance, and work closely with business stakeholders.",
  email: "aravindiaar@gmail.com",
  location: "Hamilton, New Zealand",
  githubUrl: "https://github.com/aravindiaar",
  nugetUrl: "https://www.nuget.org/profiles/Aravindiaar",
  linkedinUrl: "https://www.linkedin.com/in/aravindiaar/",
};

const experiencesData = [
  {
    id: 1,
    company: "DSRC, Chennai, India",
    position: "Senior Software Engineer & DevOps Engineer",
    period: "March 2016 – Present",
    description: "Accumulated over 9 years of hands-on industry experience delivering backend, integration, and automation solutions across multiple enterprise domains.\n\nDesigned and developed backend systems using C#, .NET MVC, ASP.NET Web API, and REST APIs supporting internal and customer-facing applications.\n\nOwned full application lifecycle including development, deployment, monitoring, and production support.\n\nLed performance improvement initiatives, reducing API response times and improving system stability across projects.\n\nBuilt CI/CD pipelines and automated deployments using Azure DevOps, Jenkins, Docker, and scripting.\n\nActively supported production environments, handling incidents, root-cause analysis, and long-term fixes."
  }
];

const educationData = [
  { id: 1, institution: "India", degree: "Bachelor of Engineering – Computer Science", period: "" }
];

const skillsData = [
  { category: "Backend & APIs", skills: ["C#", ".NET", "ASP.NET MVC", "ASP.NET Web API", "RESTful Services"] },
  { category: "Scripting & Services", skills: ["Node.js", "Python"] },
  { category: "Frontend", skills: ["JavaScript"] },
  { category: "Databases", skills: ["Microsoft SQL Server", "PostgreSQL", "MySQL", "Redis"] },
  { category: "Cloud & DevOps", skills: ["Microsoft Azure", "Azure DevOps", "Docker", "Jenkins", "CI/CD"] },
  { category: "Engineering Practices", skills: ["ETL Pipelines", "API Monitoring", "Performance Tuning", "Git", "PowerShell", "Linux Automation"] },
];

const projectsData = [
  { id: 1, title: "HRMS Platform", description: "Built ASP.NET MVC modules using C#, JavaScript, and MSSQL to manage employee data, attendance, and reporting.", technologies: "C#, JavaScript, MSSQL", duration: "6 months" },
  { id: 2, title: "Aspose Document Converter", description: "Developed C# console applications for automated document conversion using Aspose libraries.", technologies: "C#, Aspose", duration: "6 months" },
  { id: 3, title: "Positive Equity System", description: "Delivered MVC-based financial application handling data processing, validation, and reporting.", technologies: "ASP.NET MVC, C#", duration: "1 year" },
  { id: 4, title: "Vet Australia", description: "Developed and maintained ASP.NET Web API services supporting veterinary monitoring and operational workflows.", technologies: "ASP.NET Web API, C#", duration: "1 year" },
  { id: 5, title: "Proagrica", description: "Built backend APIs using C# and Web API for agribusiness platforms, ensuring data accuracy and reliability.", technologies: "C#, Web API", duration: "1 year" },
  { id: 6, title: "Evi View – ETL Platform", description: "Designed and implemented ETL APIs in C# to ingest data from APIs and Excel sources into relational databases for analytics.", technologies: "C#, ETL, SQL", duration: "1 year" },
  { id: 7, title: "SFC – IVR & AI Automation", description: "Supported backend integration for IVR-based call automation and AI-driven workflows.", technologies: "C#, AI, IVR", duration: "1 year" },
  { id: 8, title: "Supplier Gateway", description: "Developed Node.js services for intelligent document ingestion and retrieval.", technologies: "Node.js", duration: "" },
  { id: 9, title: "KeyHouse", description: "Built Python-based backend services for AI-driven document processing and search.", technologies: "Python, AI", duration: "" },
  { id: 10, title: "Database Migration Utilities", description: "Developed Python tools to migrate data between PostgreSQL and MSSQL with validation and reconciliation.", technologies: "Python, PostgreSQL, MSSQL", duration: "" },
];

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 border-b border-border/50 last:border-b-0">
      {children}
    </section>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">{title}</h2>
      <p className="text-lg text-muted-foreground">{subtitle}</p>
      <div className="mt-4 h-1 w-16 bg-primary rounded-full" />
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      {/* About Section */}
      <Section id="about">
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center lg:items-start">
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-muted-foreground font-medium tracking-wide uppercase text-sm mb-2">Hello, I'm</h3>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 leading-tight" data-testid="text-name">
                {profileData.name}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light" data-testid="text-title">
                {profileData.title}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-lg text-muted-foreground leading-relaxed"
            >
              <p data-testid="text-bio">{profileData.bio}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a href="#projects">
                <Button size="lg" className="rounded-full px-8 gap-2 group" data-testid="button-view-work">
                  View Work
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-4 pt-8 border-t border-border"
            >
              <a href={profileData.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-muted-foreground" data-testid="link-github">
                  <Github className="w-5 h-5" />
                </Button>
              </a>
              <a href={profileData.linkedinUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-muted-foreground" data-testid="link-linkedin">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>
              <a href={profileData.nugetUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-muted-foreground" data-testid="link-nuget">
                  <Package className="w-5 h-5" />
                </Button>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 shrink-0"
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-primary/5 rounded-full transform translate-x-4 translate-y-4" />
              <img
                src={profileImg}
                alt={profileData.name}
                className="w-full h-full object-cover rounded-full border-4 border-background shadow-xl relative z-10"
                data-testid="img-profile"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <SectionHeader title="Work Experience" subtitle="My professional journey and career milestones." />
        <div className="relative border-l-2 border-border ml-3 md:ml-6 space-y-12 pb-12">
          {experiencesData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm" />
              <Card className="p-6 md:p-8 border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground" data-testid={`text-position-${exp.id}`}>{exp.position}</h3>
                    <div className="flex items-center gap-2 text-primary mt-1 font-medium">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit h-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{exp.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education">
        <SectionHeader title="Education" subtitle="Academic background and qualifications." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card border border-border/50 rounded-md p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <GraduationCap className="w-24 h-24" />
                </div>
                <div className="relative z-10">
                  {edu.period && (
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider bg-primary/5 px-3 py-1 rounded-full mb-6">
                      <CalendarDays className="w-3 h-3" />
                      {edu.period}
                    </span>
                  )}
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2" data-testid={`text-degree-${edu.id}`}>
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-muted-foreground font-medium">{edu.institution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <SectionHeader title="Technical Skills" subtitle="Languages, frameworks, and tools I work with." />
        <div className="space-y-12">
          {skillsData.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-primary/20 rounded-full" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-background border border-border"
                    data-testid={`badge-skill-${skill}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <SectionHeader title="Key Projects" subtitle="A selection of projects across 9+ years of experience." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="h-full"
            >
              <ProjectCard className="h-full flex flex-col bg-card border-border/50">
                <CardHeader className="gap-2">
                  <div className="flex justify-between items-start gap-4 flex-wrap">
                    <div className="bg-primary/5 p-3 rounded-md text-primary mb-2">
                      <FolderGit2 className="w-6 h-6" />
                    </div>
                    {project.duration && (
                      <Badge variant="outline" className="text-xs">
                        {project.duration}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-2xl font-serif" data-testid={`text-project-${project.id}`}>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.split(',').map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs font-normal text-muted-foreground bg-secondary/30">
                        {tech.trim()}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </ProjectCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <SectionHeader title="Get in Touch" subtitle="Have a question or want to work together?" />
        <div className="max-w-xl">
          <Card className="p-8 bg-primary text-primary-foreground border-none shadow-xl">
            <h3 className="text-2xl font-serif font-bold mb-6">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-foreground/10 p-2 rounded-md">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60 mb-1">Email</p>
                  <a href={`mailto:${profileData.email}`} className="font-medium hover:underline" data-testid="link-email">
                    {profileData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-foreground/10 p-2 rounded-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60 mb-1">Location</p>
                  <p className="font-medium" data-testid="text-location">{profileData.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-foreground/10 p-2 rounded-md">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60 mb-1">LinkedIn</p>
                  <a href={profileData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline" data-testid="link-linkedin-contact">
                    linkedin.com/in/aravindiaar
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-foreground/10 p-2 rounded-md">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60 mb-1">GitHub</p>
                  <a href={profileData.githubUrl} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline" data-testid="link-github-contact">
                    github.com/aravindiaar
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-foreground/10 p-2 rounded-md">
                  <Package className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60 mb-1">NuGet</p>
                  <a href={profileData.nugetUrl} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline" data-testid="link-nuget-contact">
                    nuget.org/profiles/Aravindiaar
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </Layout>
  );
}

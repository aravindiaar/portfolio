import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get("/api/profile", async (req, res) => {
    const profile = await storage.getProfile();
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.json(profile);
  });

  app.get("/api/experiences", async (req, res) => {
    const experiences = await storage.getExperiences();
    res.json(experiences);
  });

  app.get("/api/education", async (req, res) => {
    const education = await storage.getEducation();
    res.json(education);
  });

  app.get("/api/skills", async (req, res) => {
    const skills = await storage.getSkills();
    res.json(skills);
  });

  app.get("/api/projects", async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.post("/api/messages", async (req, res) => {
    try {
      const messageData = insertMessageSchema.parse(req.body);
      const message = await storage.createMessage(messageData);
      res.json(message);
    } catch (error) {
      res.status(400).json({ message: "Invalid message data" });
    }
  });

  // Re-seed with new user data
  const existingProfile = await storage.getProfile();
  if (!existingProfile || existingProfile.name !== "Aravind Anbalagan" || !existingProfile.email || !existingProfile.location) {
    await storage.clearAll();
    await seedDatabase();
  }

  return httpServer;
}

async function seedDatabase() {
  await storage.createProfile({
    name: "Aravind Anbalagan",
    title: "Senior Backend & DevOps Engineer (.NET | Azure)",
    bio: "Senior Backend & DevOps Engineer with 9+ years of continuous full-time experience delivering enterprise-grade software solutions. Strong background in C#, .NET MVC/Web API, ETL systems, API development, system monitoring, automation, and AI-enabled document processing.",
    imageUrl: "/static/profile.jpeg",
    resumeUrl: "#",
    githubUrl: "https://github.com/aravindiaar",
    nugetUrl: "https://www.nuget.org/profiles/Aravindiaar",
    linkedinUrl: "https://www.linkedin.com/in/aravindiaar/",
    email: "aravindiaar@gmail.com",
    location: "Hamilton, New Zealand"
  });

  await storage.createExperience({
    company: "DSRC, Chennai, India",
    position: "Senior Software Engineer & DevOps Engineer",
    period: "March 2016 – Present",
    description: "Accumulated over 9 years of hands-on industry experience delivering backend, integration, and automation solutions. Designed systems using C#, .NET MVC, ASP.NET Web API. Owned full application lifecycle. Led performance improvement initiatives. Built CI/CD pipelines using Azure DevOps, Jenkins, Docker."
  });

  await storage.createEducation({
    institution: "Bachelor of Engineering",
    degree: "Computer Science",
    period: "India"
  });

  const skillGroups = [
    { name: "C#, .NET, ASP.NET MVC/Web API", category: "Backend & APIs" },
    { name: "Node.js, Python", category: "Scripting & Services" },
    { name: "JavaScript", category: "Frontend" },
    { name: "SQL Server, PostgreSQL, MySQL, Redis", category: "Databases" },
    { name: "Azure, Azure DevOps, Docker, Jenkins", category: "Cloud & DevOps" },
    { name: "ETL, API Monitoring, CI/CD, Git, PowerShell", category: "Practices" }
  ];

  for (const skill of skillGroups) {
    await storage.createSkill(skill);
  }

  const projects = [
    {
      title: "HRMS Platform",
      description: "Built ASP.NET MVC modules using C#, JavaScript, and MSSQL to manage employee data, attendance, and reporting.",
      technologies: "C#, JavaScript, MSSQL",
      link: "#"
    },
    {
      title: "Evi View – ETL Platform",
      description: "Designed and implemented ETL APIs in C# to ingest data from APIs and Excel sources into relational databases for analytics.",
      technologies: "C#, ETL, SQL",
      link: "#"
    },
    {
      title: "Supplier Gateway",
      description: "Developed Node.js services for intelligent document ingestion and retrieval.",
      technologies: "Node.js",
      link: "#"
    },
    {
      title: "KeyHouse",
      description: "Built Python-based backend services for AI-driven document processing and search.",
      technologies: "Python, AI",
      link: "#"
    }
  ];

  for (const project of projects) {
    await storage.createProject(project);
  }
}

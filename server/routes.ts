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

  // Seed data endpoint (optional, but good for initial setup)
  // We'll just run seed logic if profile is empty
  const existingProfile = await storage.getProfile();
  if (!existingProfile) {
    await seedDatabase();
  }

  return httpServer;
}

async function seedDatabase() {
  await storage.createProfile({
    name: "Sylendra Narunagiri",
    title: "Software Engineer | Full Stack Developer",
    bio: "Passionate developer with experience in building scalable web applications. skilled in React, Node.js, and modern cloud technologies. I love solving complex problems and creating intuitive user experiences.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    resumeUrl: "#"
  });

  await storage.createExperience({
    company: "Tech Solutions Inc.",
    position: "Senior Frontend Developer",
    period: "2021 - Present",
    description: "Leading the frontend team in developing enterprise-grade applications using React and TypeScript. Improved performance by 40% and reduced technical debt."
  });

  await storage.createExperience({
    company: "Creative Agency",
    position: "Web Developer",
    period: "2019 - 2021",
    description: "Built responsive websites and e-commerce platforms for various clients. Collaborated with designers to implement pixel-perfect UIs."
  });

  await storage.createEducation({
    institution: "University of Technology",
    degree: "B.S. in Computer Science",
    period: "2015 - 2019"
  });

  const skills = [
    { name: "JavaScript/TypeScript", category: "Languages" },
    { name: "React/Next.js", category: "Frontend" },
    { name: "Node.js/Express", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Git/GitHub", category: "Tools" },
    { name: "Docker", category: "DevOps" }
  ];

  for (const skill of skills) {
    await storage.createSkill(skill);
  }

  await storage.createProject({
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with cart, checkout, and admin dashboard.",
    technologies: "React, Node.js, MongoDB",
    link: "https://github.com/example/ecommerce"
  });

  await storage.createProject({
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates.",
    technologies: "Vue.js, Firebase",
    link: "https://github.com/example/task-app"
  });
}

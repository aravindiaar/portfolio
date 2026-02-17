import { 
  type Profile, type InsertProfile,
  type Experience, type InsertExperience,
  type Education, type InsertEducation,
  type Skill, type InsertSkill,
  type Project, type InsertProject,
  type Message, type InsertMessage,
  profile, experiences, education, skills, projects, messages
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getProfile(): Promise<Profile | undefined>;
  createProfile(profile: InsertProfile): Promise<Profile>;
  updateProfile(id: number, profile: Partial<InsertProfile>): Promise<Profile>;
  
  getExperiences(): Promise<Experience[]>;
  createExperience(experience: InsertExperience): Promise<Experience>;
  
  getEducation(): Promise<Education[]>;
  createEducation(education: InsertEducation): Promise<Education>;
  
  getSkills(): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  
  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  
  createMessage(message: InsertMessage): Promise<Message>;
  
  clearAll(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getProfile(): Promise<Profile | undefined> {
    const [result] = await db.select().from(profile).limit(1);
    return result;
  }

  async createProfile(insertProfile: InsertProfile): Promise<Profile> {
    const [result] = await db.insert(profile).values(insertProfile).returning();
    return result;
  }

  async updateProfile(id: number, insertProfile: Partial<InsertProfile>): Promise<Profile> {
    const [result] = await db.update(profile).set(insertProfile).where(eq(profile.id, id)).returning();
    return result;
  }

  async getExperiences(): Promise<Experience[]> {
    return await db.select().from(experiences);
  }

  async createExperience(insertExperience: InsertExperience): Promise<Experience> {
    const [result] = await db.insert(experiences).values(insertExperience).returning();
    return result;
  }

  async getEducation(): Promise<Education[]> {
    return await db.select().from(education);
  }

  async createEducation(insertEducation: InsertEducation): Promise<Education> {
    const [result] = await db.insert(education).values(insertEducation).returning();
    return result;
  }

  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async createSkill(skill: InsertSkill): Promise<Skill> {
    const [result] = await db.insert(skills).values(skill).returning();
    return result;
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async createProject(project: InsertProject): Promise<Project> {
    const [result] = await db.insert(projects).values(project).returning();
    return result;
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [result] = await db.insert(messages).values(insertMessage).returning();
    return result;
  }

  async clearAll(): Promise<void> {
    await db.delete(messages);
    await db.delete(projects);
    await db.delete(skills);
    await db.delete(education);
    await db.delete(experiences);
    await db.delete(profile);
  }
}

export const storage = new DatabaseStorage();

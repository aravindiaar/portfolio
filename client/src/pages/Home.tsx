import { useProfile } from "@/hooks/use-portfolio";
import { Layout } from "@/components/Layout";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Linkedin, Github } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  const { data: profile, isLoading } = useProfile();

  if (isLoading) {
    return (
      <Layout>
        <div className="space-y-8 mt-12">
          <div className="flex gap-8 items-center">
            <Skeleton className="w-32 h-32 rounded-full" />
            <div className="space-y-4 flex-1">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
            </div>
          </div>
          <Skeleton className="h-48 w-full" />
        </div>
      </Layout>
    );
  }

  if (!profile) return null;

  return (
    <Layout>
      <div className="flex flex-col-reverse lg:flex-row gap-12 items-center lg:items-start mt-8">
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-primary/80 font-medium tracking-wide uppercase text-sm mb-2">Hello, I'm</h3>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-4 leading-tight">
              {profile.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              {profile.title}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg text-muted-foreground leading-relaxed"
          >
            <p>{profile.bio}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link href="/projects">
              <Button size="lg" className="rounded-full px-8 gap-2 group">
                View Work 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="rounded-full px-8 gap-2">
                  <Download className="w-4 h-4" />
                  Resume
                </Button>
              </a>
            )}
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.6 }}
             className="flex gap-4 pt-8 border-t border-border"
          >
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Linkedin className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        {profile.imageUrl && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 shrink-0"
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-primary/5 rounded-full transform translate-x-4 translate-y-4" />
              <img 
                src={profile.imageUrl} 
                alt={profile.name}
                className="w-full h-full object-cover rounded-full border-4 border-background shadow-xl relative z-10"
              />
            </div>
          </motion.div>
        )}
      </div>
    </Layout>
  );
}

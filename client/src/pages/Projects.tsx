import { useProjects } from "@/hooks/use-portfolio";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const { data: projects, isLoading } = useProjects();

  if (isLoading) {
    return (
      <Layout>
        <div className="space-y-6">
          <Skeleton className="h-20 w-1/3 mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-64 rounded-xl" />
            ))}
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SectionHeader 
        title="Featured Projects" 
        subtitle="A selection of my recent work and experiments."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects?.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div className="bg-primary/5 p-3 rounded-lg text-primary mb-2">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-serif">{project.title}</CardTitle>
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
              
              <CardFooter className="pt-4 border-t border-border/30">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full gap-2 group" variant="default">
                      View Project
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Button>
                  </a>
                ) : (
                  <Button disabled className="w-full" variant="secondary">
                    Coming Soon
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
}

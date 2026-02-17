import { useSkills } from "@/hooks/use-portfolio";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const { data: skills, isLoading } = useSkills();

  // Group skills by category
  const skillsByCategory = skills?.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  if (isLoading) {
    return (
      <Layout>
        <div className="space-y-8">
          <Skeleton className="h-20 w-1/3 mb-12" />
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-8 w-32" />
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((j) => (
                  <Skeleton key={j} className="h-10 w-24 rounded-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SectionHeader 
        title="Technical Skills" 
        subtitle="Languages, frameworks, and tools I work with."
      />

      <div className="space-y-12">
        {Object.entries(skillsByCategory || {}).map(([category, categorySkills], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-primary/20 rounded-full" />
              {category}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {categorySkills.map((skill) => (
                <Badge 
                  key={skill.id}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium bg-background border border-border hover:border-primary/50 hover:bg-secondary/80 transition-all duration-300"
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
}

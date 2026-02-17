import { useExperiences } from "@/hooks/use-portfolio";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

export default function Experience() {
  const { data: experiences, isLoading } = useExperiences();

  if (isLoading) {
    return (
      <Layout>
        <div className="space-y-6">
          <Skeleton className="h-20 w-1/3 mb-12" />
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-40 w-full rounded-xl" />
          ))}
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SectionHeader 
        title="Work Experience" 
        subtitle="My professional journey and career milestones."
      />

      <div className="relative border-l-2 border-border ml-3 md:ml-6 space-y-12 pb-12">
        {experiences?.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm" />
            
            <Card className="p-6 md:p-8 hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
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
              
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {exp.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
}

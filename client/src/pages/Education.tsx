import { useEducation } from "@/hooks/use-portfolio";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { GraduationCap, CalendarDays } from "lucide-react";

export default function Education() {
  const { data: education, isLoading } = useEducation();

  if (isLoading) {
    return (
      <Layout>
        <div className="space-y-6">
          <Skeleton className="h-20 w-1/3 mb-12" />
          {[1, 2].map((i) => (
            <Skeleton key={i} className="h-32 w-full rounded-xl" />
          ))}
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SectionHeader 
        title="Education" 
        subtitle="Academic background and qualifications."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education?.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group"
          >
            <div className="h-full bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/20 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <GraduationCap className="w-24 h-24" />
              </div>
              
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary/80 uppercase tracking-wider bg-primary/5 px-3 py-1 rounded-full mb-6">
                  <CalendarDays className="w-3 h-3" />
                  {edu.period}
                </span>
                
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {edu.degree}
                </h3>
                
                <p className="text-lg text-muted-foreground font-medium">
                  {edu.institution}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
}

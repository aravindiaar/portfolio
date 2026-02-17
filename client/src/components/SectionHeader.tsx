import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3 relative inline-block">
          {title}
          <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary/20 rounded-full" />
        </h2>
        {subtitle && (
          <p className="text-muted-foreground text-lg max-w-2xl mt-4 leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}

import { cn } from "@/lib/utils";
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Code, 
  FolderGit2, 
  Mail,
  Menu,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "About", href: "#about", icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Skills", href: "#skills", icon: Code },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Contact", href: "#contact", icon: Mail },
];

export function Sidebar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  };

  const NavContent = () => (
    <div className="flex flex-col h-full py-6 md:py-8">
      <div className="px-6 mb-8">
        <h1 className="text-2xl font-serif font-bold text-primary tracking-tight">
          Aravind Anbalagan
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Senior Backend & DevOps Engineer (.NET | Azure)
        </p>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={handleClick}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200 cursor-pointer group",
                "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
              data-testid={`nav-${item.label.toLowerCase()}`}
            >
              <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
              <span className="font-medium text-sm">{item.label}</span>
            </a>
          );
        })}
      </nav>

      <div className="px-6 mt-auto">
        <p className="text-xs text-muted-foreground">
          {new Date().getFullYear()} Aravind Anbalagan.
          <br />All rights reserved.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 border-r border-border bg-background/50 backdrop-blur-xl z-50">
        <NavContent />
      </aside>

      <div className="md:hidden fixed top-0 left-0 right-0 h-16 border-b border-border bg-background/80 backdrop-blur-md z-50 flex items-center justify-between px-4">
        <span className="font-serif font-bold text-lg">Aravind Anbalagan</span>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <NavContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

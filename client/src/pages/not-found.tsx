import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 px-4">
        <div className="flex justify-center text-destructive">
          <AlertCircle className="w-16 h-16" />
        </div>
        <h1 className="text-4xl font-serif font-bold text-foreground">404 Page Not Found</h1>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/">
          <Button size="lg" className="mt-8">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

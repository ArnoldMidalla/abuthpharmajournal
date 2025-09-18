import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-background border-b border-border px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="" className="h-14" />
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/Linkbout"
            className="text-foreground hover:text-primary transition-colors"
          >
            Journal Topics
          </Link>
          <Link
            href="/journal-articles"
            className="text-foreground hover:text-primary transition-colors"
          >
            Published Articles
          </Link>
          <Link
            href="#"
            className="text-foreground hover:text-primary transition-colors"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-foreground hover:text-primary transition-colors"
          >
            For Subscribers
          </Link>
          <Link
            href="#"
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <Link
            href="#"
            className="text-foreground hover:text-primary transition-colors"
          >
            FAQ
          </Link>
        </nav>

        <Button variant="outline" className="hidden md:block">
          Login
        </Button>
      </div>
    </header>
  );
}

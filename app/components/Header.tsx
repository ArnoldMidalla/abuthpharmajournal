import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-background border-b border-border px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="" className="h-14" />
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="/"
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-foreground hover:text-primary transition-colors"
          >
            Journal Topics
          </a>
          <a
            href="#"
            className="text-foreground hover:text-primary transition-colors"
          >
            Submit Article
          </a>
          <a
            href="#"
            className="text-foreground hover:text-primary transition-colors"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-foreground hover:text-primary transition-colors"
          >
            For Subscribers
          </a>
          <a
            href="#"
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-foreground hover:text-primary transition-colors"
          >
            FAQ
          </a>
        </nav>

        <Button variant="outline" className="hidden md:block">
          Login
        </Button>
      </div>
    </header>
  );
}

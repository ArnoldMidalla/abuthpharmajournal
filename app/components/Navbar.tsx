import Link from "next/link";

export default function Navbar() {
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
            href="/about"
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
            href="/blog"
            className="text-foreground hover:text-primary transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/author-guidelines"
            className="text-foreground hover:text-primary transition-colors"
          >
            Author Guidelines
          </Link>
          <Link
            href="/contact"
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

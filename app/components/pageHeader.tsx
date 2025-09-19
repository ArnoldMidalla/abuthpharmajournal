interface PageHeaderProps {
  title: string;
  imageUrl: string;
}

import Link from "next/link";

export default function PageHeader({ title, imageUrl }: PageHeaderProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/${imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative flex h-full items-center justify-center">
          <div className="text-center text-white">
            <div className="mb-4 inline-block bg-blue-500/80 rounded px-6 py-2">
              <h1 className="text-2xl font-bold">{title}</h1>
            </div>
            {/* <p className="text-lg font-medium">SUBMIT / {title}</p> */}
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-muted/50 py-3">
        <div className="container mx-auto px-4 flex w-full justify-center">
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="text-primary hover:text-primary/80">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>{title}</span>
          </nav>
        </div>
      </div>
    </>
  );
}

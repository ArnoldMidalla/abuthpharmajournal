import { Button } from "@/components/ui/button";
// import heroBg from "@/assets/hero-bg.jpg";

const AuthorGuidelines = () => {
  return (
    <section
      className="relative py-16 text-primary-foreground overflow-hidden"
      style={{
        backgroundImage: `url(${
          "/footer_bg.jpg"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-primary/30 z-0" />

      {/* content above overlay */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Author Guidelines</h2>
          <p className="text-lg opacity-90 leading-relaxed mb-8">
            Published journal articles should have a clear and well-defined
            research question, which are substantive contributions to scientific
            knowledge, meet high standards of quality standards.
          </p>
          <Button
            variant="secondary"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Submission Guidelines
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AuthorGuidelines;

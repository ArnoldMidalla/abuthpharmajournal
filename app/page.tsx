import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import journalCover from "@/assets/journal-cover.jpg";
import Articles from "./components/Articles";
import AboutSection from "./components/About";
import NewsSection from "./components/NewsSection";
import AuthorGuidelines from "./components/AuthorGuidelines";

// const Hero = () => {
export default function Home() {
  return (
    <>
      <section
  className="relative text-primary-foreground py-16 overflow-hidden"
  style={{
    backgroundImage: `url("/background_image.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* gradient overlay behind */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#3384a0] to-[#3384a0] opacity-60 z-0" />

  {/* content above overlay */}
  <div className="relative z-10 container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <div className="text-sm font-medium opacity-90">ABUTHJ</div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          ABUTH Pharma Journal
        </h1>
        <p className="text-lg opacity-90 leading-relaxed max-w-md">
          ABUTH Pharma Journal, Improving Pharmacists' Education and
          Research Toward Enhancing Patient Treatment Outcomes.
        </p>
        <Button
          variant="secondary"
          size="lg"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
        >
          Read More
        </Button>
      </div>

      <div className="flex justify-center">
        <div className="relative">
          <img
            src="FRONTCOVER.jpg"
            alt="ABUTH Pharma Journal Cover"
            className="max-w-xs rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg"></div>
        </div>
      </div>
    </div>
  </div>
</section>

      <Articles />
      <AboutSection />
      <NewsSection/>
      <AuthorGuidelines/>
    </>
  );
}

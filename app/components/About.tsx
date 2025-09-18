import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex gap-12">
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                About ABUTHJ
              </h2>
              <h3 className="text-xl text-muted-foreground">
                Find out more About Our Journal
              </h3>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are an open-access publisher known for both our high-quality
                policies and rigorous peer review. From its inception in 2020,
                Frontiers has championed the transformation of scholarly
                publishing by building cutting-edge technology to support
                research across all subjects. We believe in the power of
                collaboration and open knowledge to drive innovation, enabling
                researchers, academics, clinicians, and science enthusiasts to
                embark on a mission to make science open. Since 2020, we have been
                working to keep science open, helping thousands of research
                discoveries to reach new heights and potentially save lives and
                build communities.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                We are committed to a rigorous peer review process with an
                emphasis on publishing research and discoveries across all
                scientific and medical fields. Our goal is to advance knowledge
                beyond frontiers and to drive breakthroughs in research,
                knowledge, and technology innovations to create a more open and
                collaborative environment.
              </p>

              <div className="text-center">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Read More
                </Button>
              </div>
            </div>
          </div>
          <div className="w-150 h-120">
            <img
              src="280715085_1585598335167989_1248323062407491675_n.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { Button } from "@/components/ui/button";

const articlesList = [
  {
    id: 1,
    title: "A survey on knowledge of online gaming and its prevalence among university students",
    author: "No Citations",
    volume: "Volume 1",
    issue: "Issue 1",
    status: "Journal of Reviews"
  },
  {
    id: 2,
    title: "Suitability of commercial intravenous immunoglobulin for subcutaneous administration in primary immunodeficiency",
    author: "No Citations",
    volume: "Volume 1",
    issue: "Issue 1", 
    status: "Journal of Reviews"
  },
  {
    id: 3,
    title: "HPLC-DAD: determination of dexamethasone and budesonide in pharmaceutical preparations and their potential degradation products",
    author: "No Citations",
    volume: "Volume 1",
    issue: "Issue 1",
    status: "Journal of Reviews"
  },
  {
    id: 4,
    title: "World of Oil",
    author: "No Citations",
    volume: "Volume 1",
    issue: "Issue 1",
    status: "Journal of Reviews"
  },
  {
    id: 5,
    title: "World of Oil",
    author: "No Citations", 
    volume: "Volume 1",
    issue: "Issue 1",
    status: "Journal of Reviews"
  },
  {
    id: 6,
    title: "Utilization and outcome of novel drugs in cancer treatment: A contemporary systematic review",
    author: "No Citations",
    volume: "Volume 1", 
    issue: "Issue 1",
    status: "Journal of Reviews"
  }
];

const Articles = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Articles</h2>
          <h3 className="text-xl text-muted-foreground">Our Latest Articles</h3>
        </div>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {articlesList.map((article) => (
            <div key={article.id} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground mb-2 leading-relaxed">
                    {article.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-2">{article.author}</p>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>{article.volume}</span>
                    <span>{article.issue}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {article.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline">View All</Button>
        </div>
      </div>
    </section>
  );
};

export default Articles;
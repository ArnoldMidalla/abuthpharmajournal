import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import pharmacistsDay from "@/assets/pharmacists-day.jpg";
import pharmacyEducation from "@/assets/pharmacy-education.jpg";
import pharmacoeconomics from "@/assets/pharmacoeconomics.jpg";

const newsItems = [
  {
    id: 1,
    title: "Celebrating World Pharmacists Day – Transforming Global Health",
    description: "25th of September is the day when we celebrate the significant role that pharmacists in improving world health...",
    readTime: "Read More",
    image: 
    '/realistic-pharmacist-day-background_23-2149047452.jpg'    
},
  {
    id: 2,
    title: "The Future of Pharmacy Education and Training",
    description: "Explore how pharmacy education and technology enhancing patient care outcomes and pharmaceutical training...",
    readTime: "Read More", 
    image: 
    '/2148777431.jpg'
  },
  {
    id: 3,
    title: "Pharmacoeconomics: Balancing Cost and Care in Healthcare Systems",
    description: "Industry-wide cost minimization with care improvements and economic insights in pharmaceutical industry...",
    readTime: "Read More",
    image: 
    '/2148533501.jpg'
  }
];

const NewsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">News and Blog Section</h2>
          <p className="text-muted-foreground">
            Stay informed with the latest news in pharmacy and the best content for health care and other publications
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-lg mb-3 leading-tight">
                  {item.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-accent hover:text-accent/80"
                >
                  {item.readTime}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline">View All</Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
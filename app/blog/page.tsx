import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: 'Celebrating World Pharmacists Day - Transforming Global Health',
    date: 'September 25, 2024',
    excerpt: 'Every year on September 25, we celebrate World Pharmacists Day—a day to acknowledge the vital role pharmacists play in healthcare.',
    image: '/realistic-pharmacist-day-background_23-2149047452.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'The Future of Pharmacy Education and Training',
    date: 'September 18, 2024',
    excerpt: 'The field of pharmacy is constantly evolving, driven by advancements in technology, new medications, and the changing landscape of patient care.',
    image: '/2148777431.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'Pharmacoeconomics: Balancing Cost and Care in Healthcare Systems',
    date: 'August 28, 2024',
    excerpt: 'In today\'s healthcare environment, the cost of medications and treatments is a major concern for both patients and providers.',
    image: '/2148533501.jpg',
    link: '#',
  },
  {
    id: 4,
    title: 'The Role of Clinical Pharmacists in Enhancing Patient Care',
    date: 'August 16, 2023',
    excerpt: 'Clinical pharmacists are an essential part of the healthcare team, dedicated to ensuring the safe, effective, and optimized use of medications.',
    image: '/2151684893.jpg',
    link: '#',
  },
];

const Blog = () => {
  return (
    <main className="bg-white">
      {/* Blog section title */}
      <section className="bg-blue-900 bg-opacity-75 bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}>
        <div className="container mx-auto py-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">BLOG</h1>
          <p className="text-lg">Home / Blog</p>
        </div>
      </section>

      {/* Blog posts grid */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <img className="w-full h-48 object-cover" src={post.image} alt={post.title} />
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription className="text-sm">Posted on <span className="text-blue-600">{post.date}</span></CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Link href={post.link} className="text-blue-600 font-semibold hover:underline">Read more</Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blog;
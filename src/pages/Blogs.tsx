import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for Maintaining Healthy Teeth at Home",
    excerpt: "Learn simple daily habits that can keep your teeth healthy and prevent dental problems before they start.",
    author: "Dr. Ahmed Khan",
    date: "March 15, 2024",
    category: "Oral Health",
    image: "/placeholder-blog-1.jpg",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Complete Guide to Dental Implants",
    excerpt: "Everything you need to know about dental implants, from procedure to recovery and long-term care.",
    author: "Dr. Fatima Ali",
    date: "March 10, 2024", 
    category: "Dental Implants",
    image: "/placeholder-blog-2.jpg",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Teeth Whitening: Professional vs At-Home Options",
    excerpt: "Compare the effectiveness, safety, and cost of professional teeth whitening versus at-home treatments.",
    author: "Dr. Hassan Shah",
    date: "March 5, 2024",
    category: "Cosmetic Dentistry", 
    image: "/placeholder-blog-3.jpg",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Understanding Root Canal Treatment: What to Expect",
    excerpt: "Demystifying root canal treatment - the procedure, recovery, and why it's often the best option to save your tooth.",
    author: "Dr. Ahmed Khan",
    date: "February 28, 2024",
    category: "Endodontics",
    image: "/placeholder-blog-4.jpg", 
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Braces vs Clear Aligners: Which is Right for You?",
    excerpt: "A comprehensive comparison of traditional braces and clear aligners to help you make the best choice.",
    author: "Dr. Fatima Ali",
    date: "February 20, 2024",
    category: "Orthodontics",
    image: "/placeholder-blog-5.jpg",
    readTime: "6 min read"
  },
  {
    id: 6,
    title: "Emergency Dental Care: When to See a Dentist Immediately",
    excerpt: "Learn to recognize dental emergencies and understand when immediate professional care is necessary.",
    author: "Dr. Hassan Shah", 
    date: "February 15, 2024",
    category: "Emergency Care",
    image: "/placeholder-blog-6.jpg",
    readTime: "4 min read"
  }
];

const categories = ["All", "Oral Health", "Cosmetic Dentistry", "Orthodontics", "Emergency Care", "Dental Implants"];

export default function Blogs() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white">Dental Health Blog</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Latest Dental Health Insights
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Stay informed about dental health, treatments, and tips from our expert dentists. 
            Your guide to maintaining a healthy, beautiful smile.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Button 
                key={category} 
                variant={category === "All" ? "medical" : "outline"} 
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <Card className="overflow-hidden border-0 shadow-custom-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-full bg-gradient-subtle"></div>
                <div className="p-8 lg:p-12">
                  <Badge className="mb-4 bg-primary/10 text-primary">Featured</Badge>
                  <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <Button variant="medical" asChild>
                    <Link to={`/blog/${blogPosts[0].id}`}>
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="group hover:shadow-custom-xl transition-smooth border-0 overflow-hidden">
                <div className="h-48 bg-gradient-subtle"></div>
                <div className="p-6">
                  <Badge className="mb-3 bg-primary/10 text-primary text-xs">
                    {post.category}
                  </Badge>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-smooth">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth" asChild>
                    <Link to={`/blog/${post.id}`}>
                      Read More
                      <ArrowRight className="h-3 w-3 ml-2" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-primary/10 text-primary">Stay Updated</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Dental Health Tips in Your Inbox
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest dental health tips, treatment updates, and exclusive offers from Dental Land.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-input bg-background"
            />
            <Button variant="medical">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Have Questions About Your Dental Health?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Our expert dentists are here to help. Schedule a consultation to discuss your dental concerns and treatment options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="lg" asChild>
                <a href="tel:03334855247">Book Consultation</a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact-us">Visit Our Clinic</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
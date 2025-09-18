import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              
          <img src="/logo.png" alt="" className="h-14" />
            </div>
            <div className="space-y-2 text-sm opacity-90">
              <p>ADDRESS:</p>
              <p>AHMADU BELLO UNIVERSITY TEACHING HOSPITAL</p>
              <p>E-mail: abuthj.journal@gmail.com</p>
              <p>Phone: +234 803 318 2959</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <div className="space-y-2 text-sm opacity-90">
              <p>Quick office hours:</p>
              <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
              <p>Sat: 10:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm opacity-90">
              <p><a href="/" className="hover:text-accent transition-colors">Home</a></p>
              <p><a href="/about" className="hover:text-accent transition-colors">About Us</a></p>
              <p><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></p>
              <p><a href="#" className="hover:text-accent transition-colors">Terms and Conditions</a></p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Open access</h4>
            <div className="space-y-2 text-sm opacity-90">
              <p><Link href="#" className="hover:text-accent transition-colors">Quick submissions</Link></p>
              <p><Link href="#" className="hover:text-accent transition-colors">Research and publication ethics</Link></p>
              <p><Link href="#" className="hover:text-accent transition-colors">Editorial boards</Link></p>
              <p><Link href="#" className="hover:text-accent transition-colors">submission system track your submissions</Link></p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-75">
            Copyright 2024 ABUTH Our Journal - Designed and Developed by Ghana Science
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
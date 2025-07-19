import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const footerLinks = {
    Product: ["PeopleGPT", "Talent Insights", "Email Outreach", "Juicebox Agents", "Pricing"],
    Company: ["About", "Careers", "Blog", "Request a demo"],
    Resources: ["Customer stories", "Help center", "Terms of service", "Privacy policy"],
    Compare: ["Gemini", "Sourcewell", "Seekout", "HireEZ"],
  };

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold mb-4">Stay up to date</h3>
            <p className="text-sm text-gray-600 mb-4">Join our newsletter to stay up to date on features and releases.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-grow" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link}><a href="#" className="text-sm text-gray-600 hover:text-primary">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">Juicebox</span>
          </div>
          <p className="text-sm text-gray-500 mt-4 md:mt-0">&copy; {new Date().getFullYear()} Juicebox, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
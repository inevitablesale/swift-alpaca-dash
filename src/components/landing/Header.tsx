import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-xl">Juicebox</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#" className="flex items-center gap-1 hover:text-primary">Product <ChevronDown className="h-4 w-4" /></a>
            <a href="#" className="flex items-center gap-1 hover:text-primary">Resources <ChevronDown className="h-4 w-4" /></a>
            <a href="#" className="hover:text-primary">Pricing</a>
            <a href="#" className="hover:text-primary">Request a demo</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/admin/integrations">
            <Button variant="outline">Admin Panel</Button>
          </Link>
          <Button variant="ghost">Sign in</Button>
          <Button>Try for free</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
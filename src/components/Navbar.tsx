
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-content flex justify-between items-center py-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-research rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">GR</span>
          </div>
          <span className="font-semibold text-xl text-gray-800">GRAY-RAIN</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-research font-medium">
            Home
          </Link>
          <Link to="/research" className="text-gray-600 hover:text-research font-medium">
            Research
          </Link>
          <Link to="/team" className="text-gray-600 hover:text-research font-medium">
            Team
          </Link>
          <Link to="/publications" className="text-gray-600 hover:text-research font-medium">
            Publications
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-research font-medium">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-research font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/research" 
              className="text-gray-600 hover:text-research font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Research
            </Link>
            <Link 
              to="/team" 
              className="text-gray-600 hover:text-research font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link 
              to="/publications" 
              className="text-gray-600 hover:text-research font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Publications
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-600 hover:text-research font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

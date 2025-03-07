
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            aria-label="GrayRain Logo"
          >
            <div className="relative w-10 h-10 overflow-hidden">
              <div className="absolute inset-0 animate-float">
                <img 
                  src="/src/assets/logo.svg" 
                  alt="GrayRain Logo" 
                  className="w-full h-full object-contain" 
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/40?text=GR";
                  }}
                />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              GrayRain
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
            >
              Home
            </Link>
            <Link 
              to="/team" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
            >
              Team
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
            >
              Contact
            </Link>
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors py-2 focus:outline-none"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                <span>Virtual Hospital</span>
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 animate-fade-in"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div className="py-1" role="none">
                    <a
                      href="https://rcompute.nursing.umich.edu/VH0216/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      role="menuitem"
                    >
                      Virtual Hospital - ShinyServer
                    </a>
                    <a
                      href="https://grayrain.shinyapps.io/grayrain/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      role="menuitem"
                    >
                      Virtual Hospital - Posit
                    </a>
                  </div>
                </div>
              )}
            </div>
            {/* Fix: Removed the HTML comment from within JSX attributes */}
            <a 
              href="https://vh-authentication.auth.us-east-1.amazoncognito.com/login?client_id=56q33gpcadjk1lk5iv17htnplr&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Frcompute.nursing.umich.edu%2FVH_24%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 btn-hover-effect"
            >
              Login / Sign Up
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-md p-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        } overflow-hidden transition-all duration-300 ease-in-out`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-4 py-4 bg-white/95 backdrop-blur-sm shadow-lg animate-slide-down">
          <Link
            to="/"
            className="block py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/team"
            className="block py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Team
          </Link>
          <Link
            to="/contact"
            className="block py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="py-2">
            <div className="text-base font-medium text-gray-700 mb-2">Virtual Hospital</div>
            <a
              href="https://rcompute.nursing.umich.edu/VH0216/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 pl-4 text-sm text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Virtual Hospital - ShinyServer
            </a>
            <a
              href="https://grayrain.shinyapps.io/grayrain/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 pl-4 text-sm text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Virtual Hospital - Posit
            </a>
          </div>
          <div className="pt-4">
            <a
              href="https://vh-authentication.auth.us-east-1.amazoncognito.com/login?client_id=56q33gpcadjk1lk5iv17htnplr&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Frcompute.nursing.umich.edu%2FVH_24%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 transition-colors focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
            >
              Login / Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

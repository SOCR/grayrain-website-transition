
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
            <img 
              src="/lovable-uploads/514e7c3b-fb30-4c3f-927c-d738bd44539c.png" 
              alt="GrayRain Logo" 
              className="h-8 w-auto"
            />
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
            <Link 
              to="/data-generation" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
            >
              Data Generation
            </Link>
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors py-2 focus:outline-none"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                <span>Products & Services</span>
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 animate-fade-in"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div className="py-1" role="none">
                    <a
                      href="https://vh.gray-rain.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      role="menuitem"
                    >
                      VH Webapp
                    </a>
                    <a
                      href="https://gr-sim-tools.gray-rain.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      role="menuitem"
                    >
                      DataSifter vs. Synthea vs. Gretel
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      role="menuitem"
                    >
                      VH RShiny App
                    </a>
                    <a
                      href="https://dmx.gray-rain.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      role="menuitem"
                    >
                      DMX
                    </a>
                    <a
                      href="https://dhc.gray-rain.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      role="menuitem"
                    >
                      DHC Environment
                    </a>
                    <a
                      href="https://gr-ehr-sim.lovable.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      role="menuitem"
                    >
                      EHR Simulator
                    </a>
                    <a
                      href="https://qi.gray-rain.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      role="menuitem"
                    >
                      QI App
                    </a>
                    <a
                      href="https://sdmh.gray-rain.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      role="menuitem"
                    >
                      Depression & Mental Health App
                    </a>
                    <a
                      href="https://socr-dslo.gray-rain.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      role="menuitem"
                    >
                      Longitudinal Data Obfuscation
                    </a>
                  </div>
                </div>
              )}
            </div>
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
          <Link
            to="/data-generation"
            className="block py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Data Generation
          </Link>
          <div className="py-2">
            <div className="text-base font-medium text-gray-700 mb-2">Products & Services</div>
            <a
              href="https://vh.gray-rain.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 pl-4 text-sm text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              VH Webapp
            </a>
            <a
              href="https://gr-sim-tools.gray-rain.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 pl-4 text-sm text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              GR DataSifter vs. Synthea vs. Gretel
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 pl-4 text-sm text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              VH RShiny App
            </a>
            <a
              href="https://dmx.gray-rain.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 pl-4 text-sm text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              DMX
            </a>
            <a
              href="https://dhc.gray-rain.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 pl-4 text-sm text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              DHC Environment
            </a>
            <a
              href="https://gr-ehr-sim.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 pl-4 text-sm text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              EHR Simulator
            </a>
            <a
              href="https://qi.gray-rain.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 pl-4 text-sm text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              QI App
            </a>
            <a
              href="https://sdmh.gray-rain.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 pl-4 text-sm text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Depression & Mental Health App
            </a>
            <a
              href="https://socr-dslo.gray-rain.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 pl-4 text-sm text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Longitudinal Data Obfuscation
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

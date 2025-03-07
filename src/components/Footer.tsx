
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo & Copyright */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-flex items-center mb-6">
              <div className="relative w-10 h-10 overflow-hidden mr-3">
                <div className="absolute inset-0 animate-float">
                  <img 
                    src="/src/assets/logo-white.svg" 
                    alt="GrayRain Logo" 
                    className="w-full h-full object-contain" 
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/40?text=GR";
                    }}
                  />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight">
                GrayRain
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              GrayRain designs innovative tools, builds effective AI services and promotes large-scale data-driven health analytics.
            </p>
            <p className="text-gray-500 text-sm">
              © {currentYear} GrayRain. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 md:col-start-7">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#what-we-do" className="text-gray-400 hover:text-white transition-colors">
                  Synthetic Patient Generation
                </a>
              </li>
              <li>
                <a href="#what-we-do" className="text-gray-400 hover:text-white transition-colors">
                  Data Obfuscation
                </a>
              </li>
              <li>
                <a href="#what-we-do" className="text-gray-400 hover:text-white transition-colors">
                  Data Augmentation
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <a
              href="https://www.linkedin.com/company/34612225/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
            <div className="mt-6">
              <a
                href="https://vh-authentication.auth.us-east-1.amazoncognito.com/login?client_id=56q33gpcadjk1lk5iv17htnplr&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Frcompute.nursing.umich.edu%2FVH_24%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-900 transition-colors"
              >
                Access Virtual Hospital
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <p className="text-sm text-gray-500">
            Based at the University of Michigan since 2019
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { Link } from "react-router-dom";
import { Github, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-content py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-research rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">GR</span>
              </div>
              <span className="font-semibold text-lg text-gray-800">GRAY-RAIN</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Advancing research in gray matter analysis, statistical methodologies, and neuroimaging technologies.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/SOCR/gray-rain-website" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-gray-600 hover:text-gray-900" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-600 hover:text-gray-900" />
              </a>
              <a href="mailto:contact@example.org" aria-label="Email">
                <Mail className="h-5 w-5 text-gray-600 hover:text-gray-900" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-research">Home</Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-600 hover:text-research">Research</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-600 hover:text-research">Team</Link>
              </li>
              <li>
                <Link to="/publications" className="text-gray-600 hover:text-research">Publications</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/SOCR/gray-rain-website" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-research">GitHub Repository</a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-research">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm text-center">
            &copy; {currentYear} GRAY-RAIN Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

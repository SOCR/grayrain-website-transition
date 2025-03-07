
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HomeIcon } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center py-20">
        <div className="max-w-md mx-auto">
          <div className="relative">
            <h1 className="text-9xl font-bold text-blue-600 mb-4 animate-float">404</h1>
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100 rounded-full opacity-70 blur-xl"></div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 mt-6">
            Page Not Found
          </h2>
          
          <p className="text-gray-600 mb-8">
            We couldn't find the page you're looking for. The page may have been moved, deleted, or never existed.
          </p>
          
          <Link 
            to="/"
            className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-md hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 btn-hover-effect"
          >
            <HomeIcon className="mr-2 h-5 w-5" />
            Return to Home
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
